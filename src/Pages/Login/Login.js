import { async } from "@firebase/util";
import React, { useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const Login = () => {
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(
    auth
  );
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let signInError;
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  if (guser || user) {
    navigate(from, { replace: true });
  }
  if (gloading || loading|| sending) {
    return <Loading></Loading>;
  }
  if (gerror || error || resetError) {
    signInError = (
      <p className="text-red-500">
        <small>{gerror?.message || error?.message || resetError?.message}</small>
      </p>
    );
  }
  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
    console.log(email);
  };
  const reset =async e =>{
   
    if(email){
      await sendPasswordResetEmail(email);
      toast('Sent email');
    }
    else{
      toast('Please Enter Email')
    }
 
    
  
  }
  return (
    <div className="hero  bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-80 max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <h1 className="text-center text-2xl text-white">Login</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  onChange={(e) => setEmail(e.target.value)} required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  onChange={(e) => setPassword(e.target.value)} required
                />
                <label className="label">
                  <button onClick={reset}>Forgot password?</button>
                </label>
                <label className="label">
                  <p className="label-text-alt text-white">
                    New on Energy Power ?
                    <Link to="/register" className="link link-hover text-info">
                      Please Register Now
                    </Link>
                  </p>
                </label>
              </div>
              {signInError}
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div className="flex flex-col w-full border-opacity-50">
              <div className="divider">OR</div>
              <div className="text-center">
                <button
                  className="btn btn-success"
                  onClick={() => signInWithGoogle()}
                >
                  Continue with google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
