"use client";

import Link from "next/link";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";

const StarRating = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [clickedIndex, setClickedIndex] = useState(3);

  const handleHover = (i: number) => {
    setHoveredIndex(i);
  };

  const handleClick = (i: number) => {
    setClickedIndex(i);
  };

  const ratingMessage = [
    "We're sorry to hear that you had a bad experience. We would like to learn more about what happened and how we can make things right.",
    "We apologize for the inconvenience you experienced. We appreciate your feedback and would like to work with you to address any issues.",
    "Thank you for your feedback. We'are sorry to hear that your experience wasn't perfect. We would love to hear more about your concerns to see how can we improve.",
    "Thank you for your positive feedback! We'are glad to know that you had a great experience and we appreciate your support.",
    "Excellent! We'are thrilled to hear you had such a positive experience. Thank you for choosing our platform",
  ];

  const renderStars = (length: number) => {
    const stars = [];
    for (let i = 0; i < length; i++) {
      stars.push(
        <FaStar
          key={i}
          onMouseEnter={() => handleHover(i)}
          onClick={() => handleClick(i)}
          onMouseLeave={() => setHoveredIndex(-1)}
          color={
            i <= (hoveredIndex !== -1 ? hoveredIndex : clickedIndex)
              ? "yellow"
              : "lightgrey"
          }
          size={60}
          className={`cursor-pointer mx-1 transition-transform duration-200 ${
            hoveredIndex === i ? "scale-110" : "scale-100"
          }`}
        />
      );
    }
    return stars;
  };

  return (
    <>
      <div className="p-5 bg-[#111827] text-white text-xl sticky top-0 left-0 right-0 flex items-center gap-4">
        <Link href="/">
          <FaArrowLeftLong className="cursor-pointer" />
        </Link>
        Star Rating Component
      </div>

      <div className="min-h-screen max-w-screen flex justify-center items-center">
        <div
          style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
          className="bg-white rounded-xl py-10 lg:px-14 px-5 lg:w-[600px] w-[375px]"
        >
          <div className="lg:text-xl font-medium text-center">
            How many stars would you give to our Online Code Editor?
          </div>
          <div className="flex justify-center items-center mt-5">
            {renderStars(5)}
          </div>
          <div className="text-center mt-5 lg:text-sm text-xs">
            {ratingMessage[clickedIndex - 1]}
          </div>
        </div>
      </div>
    </>
  );
};

export default StarRating;
