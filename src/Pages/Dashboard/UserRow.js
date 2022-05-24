import React from "react";
import { toast, ToastContainer } from "react-toastify";

const UserRow = ({ user }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        toast("Admin Created");
      });
  };
  return (
    <tr>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button className="btn" onClick={makeAdmin}>
            Make Admin
          </button>
        )}
      </td>
      <ToastContainer></ToastContainer>
    </tr>
  );
};

export default UserRow;
