import React, { useEffect, useState } from "react";
import Review from "./Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/reviews`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="flex flex-col justify-center items-center mb-4">
      <h2 className="text-center text-3xl font-bold uppercase text-accent mb-4">
        Customer's Reviews
      </h2>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-12">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
