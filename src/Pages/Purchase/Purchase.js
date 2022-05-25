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
    const quantity = parseInt(e.target.quantity.value);
    const phone = e.target.phone.value;
    const address = e.target.address.value;
    const min = tool.min_order_quantity;
    const avail = tool.avail_quantity;

    if (quantity < min) {
      toast.error("Your Quantity is less than Min. Order Amount");

      e.target.reset();
      setActive(!active);
    } else if (quantity > avail) {
      toast.error("Your Quantity is greater than Available Quantity");
      e.target.reset();
      setActive(!active);
    } else {
      // const fetchTool = avail;
      // const addQuan = fetchTool - quantity;
      // console.log(avail);

      // const url = `http://localhost:5000/tools/${id}`;
      // fetch(url, {
      //   method: "put",
      //   headers: {
      //     "content-type": "application/json",
      //   },
      //   body: JSON.stringify({ avail_quantity: addQuan }),
      // })
      //   .then((res) => res.json())
      //   .then((data) => {
      //     e.target.reset();
      //     setTool({ ...tool, avail_quantity: addQuan });
      //   });
      const priceMulti = parseInt(tool.price * quantity);
      console.log(priceMulti);
      const order = {
        tool_id: tool._id,
        tool_name: tool.name,
        total_price: priceMulti,
        user_name: user.displayName,
        user_email: user.email,
        quantity: quantity,
        phone: phone,
        address: address,
        status: "unpaid",
      };

      fetch("http://localhost:5000/ordered", {
        method: "POST",
        body: JSON.stringify(order),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          toast(`Order Successful`);

          document.getElementById("my-modal").click();
          e.target.reset();
        });
    }
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={tool.img}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="tools"
          />
          <div>
            <h1 className="text-5xl font-bold mb-1">{tool.name}</h1>
            <p className="text-2xl mb-1">Price: {tool.price} TK</p>
            <p className="text-2xl mb-1">
              Min. Order Amount: {tool.min_order_quantity} PCS
            </p>
            <p className="text-2xl mb-1">
              Available: {tool.avail_quantity} PCS
            </p>
            <p className="text-2xl mb-1">Description: {tool.s_desc}</p>

            <label htmlFor="my-modal" className="btn modal-button btn-primary">
              Checkout
            </label>
          </div>
        </div>
      </div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-center mb-2">{tool.name}</h3>
          <div className="text-center text-white ">
            <form action="" onSubmit={handleConfirm}>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered w-full max-w-xs m-2"
                value={user.displayName}
                disabled
              />
              <input
                type="text"
                placeholder="Email"
                name="email"
                className="input input-bordered w-full max-w-xs m-2"
                value={user.email}
                disabled
              />
              <input
                type="text"
                required
                placeholder="Phone"
                name="phone"
                id="phone"
                className="input input-bordered w-full max-w-xs m-2"
              />
              <input
                type="number"
                placeholder="Quantity"
                name="quantity"
                defaultValue={tool.min_order_quantity}
                className="input input-bordered w-full max-w-xs m-2"
              />
              <textarea
                type="text"
                placeholder="Address"
                required
                name="address"
                className="input input-bordered w-full max-w-xs  m-2"
              ></textarea>
              <input
                type="submit"
                className={`w-72 btn btn-primary`}
                disabled={!active}
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
