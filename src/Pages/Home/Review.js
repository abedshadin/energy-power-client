import React from "react";

const Review = ({ review }) => {
  return (
    <div className="card w-96 bg-base-300 shadow-xl">
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title text-2xl">{review.name}</h2>
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-accent  ">
              <img src={review.img} alt='USER'/>
            </div>
          </div>
        </div>

        <p>{review.review}</p>
        <div className="card-actions justify-end">
          <p className="btn btn-primary disabled">{review.ratings}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
