import Link from "next/link";
import {
  User,
  ShoppingBag,
  BoxesIcon,
  Search,
  Store,
  Package,
  ShoppingCart,
  CreditCard,
} from "lucide-react";

export default function Header() {
  return (
    <header className="text-[20px] bg-gray-800 h-[76px] text-white py-4  w-full fixed top-0 z-50">
      <nav className="grid grid-cols-[auto_1fr_auto] items-center  mx-10 ">
        <Link href="/" className="flex items-center gap-2 text-[32px]">
          <Store size={32} />
          NextCart
        </Link>

        <form className="flex items-center gap-2 w-full max-w-[700px] mx-auto">
          <input
            type="text"
            placeholder="Search products"
            className="w-full px-4 py-2 rounded text-white bg-gray-700 outline-none"
          />
          <button
            type="button"
            className="header-icons p-2 rounded text-white cursor-pointer"
          >
            <Search size={32} />
          </button>
        </form>

        <div className="flex items-center  gap-6 ">
          <Link className="header-icons" href="/products" title="All Products">
            <BoxesIcon size={35} />
          </Link>
          <Link className="header-icons" href="/cart" title="My Cart">
            <ShoppingBag size={35} />
          </Link>
          <Link className="header-icons" href="/checkout" title="Checkout">
            <CreditCard size={35} />
          </Link>
          <Link className="header-icons" href="/register" title="Register">
            <User size={35} />
          </Link>
        </div>
      </nav>
    </header>
  );
}
