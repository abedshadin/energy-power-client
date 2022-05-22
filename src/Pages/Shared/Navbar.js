import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const Navbar = () => {
  const [user, loading] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };

  if (loading) {
    return <Loading></Loading>;
  }
  console.log(user);
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link className="btn btn-ghost normal-case text-xl" to="/">
          Energy Power
        </Link>
      </div>
      <div className="flex-none gap-2">
        {/* <ul className="menu menu-horizontal p-0">
      <li><a>Item 1</a></li>
      <li tabIndex="0">
        <a>
          Parent
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-base-100">
          <li><a>Submenu 1</a></li>
          <li><a>Submenu 2</a></li>
        </ul>
      </li>
      <li><a>Item 3</a></li>
    </ul> */}

        {user ? 
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {
                  user.photoURL ? <img src={user?.photoURL} alt="User"></img>:<img src="https://d29fhpw069ctt2.cloudfront.net/icon/image/84587/preview.svg" alt="User"></img>
                }
               
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
                <a>Settings</a>
              </li>
              <li>
                <button onClick={logout}>Logout</button>
              </li>
            </ul>
          </div>
         : 
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
                <Link to="/login"className="justify-between">
                  Login
                 
                </Link>
              </li>
              <li>
              <Link to="/register"className="justify-between">
                  Register
                 
                </Link>
              </li>
              
            </ul>
          </div>
        }
      </div>
    </div>
  );
};

export default Navbar;
