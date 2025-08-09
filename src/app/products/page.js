"use client";
import axios from "axios";
import { categoryNames } from "@/data/categoryNames";
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

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 md:pt-[100px] ">
      {/* <div className="mb-8 category-titles">
        <h1 className=" w-full text-center ">All Products</h1>
      </div> */}

      {categoryNames.map((group) => {
        const groupProducts = products.filter((product) =>
          group.categories.includes(product.category)
        );

        if (groupProducts.length === 0) return null;

        return (
          <div key={group.title} className="mb-12 ">
            <h2 className="category-titles mb-10">{group.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 ">
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
