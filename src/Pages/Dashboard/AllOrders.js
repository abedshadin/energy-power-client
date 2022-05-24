import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const AllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/orders`)
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, [allOrders]);
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      const url = `http://localhost:5000/allorders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = allOrders.filter((iteml) => iteml._id !== id);
          setAllOrders(remaining);
          toast("Cancelled");
        });
    }
  };

  const handleShipped = (id) => {
    fetch(`http://localhost:5000/user/orderShip/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        toast("Shipped");
      });
  };

  return (
    <div>
      <h1 className="text-center text-3xl text-white mb-5">All Orders</h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Tool Name</th>
              <th>Status</th>
              <th>Track</th>
              <th>Change Track</th>
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map((order) => (
              <tr key={order._id}>
                <td>{order.user_name}</td>
                <td>{order.user_email}</td>

                <td>{order.tool_name}</td>
                <td className="uppercase">{order.status}</td>
                <td className="uppercase">
                  {order.ap_status === "shipped" ? (
                    <p className="text-green-500">{order.ap_status}</p>
                  ) : (
                    <p className="text-red-500">{order.ap_status}</p>
                  )}
                </td>
                <td className="uppercase">
                  {order.ap_status === "pending" ? (
                    <button
                      className="btn btn-ghost btn-xs text-white bg-green-800"
                      onClick={() => handleShipped(order._id)}
                    >
                      Shipped
                    </button>
                  ) : (
                    <button
                      className="btn btn-ghost btn-xs text-white bg-orange-800"
                      disabled
                    >
                      Cancel
                    </button>
                  )}
                </td>
                <td>
                  {order.status === "unpaid" ? (
                    <button
                      className="btn btn-ghost btn-xs text-white bg-orange-800"
                      onClick={() => handleDelete(order._id)}
                    >
                      Cancel
                    </button>
                  ) : (
                    <button
                      className="btn btn-ghost btn-xs text-white bg-orange-800"
                      disabled
                    >
                      Cancel
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AllOrders;
