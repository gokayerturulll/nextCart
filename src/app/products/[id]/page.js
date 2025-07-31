import axios from "axios";
import Link from "next/link";
import {
  FaChevronLeft,
  FaChevronRight,
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaPlus,
  FaMinus,
} from "react-icons/fa";
import ProductImages from "@/components/ProductImages";

export default async function ProductPage({ params }) {
  const { id } = params;
  const currentId = parseInt(id);

  const respond = await axios.get(`https://dummyjson.com/products/${id}`);
  const product = respond.data;
  const discountedPrice = Math.floor(
    (product.price * (100 - product.discountPercentage)) / 100
  );

  const nextId = currentId < 194 ? currentId + 1 : null;
  const prevId = currentId > 0 ? currentId - 1 : null;

  return (
    <div className="p-5 flex justify-center items-center ">
      <div>
        <Link href={`/products/${prevId}`}>
          <button className="prev-next-buttons left-2 ">
            <FaChevronLeft size={27} />
          </button>
        </Link>

        <Link href={`/products/${nextId}`}>
          <button className="prev-next-buttons right-2">
            <FaChevronRight size={27} />
          </button>
        </Link>
      </div>

      <div className="flex  gap-10 items-center h-[600px]">
        <ProductImages images={product.images} />

        <div className="rounded-xl p-3 max-w-[750px]">
          {/* title and description */}
          <div className="bg-white p-5 rounded-lg shadow mb-3">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-2xl font-bold text-gray-800 ">
                {product.title}
              </h2>
            </div>
            <p className=" text-gray-700 text-lg leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* price and adding to cart */}

          <div className="flex justify-between items-center bg-white py-4 px-5 mb-5 rounded-2xl shadow">
            {/* price */}
            <div className="flex gap-5">
              <span
                className={`py-1 px-3 text-center rounded-2xl font-bold text-sm
                    ${
                      product.availabilityStatus === "In Stock"
                        ? "bg-green-100 text-green-600"
                        : product.availabilityStatus === "Limited Stock"
                        ? "bg-blue-100 text-blue-600"
                        : "bg-red-100 text-red-600"
                    }`}
              >
                {product.availabilityStatus}
              </span>
              <span className="text-red-600 line-through text-2xl font-bold">
                {product.price}$
              </span>
              <span className="text-black text-2xl font-bold">
                {discountedPrice}$
              </span>
            </div>

            {/* cart */}
            <div className="flex gap-3 mb-2 items-center">
              <button className="text-gray-200 bg-gray-800 p-2 rounded-full cursor-pointer">
                <FaMinus size={15} />
              </button>
              <span className="text-black text-3xl font-bold">0</span>
              <button className="text-gray-200 bg-gray-800 p-2 rounded-full cursor-pointer">
                <FaPlus size={15} />
              </button>
              <button className=" inline-block text-gray-200 bg-gray-800 rounded-xl px-3 py-2 text-lg font-bold">
                Sepete Ekle
              </button>
            </div>
          </div>

          {/* comment section */}
          <div className="bg-white shadow rounded-2xl p-3">
            <h2 className="text-2xl font-bold mx-4">Comments</h2>
            {product.reviews.map((review, index) => (
              <div key={index} className="py-3  mb-2 mx-5 border-b">
                <div className=" text-black flex gap-2 items-center text-center">
                  <div className="flex items-center gap-2 my-1">
                    {Array.from({ length: 5 }).map((_, i) => {
                      if (review.rating >= i + 1) {
                        return (
                          <FaStar
                            key={i}
                            className="text-yellow-400"
                            size={20}
                          />
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

                  <span className="text-lg font-bold">
                    {review.reviewerName}
                  </span>
                  <span className="text-sm ">{review.date.slice(0, 10)}</span>
                </div>

                <span className=" text-black text-xl">{review.comment}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
