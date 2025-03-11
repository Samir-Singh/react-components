"use client";

import { Rate } from "antd";
import Link from "next/link";
import { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

const StarRating = () => {
  const [value, setValue] = useState(2);

  const ratingMessage = [
    "We're sorry to hear that you had a bad experience. We would like to learn more about what happened and how we can make things right.",
    "We apologize for the inconvenience you experienced. We appreciate your feedback and would like to work with you to address any issues.",
    "Thank you for your feedback. We'are sorry to hear that your experience wasn't perfect. We would love to hear more about your concerns to see how can we improve.",
    "Thank you for your positive feedback! We'are glad to know that you had a great experience and we appreciate your support.",
    "Excellent! We'are thrilled to hear you had such a positive experience. Thank you for choosing our platform",
  ];

  return (
    <>
      <div className="p-5 bg-[#111827] text-white text-xl sticky top-0 left-0 right-0 flex items-center gap-4">
        <Link href="/">
          <FaArrowLeftLong className="cursor-pointer" />
        </Link>
        Star Rating Component
      </div>

      <div className="h-screen w-screen flex justify-center items-center">
        <div
          style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
          className="bg-white rounded-xl py-10 px-14 w-[600px]"
        >
          <div className="text-xl font-medium text-center">
            How many stars would you give to our Online Code Editor?
          </div>
          <div className="flex justify-center items-center mt-5">
            <Rate
              // allowHalf : uncomment this line to allow the half rating
              value={value}
              onChange={(value) => setValue(value)}
            />
          </div>
          <div className="text-center mt-5 text-sm">
            {ratingMessage[value - 1]}
          </div>
        </div>
      </div>
    </>
  );
};

export default StarRating;
