import mongoose from "mongoose";

export default async function handler(req, res) {
  const uri = process.env.MONGODB_URI;
  if (!uri) return res.status(500).json({ connected: false, error: "Missing MongoDB URI" });

  try {
    await mongoose.connect(uri);
    res.status(200).json({ connected: true });
  } catch (error) {
    res.status(500).json({ connected: false, error: error.message });
  }
}
