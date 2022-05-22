import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* <!-- Page content here --> */}
        <label
          for="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label for="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          <li>
            <Link to=''>My Orders</Link>
          </li>
          <li>
            <Link to=''>My Review</Link>
          </li>
          <li>
            <Link to=''>My Profile</Link>
          </li>
        
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
