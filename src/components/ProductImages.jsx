"use client";

import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function ProductImages({ images }) {
  const [current, setCurrent] = useState(0);

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative min-w-[420px] min-h-[300px] mx-auto">
      <img
        src={images[current]}
        alt={`image-${current}`}
        className=" bg-gray-200 w-full h-full object-cover rounded-xl border"
      />

      <button onClick={prevImage} className="prev-next-buttons left-2">
        <FaChevronLeft />
      </button>

      <button onClick={nextImage} className="prev-next-buttons right-2 ">
        <FaChevronRight />
      </button>
    </div>
  );
}
