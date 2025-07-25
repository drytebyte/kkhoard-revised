import dbConnect from '../../../lib/dbConnect'
import Product from '../../../models/Product'
export default async function handler(req, res) {
  await dbConnect();

  await Product.deleteMany({});

  const products = [
    {
      name: "Elegant Leather Handbag",
      description: "Genuine leather handbag with gold accents.",
      price: 350,
      image: "/images/handbag.jpg",
      stock: 20,
      category: "Fashion",
    },
    {
      name: "Luxury Gold Watch",
      description: "Stylish gold-plated watch with leather strap.",
      price: 1200,
      image: "/images/watch.jpg",
      stock: 10,
      category: "Accessories",
    },
    {
      name: "Wireless Bluetooth Speaker",
      description: "Compact speaker with powerful bass and long battery life.",
      price: 280,
      image: "/images/speaker.jpg",
      stock: 50,
      category: "Electronics",
    },
    {
      name: "African Print Shirt",
      description: "Colorful kente-inspired shirt with soft cotton fabric.",
      price: 180,
      image: "/images/shirt.jpg",
      stock: 35,
      category: "Clothing",
    },
    {
      name: "Modern Office Desk Lamp",
      description: "LED lamp with adjustable brightness and USB charging.",
      price: 220,
      image: "/images/lamp.jpg",
      stock: 40,
      category: "Home",
    }
  ];

  try {
    const created = await Product.insertMany(products);
    res.status(201).json({ message: "Seeded successfully", products: created });
  } catch (error) {
    res.status(500).json({ message: "Seeding failed", error });
  }
}

