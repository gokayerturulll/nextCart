"use client";
import { useCart } from "@/context/CartContext";

import Link from "next/link";
import { FaMinus, FaPlus, FaRegTrashAlt } from "react-icons/fa";

export default function CartPage() {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } =
    useCart();
  const getDiscountedPrice = (price, discountPercentage) => {
    return Math.floor((price * (100 - discountPercentage)) / 100);
  };
  let totalPrice = 0;
  for (const item of cart) {
    totalPrice +=
      getDiscountedPrice(item.price, item.discountPercentage) * item.quantity;
  }

  return (
    <div className="p-4">
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul>
          <li className="mx-6 grid grid-cols-3 gap-8 items-center p-4 border-b mb-2">
            <span className="font-semibold text-lg">Product</span>
            <span className="font-semibold text-lg text-center">Quantity</span>
            <span className="font-semibold text-lg text-right">Total</span>
          </li>

          {cart.map((item, id) => (
            <li
              key={item.id}
              className="grid grid-cols-3 gap-8 items-center bg-gray-50 rounded-xl border p-6 mb-5"
            >
              {/* product */}
              <div className=" flex items-center gap-7">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-38 h-35 object-cover  "
                />
                <div className="flex flex-col gap-3">
                  <span className=" text-xl">{item.title}</span>

                  <span className="font-bold text-xl ">
                    {getDiscountedPrice(item.price, item.discountPercentage)}$
                  </span>
                  <span>{item.shippingInformation}</span>
                </div>
              </div>

              {/* quantity */}
              <div className="ml-15 flex justify-center items-center ">
                <div className="border py-2 px-3">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="py-2 px-3 cursor-pointer"
                  >
                    <FaMinus size={20} />
                  </button>
                  <span className="py-2 text-xl px-3">{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="py-2 px-3 cursor-pointer"
                  >
                    <FaPlus size={20} />
                  </button>
                </div>
                <button className="ml-4 p-2 text-red-600 hover:bg-gray-200 rounded cursor-pointer">
                  <FaRegTrashAlt
                    onClick={() => removeFromCart(item.id)}
                    size={20}
                  />
                </button>
              </div>

              {/* price */}

              <span className="text-2xl font-semibold text-right">
                {item.quantity *
                  getDiscountedPrice(item.price, item.discountPercentage)}{" "}
                $
              </span>
            </li>
          ))}

          {/* total price and check out */}
          <div className="flex justify-between items-center">
            <div className="flex ">
              <span className="text-2xl">Total Price:</span>
              <span className="font-bold text-2xl">{totalPrice} $</span>
            </div>
            <Link href="/checkout">
              <button className="bg-gray-800 text-gray-100 p-3 rounded-xl cursor-pointer hover:bg-gray-700 transition font-semibold">
                Check Out
              </button>
            </Link>
          </div>
        </ul>
      )}
    </div>
  );
}
