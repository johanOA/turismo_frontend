import React, { useState } from 'react';

const StarRating = ({ rating, onRatingChange }) => {
  const [hoveredRating, setHoveredRating] = useState(null);

  const handleStarHover = (starIndex) => {
    setHoveredRating(starIndex);
  };

  const handleStarClick = (starIndex) => {
    onRatingChange(starIndex);
  };

  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((starIndex) => (
        <div
          key={starIndex}
          className={`cursor-pointer ${
            (hoveredRating || rating) >= starIndex ? 'text-yellow-500' : 'text-gray-300'
          }`}
          onMouseEnter={() => handleStarHover(starIndex)}
          onMouseLeave={() => setHoveredRating(null)}
          onClick={() => handleStarClick(starIndex)}
        >
          ★
        </div>
      ))}
    </div>
  );
};

export default StarRating;