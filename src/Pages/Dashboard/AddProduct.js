import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { resetState } from "react-modal/lib/helpers/ariaAppHider";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
const AddProduct = () => {
  const [user, loading] = useAuthState(auth);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const email = user.email;
  if (loading) {
    return <Loading></Loading>;
  }
  const onSubmit = (data, e) => {
    const addTool = {
      email: email,
      name: data.name,
      img: data.img,
      price: data.price,
      avail_quantity: data.avail_quantity,
      min_order_quantity: data.min_order_quantity,
      s_desc: data.s_desc,
    };
    fetch(`https://nameless-reef-38172.herokuapp.com/tools`, {
      method: "Post",
      body: JSON.stringify(addTool),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        toast("Tool Added");
      });
    e.target.reset();
  };
  return (
    <div>
      <div className="flex justify-center items-center justify-items-center">
        <div className="card w-96 bg-base-100  shadow-xl">
          <div className="card-body items-center text-center">
            <h2 className="card-title">Update Profile</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className="input input-bordered w-full max-w-xs mb-2"
                placeholder="Tool Name"
                required
                {...register("name")}
              />
              <input
                className="input input-bordered w-full max-w-xs mb-2"
                placeholder="Tool Image"
                required
                {...register("img")}
              />
              <input
                className="input input-bordered w-full max-w-xs mb-2"
                placeholder="Price"
                required
                {...register("price")}
              />
              <input
                className="input input-bordered w-full max-w-xs mb-2"
                placeholder="Available Quantity"
                required
                {...register("avail_quantity")}
              />
              <input
                className="input input-bordered w-full max-w-xs mb-2"
                placeholder="Min. Order Amount"
                required
                {...register("min_order_quantity")}
              />
              <input
                className="input input-bordered w-full max-w-xs mb-2"
                placeholder="Short Description"
                required
                {...register("s_desc")}
              />

              <input className="btn btn-primary" type="submit" />
            </form>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AddProduct;
