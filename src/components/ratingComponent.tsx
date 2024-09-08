"use client"

import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

export const Ratings = () => {
  const [rating, setRating] = useState(0); // Holds the current selected rating
  const [hover, setHover] = useState(0); // Holds the current hover state for stars

  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1; // Star values from 1 to 5

        return (
          <span
            key={index}
            onClick={() => setRating(starValue)} // Set rating on click
            onMouseEnter={() => setHover(starValue)} // Set hover on mouse enter
            onMouseLeave={() => setHover(0)} // Reset hover on mouse leave
            style={{
              cursor: "pointer",
              color: starValue <= (hover || rating) ? "#FFD700" : "#E4E5E9", // Color stars yellow when hovered or selected
              fontSize: "2rem",
            }}
          >
            {/* ★ */}
            <FaStar/>
          </span>
        );
      })}
    </div>
  );
};
