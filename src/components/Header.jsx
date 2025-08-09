"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
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
  const [searchTerm, setSearchTerm] = useState("");
  
  let totalProducts = 0;
  for (const item of cart) {
    totalProducts += item.quantity;
  }

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    router.push(`/search?q=${searchTerm}`);
  };

  return (
    
    <header className="bg-gray-800 text-white w-full fixed top-0 z-50 shadow-md h-auto lg:h-[90px] py-3 lg:py-4">
      
      
      <nav className="grid grid-rows-2 lg:grid-rows-1 grid-cols-[1fr_auto] lg:grid-cols-[auto_1fr_auto] items-center h-full mx-4 lg:mx-10 gap-x-4 lg:gap-x-8">
        
       
        <Link href="/" className="flex items-center gap-2 text-2xl lg:text-[32px] col-start-1 row-start-1">
          <FaStore size={32} />
          <span className="hidden lg:inline">NextCart</span>
        </Link>

        
        <form
          className="flex items-center gap-2 w-full max-w-[700px] mx-auto row-start-2 col-start-1 col-span-2 lg:row-start-auto lg:col-start-auto lg:col-span-1 mt-2 lg:mt-0"
          onSubmit={handleSearch}
        >
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 rounded-lg text-white bg-gray-700 outline-none text-base"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            type="submit"
            className="header-icons p-2 rounded-lg text-white cursor-pointer"
          >
            <FaSearch size={28} />
          </button>
        </form>

        
        <div className="flex items-center gap-4 lg:gap-6 col-start-2 row-start-1 lg:col-start-3">
          <Link className="header-icons" href="/products" title="All Products">
            <FaBoxes size={30} />
          </Link>
          <Link className="header-icons" href="/cart" title="My Cart">
            <div className="relative">
              <FaShoppingCart size={30} />
              {totalProducts > 0 && (
                <span className="absolute -top-2 -right-3 rounded-full text-xs bg-red-600 text-gray-100 px-2 py-1">
                  {totalProducts}
                </span>
              )}
            </div>
          </Link>
          <Link className="header-icons" href="/login" title="Login">
            <FaUser size={30} />
          </Link>
        </div>
      </nav>
    </header>
  );
}