import React from "react";
import { toast, ToastContainer } from "react-toastify";

const UserRow = ({ user, refetch }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`https://nameless-reef-38172.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        toast("Admin Created");
        refetch();
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
