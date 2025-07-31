import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";

export const metadata = {
  title: "NextCart",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className="bg-gray-100 flex flex-col items-center min-h-screen">
        <Header />
        <main className=" flex-grow container  pt-[110px] p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
