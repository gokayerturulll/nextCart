import Link from "next/link";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
export default function ProductCard({ product }) {
  const rating = Math.round(product.rating * 2) / 2;
  const discountedPrice = Math.floor(
    (product.price * (100 - product.discountPercentage)) / 100
  );

  return (
    <Link href={`/products/${product.id}`}>
      <div className="grid-card">
        <div className="flex flex-col items-center bg-gray-800 rounded-xl p-2 mb-2 w-full">
          <div className="flex p-1 gap-2">
            {Array.from({ length: 5 }).map((_, i) => {
              if (rating >= i + 1) {
                return <FaStar key={i} className="text-yellow-400" size={20} />;
              } else if (rating >= i + 0.5) {
                return (
                  <FaStarHalfAlt
                    key={i}
                    className="text-yellow-400"
                    size={20}
                  />
                );
              } else {
                return (
                  <FaRegStar key={i} className="text-yellow-400" size={20} />
                );
              }
            })}
          </div>

          <span className="text-gray-200 text-[17px] font-bold ">
            {product.rating.toFixed(1)}
          </span>
        </div>

        <img
          src={product.thumbnail}
          alt={product.title}
          loading="lazy"
          className="card-img"
        />

        <div className="product-info">
          <h3 className="text-white font-semibold text-center  ">
            {product.title}
          </h3>

          <div className="flex justify-evenly">
            <p className="text-red-600 line-through">{product.price} $</p>
            <p className="text-gray-200 text-xl">{discountedPrice}$</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
