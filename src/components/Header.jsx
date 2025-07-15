import Link from "next/link";
import {
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
    <header className="text-[20px] bg-gray-800 h-[75px] text-white py-4">
      <nav className="grid grid-cols-[auto_1fr_auto] items-center mx-10">
        <Link href="/" className="flex items-center gap-2 text-[30px]">
          <Store size={30} />
          NextCart
        </Link>

        <form className="flex items-center gap-2 w-full max-w-[700px] mx-auto">
          <input
            type="text"
            placeholder="Search products"
            className="w-full px-4 py-2 rounded text-white bg-gray-700 outline-none"
          />
          <button type="button" className=" p-2 rounded text-white">
            <Search size={30} />
          </button>
        </form>

        <div className="flex items-center gap-10 justify-end">
          <Link href="/products" title="All Products">
            <BoxesIcon size={35} />
          </Link>
          <Link href="/cart" title="My Cart">
            <ShoppingBag size={35} />
          </Link>
          <Link href="/checkout" title="Checkout">
            <CreditCard size={35} />
          </Link>
        </div>
      </nav>
    </header>
  );
}
