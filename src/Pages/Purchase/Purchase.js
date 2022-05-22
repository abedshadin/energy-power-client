import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import { toast, ToastContainer } from "react-toastify";
const Purchase = () => {
  const { id } = useParams();
  const [active, setActive] = useState(true);
  const [user, loading] = useAuthState(auth);
  const [tool, setTool] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/tools/${id}`)
      .then((res) => res.json())
      .then((data) => setTool(data));
  }, []);
  if (loading) {
    return <Loading></Loading>;
  }

  const handleConfirm = (e) => {
    e.preventDefault();
    const quantity = e.target.quantity.value;
    const min = tool.min_order_quantity;
    const avail = tool.avail_quantity;

    if (quantity < min) {
      toast.error("Your Quantity is less than Min. Order Amount");
      setActive(!active);
    } else if (quantity > avail) {
      toast.error("Your Quantity is greater than Available Quantity");
      setActive(!active);
    }
  };



  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <img
            src={tool.img}
            class="max-w-sm rounded-lg shadow-2xl"
            alt="tools"
          />
          <div>
            <h1 class="text-5xl font-bold mb-1">{tool.name}</h1>
            <p class="text-2xl mb-1">Price: {tool.price} TK</p>
            <p class="text-2xl mb-1">
              Min. Order Amount: {tool.min_order_quantity} PCS
            </p>
            <p class="text-2xl mb-1">Available: {tool.avail_quantity} PCS</p>
            <p class="text-2xl mb-1">Description: {tool.s_desc}</p>

            <label for="my-modal" class="btn modal-button btn-primary">
              Checkout
            </label>
          </div>
        </div>
      </div>
      <input type="checkbox" id="my-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label
            for="my-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="text-lg font-bold text-center mb-2">{tool.name}</h3>
          <div class="text-center text-white ">
            <form action="" onSubmit={handleConfirm}>
              <input
                type="text"
                placeholder="Name"
                name="name"
                class="input input-bordered w-full max-w-xs m-2"
                value={user.displayName}
                disabled
              />
              <input
                type="text"
                placeholder="Email"
                name="email"
                class="input input-bordered w-full max-w-xs m-2"
                value={user.email}
                disabled
              />
              <input
                type="text"
                placeholder="Phone"
                name="phone"
                class="input input-bordered w-full max-w-xs m-2"
              />
              <input
                type="number"
              
                placeholder="Quantity"
                name="quantity"
                class="input input-bordered w-full max-w-xs m-2"
              />
              <textarea
                type="text"
                placeholder="Address"
                name="address"
                class="input input-bordered w-full max-w-xs  m-2"
              ></textarea>
              <input
                type="submit" 
                className={`w-72 btn btn-primary`} disabled={!active}
                value="Confirm"
                 
              />
            </form>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Purchase;
