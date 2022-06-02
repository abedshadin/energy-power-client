import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const ManageProduct = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch(`https://nameless-reef-38172.herokuapp.com/tools`)
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      const url = `https://nameless-reef-38172.herokuapp.com/tools/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = tools.filter((iteml) => iteml._id !== id);
          setTools(remaining);
          toast("Item Removed");
        });
    }
  };

  return (
    <div>
      <h1 className="text-center text-3xl text-white mb-5">All Orders</h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Tool</th>
              <th>Image</th>
              <th>Available Amount</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {tools.map((tool) => (
              <tr key={tool._id}>
                <td>{tool.name}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={tool.img}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>

                <td>{tool.avail_quantity}</td>

                <td>
                  <button
                    className="btn btn-ghost btn-xs text-white bg-orange-800"
                    onClick={() => handleDelete(tool._id)}
                  >
                    Remove
                  </button>
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

export default ManageProduct;
