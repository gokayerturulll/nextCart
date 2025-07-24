"use client";
import axios from "axios";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";

import React, { useEffect, useState } from "react";

export default function ProductsPage() {
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

  const categoryNames = [
    {
      title: "Beauty",
      categories: ["beauty", "skincare", "fragrances"],
    },
    {
      title: "Watches",
      categories: ["mens-watches", "womens-watches"],
    },
    {
      title: "Groceries",
      categories: ["groceries"],
    },
    {
      title: "Shoes",
      categories: ["mens-shoes", "womens-shoes"],
    },
    {
      title: "Rides",
      categories: ["vehicle", "motorcycle"],
    },
    {
      title: "Men's Fashion",
      categories: ["mens-shirts", "mens-shoes", "mens-watches", "sunglasses"],
    },

    {
      title: "Women's Fashion",
      categories: [
        "womens-dresses",
        "womens-shoes",
        "womens-watches",
        "womens-bags",
        "womens-jewellery",
        "sunglasses",
      ],
    },
    {
      title: "Sports",
      categories: ["sports-accessories"],
    },
    {
      title: "Home & Furniture",
      categories: [
        "home-decoration",
        "furniture",
        "lighting",
        "kitchen-accessories",
      ],
    },
    {
      title: "Electronics",
      categories: ["smartphones", "laptops", "tablets", "mobile-accessories"],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-8 ">
      <div className="mb-8 category-titles">
        <h1 className=" w-full text-center ">All Products</h1>
      </div>

      {categoryNames.map((group) => {
        const groupProducts = products.filter((product) =>
          group.categories.includes(product.category)
        );

        if (groupProducts.length === 0) return null;

        return (
          <div key={group.title} className="mb-12 ">
            <h2 className="category-titles mb-10">{group.title}</h2>
            <div className="grid grid-cols-4 gap-5">
              {groupProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
