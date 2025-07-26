import dbConnect from "@/lib/dbConnect";
import Product from "@/models/Product";

export default async function handler(req, res) {
  await dbConnect();

  try {
    const result = await Product.deleteMany({});
    res.status(200).json({ message: "All products cleared", result });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete products", error });
  }
}

