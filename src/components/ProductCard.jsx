"use client";
import Link from "next/link";
import { useState } from "react";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaShoppingCart,
} from "react-icons/fa";
import { useCart } from "@/context/CartContext";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [showMsg, setShowMsg] = useState(false);
  const rating = Math.round(product.rating * 2) / 2;
  const discountedPrice = Math.floor(
    (product.price * (100 - product.discountPercentage)) / 100
  );
  const successfullyAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    setShowMsg(true);
    setTimeout(() => setShowMsg(false), 3000);
  };
   product.availabilityStatus === "In Stock"
      ? "success"
      : product.availabilityStatus === "Limited Stock"
      ? "warning"
      : "destructive";
  return (
    <>
      <Link href={`/products/${product.id}`}>
        <Card className="item-card relative ">
          <span className="absolute right-2 top-2">
            <Badge
              variant="secondary"
              className={
                product.availabilityStatus === "In Stock"
                  ? "bg-green-100 text-green-700"
                  : product.availabilityStatus === "Limited Stock"
                  ? "bg-blue-100 text-blue-700"
                  : "bg-red-100 text-red-700"
              }
            >
              {product.availabilityStatus}
            </Badge>
          </span>
          <CardHeader>
            <img
              src={product.thumbnail}
              alt={product.title}
              loading="lazy"
              className="card-img"
            />
          </CardHeader>

          <CardContent className="product-info">
            <h3 className="font-semibold text-lg">{product.title}</h3>

            <div className="flex  gap-1 justify-center py-2 ">
              {Array.from({ length: 5 }).map((_, i) => {
                if (rating >= i + 1) {
                  return (
                    <FaStar key={i} className="text-yellow-400" size={18} />
                  );
                } else if (rating >= i + 0.5) {
                  return (
                    <FaStarHalfAlt
                      key={i}
                      className="text-yellow-400"
                      size={18}
                    />
                  );
                } else {
                  return (
                    <FaRegStar key={i} className="text-yellow-400" size={18} />
                  );
                }
              })}
            </div>

            <div className="flex justify-evenly items-baseline">
              <p className="text-red-500 line-through">{product.price} $</p>
              <p className="text-gray-800 text-xl md:text-2xl font-bold">
                {discountedPrice}$
              </p>
            </div>
          </CardContent>

          <CardFooter className="flex justify-center items-center mt-2 gap-2">
            <Button
              variant="default"
              className="w-full flex justify-center items-center gap-2 cursor-pointer"
              onClick={successfullyAddToCart}
            >
              <FaShoppingCart />
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      </Link>

      {showMsg && (
        <Alert
          className="
          fixed top-25 right-6 z-50 w-fit min-w-[250px] shadow-lg
          flex gap-12 bg-green-50 border-green-200 text-green-800 shadow-md"
        >
          <AlertDescription className="flex flex-col gap-1">
            Successfully added to cart! 🎉
            <Link
              href="/cart"
              className="text-green-600 font-medium hover:underline"
            >
              Go to cart
            </Link>
          </AlertDescription>
          <button
            onClick={() => setShowMsg(false)}
            className="ml-2 text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </Alert>
      )}
    </>
  );
}
