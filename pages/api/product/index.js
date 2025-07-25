import mongoose from "mongoose";
import Product from "../../../models/Product";

const handler = async (req, res) => {
  const { method } = req;
  const uri = process.env.MONGODB_URI;

  await mongoose.connect(uri);

  if (method === "GET") {
    const products = await Product.find({});
    return res.status(200).json(products);
  }

  if (method === "POST") {
    try {
      const product = new Product(req.body);
      await product.save();
      return res.status(201).json(product);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).end(`Method ${method} Not Allowed`);
};

export default handler;