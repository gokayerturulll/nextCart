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
    <div className="max-w-7xl mx-auto px-4 pt-[100px] ">
      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)]">
          <h2 className="font-medium text-4xl mb-5 text-center">
            Your cart is empty
          </h2>
          <Link href="/products">
            <button className="bg-black text-gray-100 font-bold py-3 px-8 rounded-full hover:bg-gray-800 transition-colors duration-300 cursor-pointer">
              Continue Shopping
            </button>
          </Link>
        </div>
      ) : (
        <ul>
          <li className="hidden lg:grid grid-cols-3 gap-8 items-center p-4 border-b mb-2">
            <span className="font-semibold text-lg">Product</span>
            <span className="font-semibold text-lg text-center">Quantity</span>
            <span className="font-semibold text-lg text-right">Total</span>
          </li>

          {cart.map((item, id) => (
            <li
              key={item.id}
              className="grid grid-cols-1 lg:grid-cols-3 gap-y-4 lg:gap-8 items-center mt-5 bg-gray-50 rounded-xl border p-4 lg:p-6 mb-5"
            >
              <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-36 h-36 object-cover rounded-lg"
                />
                <div className="flex flex-col gap-2">
                  <span className="text-lg font-semibold">{item.title}</span>
                  <span className="font-bold text-lg">
                    ${getDiscountedPrice(item.price, item.discountPercentage)}
                  </span>
                  <span className="text-sm text-gray-500">
                    {item.shippingInformation}
                  </span>
                </div>
              </div>

              <div className="flex justify-center items-center">
                <div className="flex items-center border rounded-lg">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="p-3 cursor-pointer hover:bg-gray-200 rounded-l-lg"
                  >
                    <FaMinus size={16} />
                  </button>
                  <span className="py-2 text-xl px-5 font-semibold">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="p-3 cursor-pointer hover:bg-gray-200 rounded-r-lg"
                  >
                    <FaPlus size={16} />
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-4 p-3 text-red-600 hover:bg-gray-200 rounded-full cursor-pointer"
                >
                  <FaRegTrashAlt size={20} />
                </button>
              </div>

              <div className="lg:text-right">
                <span className="lg:hidden font-semibold">Item Total: </span>
                <span className="text-2xl font-semibold">
                  $
                  {item.quantity *
                    getDiscountedPrice(item.price, item.discountPercentage)}
                </span>
              </div>
            </li>
          ))}

          <div className="mt-8 flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">Total Price:</span>
              <span className="font-bold text-3xl">${totalPrice}</span>
            </div>
            <Link href="/checkout" className="w-full lg:w-auto">
              <button className="bg-gray-800 text-gray-100 p-4 rounded-xl cursor-pointer hover:bg-gray-700 transition font-semibold w-full">
                Check Out
              </button>
            </Link>
          </div>
        </ul>
      )}
    </div>
  );
}
