import Link from "next/link";
export default function Footer() {
  return (
    <footer className=" w-full bg-gray-100  py-8">
      <ul className="flex flex-nowrap justify-center items-center gap-x-3 md:gap-x-6 text-sm md:text-[15px] px-3">
        <li>
          <Link href="/" className="hover:text-gray-700">
            © 2025 NextCart | Alttantire
          </Link>
        </li>
        <li>
          <Link href="/refund-policy" className="hover:text-gray-700">
            Refund Policy
          </Link>
        </li>
        <li>
          <Link href="/privacy-policy" className="hover:text-gray-700">
            Privacy Policy
          </Link>
        </li>

        <li>
          <Link href="/shipping-policy" className="hover:text-gray-700">
            Shipping Policy
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-gray-700">
            Contact
          </Link>
        </li>
      </ul>
    </footer>
  );
}
