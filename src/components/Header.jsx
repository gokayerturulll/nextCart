"use client";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { categoryNames } from "@/data/categoryNames";

import {
  FaShoppingCart,
  FaBoxes,
  FaUser,
  FaStore,
  FaSearch,
} from "react-icons/fa";
export default function Header() {
  const router = useRouter();
  const { cart } = useCart();

  let totalProducts = 0;
  for (const item of cart) {
    totalProducts += item.quantity;
  }
  return (
    <header className="text-[20px] bg-gray-800 h-[75px] text-white py-4  w-full fixed top-0 z-50">
      <nav className="grid grid-cols-[auto_1fr_auto] items-center  mx-10 ">
        <Link href="/" className="flex items-center gap-2 text-[32px]">
          <FaStore size={32} />
          NextCart
        </Link>

        <form className="flex items-center gap-2 w-full max-w-[700px] mx-auto">
          <input
            type="text"
            placeholder="Search products"
            className="w-full px-4 py-2 rounded-lg text-white bg-gray-700 outline-none"
          />
          <button
            type="button"
            className="header-icons p-2 rounded- text-white cursor-pointer"
          >
            <FaSearch size={32} />
          </button>
        </form>

        <div className="flex items-center  gap-6 ">
          <Link className="header-icons" href="/products" title="All Products">
            <FaBoxes size={35} />
          </Link>

          <Link className="header-icons" href="/cart" title="My Cart">
            <div className="relative">
              <FaShoppingCart size={35} />
              {totalProducts === 0 ? (
                <p></p>
              ) : (
                <span className="absolute  top-4 left-6 rounded-full text-xs bg-red-600 text-gray-100 px-2 py-1 ">
                  {totalProducts}
                </span>
              )}
            </div>
          </Link>

          <Link className="header-icons" href="/login" title="Login">
            <FaUser size={35} />
          </Link>
        </div>
      </nav>
      <div className=" mt-3 flex justify-between border-t-1 bg-gray-800 py-1 px-2">
        {categoryNames.map((item) => (
          <button
            key={item.title}
            className="category-button"
            onClick={() => router.push(`/category/${item.categories[0]}`)}
          >
            {item.title}
          </button>
        ))}
      </div>
    </header>
  );
}
