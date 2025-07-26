import axios from "axios";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import {
  FaChevronLeft,
  FaChevronRight,
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
} from "react-icons/fa";
import ProductImages from "@/components/ProductImages";

export default async function ProductPage({ params }) {
  const { id } = params;
  const currentId = parseInt(id);

  const respond = await axios.get(`https://dummyjson.com/products/${id}`);
  const product = respond.data;

  const nextId = currentId < 194 ? currentId + 1 : null;
  const prevId = currentId > 0 ? currentId - 1 : null;

  return (
    <div className="p-6 flex justify-center items-center ">
      <div >
        <Link href={`/products/${prevId}`}>
          <button className="prev-next-buttons left-2">
            <FaChevronLeft />
          </button>
        </Link>

        <Link href={`/products/${nextId}`}>
          <button className="prev-next-buttons right-2">
            <FaChevronRight />
          </button>
        </Link>
      </div>

      {/* <ProductCard product={product} /> */}
      <div className="flex mx-auto gap-6">
        <ProductImages images={product.images} />

        <div className="  ml-4  bg-amber-50 border min-h-[440px] rounded-xl p-2">
          <div className="bg-white p-4 rounded-lg shadow mb-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold text-gray-800 ">
                Product Details
              </h2>
              <p className=" inline-block text-center min-w-[110px] bg-gray-800 text-gray-200  rounded-xl p-1   font-semibold ">
                {product.availabilityStatus}
              </p>
            </div>
            <p className=" text-gray-700 text-lg leading-relaxed">
              {product.description}
            </p>
          </div>

          {product.reviews.map((review, index) => (
            <div key={index} className="p-3 bg-gray-800 mb-2 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                {Array.from({ length: 5 }).map((_, i) => {
                  if (review.rating >= i + 1) {
                    return (
                      <FaStar key={i} className="text-yellow-400" size={20} />
                    );
                  } else if (review.rating >= i + 0.5) {
                    return (
                      <FaStarHalfAlt
                        key={i}
                        className="text-yellow-400"
                        size={20}
                      />
                    );
                  } else {
                    return (
                      <FaRegStar
                        key={i}
                        className="text-yellow-400"
                        size={20}
                      />
                    );
                  }
                })}
              </div>

              <div className=" text-gray-200">
                <span className="font-bold text-sm block">
                  {review.reviewerName + " " + " " + review.date.slice(0, 10)}
                </span>
                <span className="text-xl">{review.comment}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
