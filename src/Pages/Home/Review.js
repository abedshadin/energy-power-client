import React from 'react';

const Review = ({review}) => {
    return (
        <div class="card w-96 bg-base-300 shadow-xl">
  <div class="card-body">
      <div className='flex justify-between'>
      <h2 class="card-title text-2xl">{review.name}</h2>
      <div class="avatar">
  <div class="w-16 rounded-full ring ring-accent  ">
    <img src={review.img} />
  </div>
</div>
      </div>
   
    <p>{review.review}</p>
    <div class="card-actions justify-end">
      <p class="btn btn-primary disabled">{review.ratings}</p>
    </div>
  </div>
</div>
    );
};

export default Review;