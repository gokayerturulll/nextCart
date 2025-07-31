"use client";
import axios from "axios";
import ProductCard from "@/components/ProductCard";
import React, { useEffect, useState } from "react";

export default function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const respond = await axios.get(
          "https://dummyjson.com/products?limit=194"
        );

        setProducts(respond.data.products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  const mainCategories = [
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "womens-dresses",
    "womens-shoes",
    "womens-watches",
    "womens-bags",
    "womens-jewellery",
    "sunglasses",
  ];

  const mainPageProducts = products.filter((product) =>
    mainCategories.includes(product.category)
  );

  const popularProducts = mainPageProducts.slice(0, 16);
  const discountedProducts = mainPageProducts.slice(16, 36);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="category-titles mb-4">Popular Products</h1>

      <div className="grid grid-cols-4 gap-5 mb-10">
        {popularProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <h1 className="category-titles mb-4">New Arrivals</h1>
      <div className="grid grid-cols-4 gap-5">
        {discountedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
