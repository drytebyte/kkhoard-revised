import dbConnect from '../../../lib/dbConnect'
import Product from '../../../models/Product'

export default async function handler(req, res) {
  await dbConnect();
  await Product.deleteMany({});
  res.status(200).json({ message: 'Database cleared' });
}

