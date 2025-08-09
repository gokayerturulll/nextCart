import Header from "../components/Header";
import Footer from "../components/Footer";
import { CartProvider } from "@/context/CartContext";
import "./globals.css";

export const metadata = {
  title: "NextCart",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className="bg-white flex flex-col items-center min-h-screen">
        <CartProvider>
          <Header />
          <main className=" flex-grow w-full   py-4">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
