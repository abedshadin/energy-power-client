import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";

const Orders = () => {
  const [user, loading] = useAuthState(auth);
  const [orders, setOrders] = useState([]);

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
  return (
    <div className="overflow-x-auto">
      <h2 className="text-center text-3xl">My Orders</h2>
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Tool Name</th>
            <th>Quantity</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order, index) => (
            <tr key={order._id}>
              <th>{index + 1}</th>
              <td>{order.tool_name}</td>
              <td>{order.quantity}</td>
              <td className="uppercase">{order.status}</td>
              <td className="uppercase text-danger">
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(order._id)}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
