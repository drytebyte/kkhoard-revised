import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then(setProducts)
      .catch((err) => console.error("Failed to fetch products", err));
  }, []);

  return (
    <div className="min-h-screen bg-black text-white py-10 px-4">
      <h1 className="text-4xl font-bold text-center text-gold mb-10">Welcome to KK Hoard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {products.map((product) => (
          <Link key={product._id} href={`/product/${product._id}`}>
            <div className="bg-white text-black rounded-xl shadow-lg p-4 hover:scale-105 transition-transform cursor-pointer">
              <img
                src={product.image || "/images/placeholder.jpg"}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold text-gold">{product.name}</h2>
              <p className="text-lg font-medium">GHS {product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
