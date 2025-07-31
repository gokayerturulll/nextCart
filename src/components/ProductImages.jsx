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
    <div className="relative h-[600px] w-[470px] mx-auto">
      <img
        src={images[current]}
        alt={`image-${current}`}
        className="h-[600px] bg-white w-full  object-cover rounded-xl shadow-xl"
      />

      <button onClick={prevImage} className="prev-next-buttons left-2">
        <FaChevronLeft size={20} />
      </button>

      <button onClick={nextImage} className="prev-next-buttons right-2 ">
        <FaChevronRight size={20} />
      </button>
    </div>
  );
}
