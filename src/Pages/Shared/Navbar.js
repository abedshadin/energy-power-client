import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import { Link, useLocation } from "react-router-dom";
import Loading from "./Loading";

const Navbar = () => {
  const [user, loading] = useAuthState(auth);
  const { pathname } = useLocation();
  const logout = () => {
    signOut(auth);
  };

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        {pathname.includes("dashboard") && (
          <label
            className="btn btn-square btn-ghost lg:hidden"
            htmlFor="my-drawer-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        )}
        <Link className="btn btn-ghost normal-case text-xl" to="/">
          Energy Power
        </Link>
      </div>
      <div className="dropdown dropdown-end">
        <label tabIndex="0" className="btn m-1">
          More
        </label>
        <ul
          tabIndex="0"
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <Link to="/blogs" className="  text-white">
              Blogs
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="  text-white">
              My Portfolio
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex-none gap-2">
        <ul className="menu menu-horizontal p-0"></ul>

        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {user.photoURL ? (
                  <img src={user?.photoURL} alt="User"></img>
                ) : (
                  <img
                    src="https://d29fhpw069ctt2.cloudfront.net/icon/image/84587/preview.svg"
                    alt="User"
                  ></img>
                )}
              </div>
            </label>
            <ul
              tabIndex="0"
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              
              <li className="text-center text-white">{user.displayName}</li>
              <div className="divider"></div>
              <li>
                <Link to="/dashboard" className="justify-between">
                  Dashboard
                </Link>
              </li>

              <li>
                <button onClick={logout}>Logout</button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://d29fhpw069ctt2.cloudfront.net/icon/image/84587/preview.svg" />
              </div>
            </label>
            <ul
              tabIndex="0"
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/login" className="justify-between">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="justify-between">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
