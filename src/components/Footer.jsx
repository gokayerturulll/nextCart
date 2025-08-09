export default function Footer() {
  return (
    <footer className=" w-full bg-gray-100  py-8">
      <ul className="flex flex-nowrap justify-center items-center gap-x-3 md:gap-x-6 text-sm md:text-[15px] px-3">
        <li>
          <a href="#" className="hover:text-gray-700">
            © 2025 NextCart | Alttantire
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-700">
            Refund Policy
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-700">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-700">
            Terms of Service
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-700">
            Shipping Policy
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-700">
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
}
