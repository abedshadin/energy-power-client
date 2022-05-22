import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from 'firebase/auth';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [user,loading] = useAuthState(auth);

  const logout= ()=>{
    signOut(auth);
  }
console.log(user);
  return (
    <div class="navbar bg-base-100">
      <div class="flex-1">
        <Link class="btn btn-ghost normal-case text-xl" to='/'>Energy Power</Link>
      </div>
      <div class="flex-none gap-2">
        {/* <ul class="menu menu-horizontal p-0">
      <li><a>Item 1</a></li>
      <li tabindex="0">
        <a>
          Parent
          <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul class="p-2 bg-base-100">
          <li><a>Submenu 1</a></li>
          <li><a>Submenu 2</a></li>
        </ul>
      </li>
      <li><a>Item 3</a></li>
    </ul> */}



{
  user ? 
  <div class="dropdown dropdown-end">
    <label tabindex="0" class="btn btn-ghost btn-circle avatar">
      <div class="w-10 rounded-full">
        <img src={user.photoURL} alt='User'/>
      </div>
    </label>
    <ul
      tabindex="0"
      class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
    >
      <li>
        <a class="justify-between">
          Profile
          <span class="badge">New</span>
        </a>
      </li>
      <li>
        <a>Settings</a>
      </li>
      <li>
        <button onClick={logout}>Logout</button>
      </li>
    </ul>
  </div>:
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <img src="https://api.lorem.space/image/face?hash=33791" />
            </div>
          </label>
          <ul
            tabindex="0"
            class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a class="justify-between">
                Profile
                <span class="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
}
      </div>
    </div>
  );
};

export default Navbar;
