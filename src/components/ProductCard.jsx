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
export default function ProductCard({ product }) {
  const { addToCart, cart } = useCart();
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
  return (
    <>
      <Link href={`/products/${product.id}`}>
        <div className="item-card relative ">
          <span
            className={` absolute right-2 py-1 px-3 text-center rounded-2xl font-bold text-sm
                    ${
                      product.availabilityStatus === "In Stock"
                        ? "bg-green-100 text-green-600"
                        : product.availabilityStatus === "Limited Stock"
                        ? "bg-blue-100 text-blue-600"
                        : "bg-red-100 text-red-600"
                    }`}
          >
            {product.availabilityStatus}
          </span>

          <img
            src={product.thumbnail}
            alt={product.title}
            loading="lazy"
            className="card-img"
          />

          <div className="product-info">
            <h3 className="font-semibold">{product.title}</h3>

            <div className="flex  gap-1 justify-center p-2 mb-2">
              {Array.from({ length: 5 }).map((_, i) => {
                if (rating >= i + 1) {
                  return (
                    <FaStar key={i} className="text-yellow-400" size={20} />
                  );
                } else if (rating >= i + 0.5) {
                  return (
                    <FaStarHalfAlt
                      key={i}
                      className="text-yellow-400"
                      size={20}
                    />
                  );
                } else {
                  return (
                    <FaRegStar key={i} className="text-yellow-400" size={20} />
                  );
                }
              })}
            </div>

            <div className="flex justify-evenly items-baseline">
              <p className="text-red-600 line-through">{product.price} $</p>
              <p className="text-gray-700 text-xl md:text-2xl font-bold">
                {discountedPrice}$
              </p>
            </div>

            <div className="flex justify-center items-center mt-2 gap-2">
              <button
                className=" flex justify-center items-center gap-3 bg-green-600 text-white rounded-lg text-lg hover:bg-green-500 transition cursor-pointer px-4 py-1 w-44"
                onClick={successfullyAddToCart}
              >
                Add Cart <FaShoppingCart />
              </button>
            </div>
          </div>
        </div>
      </Link>

      {showMsg && (
        <div className="fixed top-25 right-6 bg-green-50 border-l-4 border-green-500 shadow-lg rounded-md p-4 flex items-start gap-3 animate-slideIn z-50">
          <div className="text-green-500 text-xl">✔</div>
          <div>
            <p className="text-sm font-semibold text-gray-800">
              Successfully added to cart!
            </p>
            <Link
              href="/cart"
              className="text-green-600 text-sm font-medium hover:underline"
            >
              Go to cart
            </Link>
          </div>
          <button
            onClick={() => setShowMsg(false)}
            className="ml-2 text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </div>
      )}
    </>
  );
}
