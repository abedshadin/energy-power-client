import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const Orders = () => {
  const [user, loading] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const email = user.email;
    fetch(`http://localhost:5000/myorders?email=${email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  if (loading) {
    return <Loading></Loading>;
  }
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      const url = `http://localhost:5000/myorders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = orders.filter((iteml) => iteml._id !== id);
          setOrders(remaining);
        });
    }
  };

  const makePaid = (id) => {
    fetch(`http://localhost:5000/user/order/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
      
       
        toast("Order Paid");
      });
  };
  return (
    <div>
      <h2 className="text-center text-3xl">My Orders</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Tool Name</th>
              <th>Quantity</th>
              <th>Status</th>
              <th>Payment</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{order.tool_name}</td>
                <td>{order.quantity}</td>
                <td className="uppercase">
                  {order.status === "unpaid" ? (
                    <p className=" text-red-500">{order.status}</p>
                  ) : (
                    <p className="text-green-500">{order.status}</p>
                  )}
                </td>
                <td>
                  {" "}
                  {order.status === "unpaid" ? (
                    <td className="uppercase text-danger">
                      <button className="btn btn-danger" onClick={()=>makePaid(order._id)}>Pay Now</button>
                    </td>
                  ) : (
                    <td className="uppercase text-danger">
                      <button className="btn " disabled>
                        Paid
                      </button>
                    </td>
                  )}
                </td>
                {order.status === "unpaid" ? (
                  <td className="uppercase text-danger">
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(order._id)}
                    >
                      X
                    </button>
                  </td>
                ) : (
                  <td className="uppercase text-danger">
                    <button className="btn btn-danger" disabled>
                      X
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Orders;
