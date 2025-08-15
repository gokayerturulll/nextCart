"use client";
import axios from "axios";
import ProductCard from "@/components/ProductCard";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
    "mens-watches",
    "womens-shoes",
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
          <Link href="products">
            <Button variant="secondary" className="font-bold px-8 py-6 text-lg">
              Shop Now
            </Button>
          </Link>
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

        <div className="bg-gray-50 shadow-lg mt-10 py-16 max-w-full mx-auto text-center px-4 ">
          <h2 className="text-3xl font-bold">Join Our Newsletter</h2>
          <p className="mt-2   text-gray-600">
            Get 10% off on your first order and stay up-to-date with our latest
            news.
          </p>

          {showMsg && (
            <div className="mt-4 flex justify-center">
              <Alert className="bg-green-50 border-green-200 text-green-800 w-fit">
                <AlertDescription>
                  Successfully subscribed to our newsletter! 🎉
                </AlertDescription>
              </Alert>
            </div>
          )}

          <form
            onSubmit={successfullySubscribed}
            className="mt-6 max-w-md mx-auto flex gap-1"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" className="px-6">
              Subscribe
            </Button>
          </form>
        </div>

        {/* ADVANTAGES */}
        <div className="grid grid-cols-1 md:grid-cols-3 py-8 gap-4 mt-5">
          <Card className="advantages">
            <Badge variant="default" className="mb-2 text-md">
              Top Quality Products
            </Badge>
            <p className="text-lg text-gray-600">
              {" "}
              Carefully selected products designed for timeless style and
              longevity.
            </p>
          </Card>
          <Card className="advantages">
            <Badge variant="default" className="mb-2 text-md">
              Fast Shipping Service
            </Badge>
            <p className="text-lg text-gray-600">
              {" "}
              Place your order and meet the incredible speed of NextCart.
            </p>
          </Card>
          <Card className="advantages">
            <Badge variant="default" className="mb-2 text-md">
              Free Shipping Advantage
            </Badge>
            <p className="text-lg text-gray-600">
              {" "}
              Get free shipping on your puchases over 100$.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
