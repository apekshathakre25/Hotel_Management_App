import React from "react";
import { assets } from "../assets/assets";

const StarRating = ({ rating }) => {
  return (
    <>
      {Array(5)
        .fill("")
        .map((_, index) => (
          <img
            key={`star-${index}`}
            className="h-4 w-5"
            src={
              rating > index ? assets.starIconFilled : assets.starIconOutlined
            }
            alt={`${rating > index ? 'Filled' : 'Empty'} star ${index + 1}`}
          />
        ))}
    </>
  );
};

export default StarRating;
