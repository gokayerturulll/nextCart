"use client";
import axios from "axios";
import ProductCard from "@/components/ProductCard";
import React, { useEffect, useState } from "react";

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [email, setEmail] = useState("");
  const [showMsg, setShowMsg] = useState(false);
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

  const successfullySubscribed = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (email.trim() !== "") {
      setShowMsg(true);
      setEmail("");
      setTimeout(() => setShowMsg(false), 3000);
    }
  };

  const mainCategories = [
    "mens-shirts",
    "womens-dresses",
    "womens-bags",
    // "mens-shoes",
    "mens-watches",
    // "womens-watches",

    "womens-shoes",

    // "womens-jewellery",
    // "sunglasses",
  ];

  const mainPageProducts = products.filter((product) =>
    mainCategories.includes(product.category)
  );

  const popularProducts = mainPageProducts.slice(0, 24);

  return (
    <div>
      {/* banner */}
      <div className="w-full relative mb-10">
        <img
          src="/images/img1.png"
          alt="banner"
          className=" mt-18 w-full h-[450px] object-cover"
        />

        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black/50">
          <h1 className="text-white text-5xl  font-bold drop-shadow-lg">
            Pre Season
          </h1>
          <p className="text-white text-xl  mt-4 mb-6 drop-shadow-lg">
            The latest trends are just a click away.
          </p>
          <a href="products">
            <button className="bg-gray-100 text-black font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-colors duration-300 cursor-pointer">
              Shop Now
            </button>
          </a>
        </div>
      </div>

      {/* products */}
      <div className="container mx-auto p-4  sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 mb-10">
          {popularProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* email */}

        <div className="bg-gray-100 mt-10 py-16 max-w-full mx-auto text-center px-4 ">
          <h2 className="text-3xl font-bold">Join Our Newsletter</h2>
          <p className="mt-2 text-gray-600">
            Get 10% off on your first order and stay up-to-date with our latest
            news.
          </p>

          {showMsg && (
            <div className="mt-4 bg-green-100 text-green-800 px-4 py-2 rounded-md shadow-sm inline-block">
              Successfully subscribed to our newsletter! 🎉
            </div>
          )}

          <form className="mt-6 max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 px-4 py-2  outline-none focus:border-2 focus:border-gray-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              onClick={successfullySubscribed}
              className="bg-black text-white font-semibold px-6 py-3  hover:bg-gray-800 cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* ADVANTAGES */}
        <div className="grid grid-cols-1 md:grid-cols-3 py-4 gap-2 mt-5">
          <div className="advantages">
            <h2 className="font-semibold mb-4">Top Quality Products</h2>
            <span className="text-lg">
              Carefully selected products designed for timeless style and
              longevity.
            </span>
          </div>

          <div className="advantages">
            <h2 className="font-semibold mb-4">Fast Shipping Service</h2>
            <span className="text-lg">
              Place your order and meet the incredible speed of NextCart
            </span>
          </div>
          <div className="advantages ">
            <h2 className="font-semibold mb-4">Free Shipping Advantage</h2>
            <span className="text-lg">
              Get free shipping on your puchases over 100$
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
