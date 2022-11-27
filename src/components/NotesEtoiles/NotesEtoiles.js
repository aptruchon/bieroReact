// Source de la composante : https://dev.to/michaelburrows/create-a-custom-react-star-rating-component-5o6
import React, { useState } from "react";
import "./NotesEtoiles.css";

const NotesEtoiles = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span data-js-value={index} className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};

export default NotesEtoiles;
