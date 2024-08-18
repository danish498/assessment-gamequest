import { Icons } from "@/assets/icons";
import React from "react";

const StarRating = ({
  rating,
  totalStars = 5,
}: {
  rating: number;
  totalStars: number;
}) => {
  const filledStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = totalStars - Math.ceil(rating);

  return (
    <div className="flex">
      {Array(filledStars)
        .fill(0)
        .map((_, index) => (
          <Icons.star key={index} size={16} fill="#E58E27" stroke="2px" />
        ))}

      {halfStar && <Icons.star size={16} fill="#E58E27" stroke="2px" />}

      {Array(emptyStars)
        .fill(0)
        .map((_, index) => (
          <Icons.star
            key={filledStars + index + 1}
            size={16}
            color="red"
            stroke="#E58E27"
            fontSize={2}
          />
        ))}
    </div>
  );
};

export default StarRating;
