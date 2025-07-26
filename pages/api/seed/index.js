import dbConnect from '../../../lib/dbConnect';
import Product from '../../../models/Product';

export default async function handler(req, res) {
  try {
    await dbConnect();

    // Optional: delete all before inserting
    await Product.deleteMany();

    await Product.insertMany([
      {
        name: 'Sample Product 1',
        slug: 'sample-product-1',
        description: 'A great product for testing.',
        price: 49.99,
        countInStock: 10,
        image: '/uploads/sample1.jpg',
        category: 'Accessories',
        brand: 'KK Hoard',
      },
      {
        name: 'Sample Product 2',
        slug: 'sample-product-2',
        description: 'Another test product.',
        price: 79.99,
        countInStock: 5,
        image: '/uploads/sample2.jpg',
        category: 'Home Decor',
        brand: 'KK Hoard',
      }
    ]);

    res.status(200).json({ message: 'Seeded successfully' });
  } catch (error) {
    console.error('Seeding error:', error);
    res.status(500).json({ message: 'Seeding failed' });
  }
}
