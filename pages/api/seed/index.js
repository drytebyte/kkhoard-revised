import dbConnect from '../../../lib/dbconnect';
import Product from '../../../models/Product';

export default async function handler(req, res) {
  try {
    await dbConnect();

    await Product.deleteMany();

    await Product.insertMany([
      {
        name: 'Handbag',
        slug: 'handbag',
        description: 'Stylish black handbag',
        price: 120,
        countInStock: 10,
        image: '/images/handbag.jpg',
        category: 'Accessories',
        brand: 'KK Hoard'
      },
      {
        name: 'Table Lamp',
        slug: 'lamp',
        description: 'Modern table lamp',
        price: 85,
        countInStock: 7,
        image: '/images/lamp.jpg',
        category: 'Home Decor',
        brand: 'KK Hoard'
      }
    ]);

    res.status(200).json({ message: 'Database seeded successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Seeding failed', error });
  }
}