"use client";
import Link from "next/link";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { useCart } from "@/context/CartContext";
export default function ProductCard({ product }) {
  const { addToCart, cart } = useCart();
  const rating = Math.round(product.rating * 2) / 2;
  const discountedPrice = Math.floor(
    (product.price * (100 - product.discountPercentage)) / 100
  );

  return (
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
              return <FaStar key={i} className="text-yellow-400" size={20} />;
            } else if (rating >= i + 0.5) {
              return (
                <FaStarHalfAlt key={i} className="text-yellow-400" size={20} />
              );
            } else {
              return (
                <FaRegStar key={i} className="text-yellow-400" size={20} />
              );
            }
          })}
        </div>

        <div className="flex justify-evenly">
          <p className="text-red-600 line-through">{product.price} $</p>
          <p className="text-gray-700 text-2xl font-bold">{discountedPrice}$</p>
        </div>

        <div className="flex justify-evenly items-center mt-2 gap-2">
          <Link href={`/products/${product.id}`}>
            <button className="px-4 py-1 bg-gray-800 text-white rounded-lg text-sm hover:bg-gray-700 transition cursor-pointer">
              Details
            </button>
          </Link>

          <button
            className=" bg-green-600 text-white rounded-lg text-sm hover:bg-green-500 transition cursor-pointer px-4 py-1"
            onClick={() => addToCart(product)}
          >
            Add Cart
          </button>
        </div>
      </div>
    </div>
  );
}
