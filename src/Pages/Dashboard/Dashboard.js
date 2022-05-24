import React from "react";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-neutral">
        {/* <!-- Page content here --> */}
        <h2 className="text-4xl text-accent">Dashboard</h2>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {!admin ? (
            <>
              <li>
                <Link to="/dashboard">My Orders</Link>
              </li>
              <li>
                <Link to="/dashboard/review">My Review</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/dashboard/allorders">All Orders</Link>
              </li>
            </>
          )}

          <li>
            <Link to="/dashboard/profile">My Profile</Link>
          </li>

          {admin && (
            <li>
              <Link to="/dashboard/users">Make Admin</Link>

              <Link to="/dashboard/addproduct">Add Product</Link>
              <Link to="/dashboard/mngproduct">Manage Product</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
