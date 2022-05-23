import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const Reviews = () => {
  const [user, loading] = useAuthState(auth);
  const { register, handleSubmit } = useForm();
  if (loading) {
    return <Loading></Loading>;
  }
  const onSubmit = (data) => {
    console.log(data);
    const review = {
      name: user.displayName,
      email: user.email,
      img: user.photoURL,
      review: data.review,
      ratings: data.ratings,
    };
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      body: JSON.stringify(review),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        toast(`Order Successful`);
      });
  };
  return (
    <div>
      <div className="flex justify-center items-center justify-items-center">
        <div class="card w-96 bg-base-100  shadow-xl">
          <div class="card-body items-center text-center">
            <h2 class="card-title">Write A Review</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                class="input input-bordered w-full max-w-xs mb-2"
                placeholder="Type Review"
                required
                {...register("review")}
              />
              <select
                class="input input-bordered w-full max-w-xs mb-2"
                {...register("ratings")}
              >
                <option value="★★★★★">5 ★★★★★</option>
                <option value="★★★★☆">4 ★★★★</option>
                <option value="★★★☆☆">3 ★★★</option>
                <option value="★★☆☆☆">2 ★★</option>
                <option value="★☆☆☆☆">1 ★</option>
              </select>
              <input class="btn btn-primary" type="submit" />
            </form>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Reviews;
