import React from "react";

const Newsletter = () => {
  return (
    <div className="flex flex-col justify-center items-center mb-4 container mx-auto">
      <div className="divider"></div>
      <div className="flex flex-col justify-center items-center mb-4 conatiner mx-auto">
        <h2 className="text-center text-3xl font-bold uppercase text-accent mb-4">
          Subscribe to newsletter
        </h2>
        <p className="px-4">
          Signup for our weekly newsletter to get the latest news, updates and
          amazing offers delivered directly in your inbox.
        </p>
        <div className="text-center">
          <input
            type="text"
            placeholder="abc@gmail.com"
            className="input input-bordered w-full max-w-xs mt-4 "
          />
          <button className="btn btn-primary mt-2">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
