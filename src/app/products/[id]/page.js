"use client";
import { use, useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import {
  FaChevronLeft,
  FaChevronRight,
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
} from "react-icons/fa";
import ProductImages from "@/components/ProductImages";
import { useCart } from "@/context/CartContext";

export default function ProductPage({ params }) {
  const { id } = use(params);
  const currentId = parseInt(id);
  const [product, setProduct] = useState(null);
  const [showMsg, setShowMsg] = useState(false);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => setProduct(res.data));
  }, [id]);

  const { addToCart } = useCart();
  if (!product) return <div>Loading...</div>;

  const getDiscountedPrice = (price, discountPercentage) => {
    return Math.floor((price * (100 - discountPercentage)) / 100);
  };

  const nextId = currentId < 194 ? currentId + 1 : null;
  const prevId = currentId > 0 ? currentId - 1 : null;

  const successfullyAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    setShowMsg(true);
    setTimeout(() => setShowMsg(false), 3000);
  };
  return (
    <>
      <div className="p-5 flex justify-center items-center pt-[110px] ">
        <div>
          <Link href={`/products/${prevId}`}>
            <button className="prev-next-buttons left-2 ">
              <FaChevronLeft size={27} />
            </button>
          </Link>

          <Link href={`/products/${nextId}`}>
            <button className="prev-next-buttons right-2">
              <FaChevronRight size={27} />
            </button>
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start">
          <ProductImages images={product.images} />

          <div className="rounded-xl p-3 w-full lg:max-w-[750px]">
            {/* title and description */}
            <div className="bg-gray-50 p-5 rounded-lg shadow mb-3">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-2xl font-bold text-gray-800 ">
                  {product.title}
                </h2>
              </div>
              <p className=" text-gray-700 text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* price and adding to cart */}

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-gray-50 py-4 px-5 mb-5 rounded-2xl shadow">
              {/* price */}
              <div className="flex gap-5">
                <span
                  className={`py-1 px-3 text-center rounded-2xl font-bold text-sm
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
                <span className="text-red-600 line-through text-2xl font-bold">
                  {product.price}$
                </span>
                <span className="text-black text-2xl font-bold">
                  {getDiscountedPrice(
                    product.price,
                    product.discountPercentage
                  )}
                  $
                </span>
              </div>

              {/* cart */}
              <div className="flex gap-3 mb-2 items-center">
                <button
                  onClick={successfullyAddToCart}
                  className=" w-full sm:w-auto text-gray-200 bg-gray-800 rounded-xl px-5 py-2 text-lg font-bold cursor-pointer hover:bg-black transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>

            {/* comment section */}
            <div className="bg-gray-50 shadow rounded-2xl p-3">
              <h2 className="text-2xl font-bold mx-4">Comments</h2>
              {product.reviews.map((review, index) => (
                <div key={index} className="py-3  mb-2 mx-5 border-b">
                  <div className=" text-black flex flex-wrap items-center gap-x-4 gap-y-1">
                    <div className="flex items-center gap-2 my-1">
                      {Array.from({ length: 5 }).map((_, i) => {
                        if (review.rating >= i + 1) {
                          return (
                            <FaStar
                              key={i}
                              className="text-yellow-400"
                              size={20}
                            />
                          );
                        } else if (review.rating >= i + 0.5) {
                          return (
                            <FaStarHalfAlt
                              key={i}
                              className="text-yellow-400"
                              size={20}
                            />
                          );
                        } else {
                          return (
                            <FaRegStar
                              key={i}
                              className="text-yellow-400"
                              size={20}
                            />
                          );
                        }
                      })}
                    </div>

                    <span className="text-lg font-bold">
                      {review.reviewerName}
                    </span>
                    <span className="text-sm ">{review.date.slice(0, 10)}</span>
                  </div>

                  <span className=" text-black text-xl">{review.comment}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

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
