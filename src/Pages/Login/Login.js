import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";

import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  let signInError;
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }
  if (loading) {
    return <Loading></Loading>
}
if(error){
    signInError= <p className='text-red-500'><small>{error?.message}</small></p>
}


  return (
    <div class="hero  bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="card flex-shrink-0 w-80 max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <form>
              <h1 className="text-center text-2xl text-white">Login</h1>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Password</span>
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="password"
                  class="input input-bordered"
                />
                <label class="label">
                  <a>
                    Forgot password?
                  </a>
                </label>
                <label class="label">
                  <p className="label-text-alt text-white">
                    New on Energy Power ?{" "}
                    <Link to="/register" className="link link-hover text-info">
                      Please Register Now
                    </Link>
                  </p>
                </label>
              </div>
              {signInError}
              <div class="form-control mt-6">
                <button class="btn btn-primary">Login</button>
              </div>
            </form>
            <div class="flex flex-col w-full border-opacity-50">
              <div class="divider">OR</div>
              <div class="text-center">
                <button
                  class="btn btn-success"
                  onClick={() => signInWithGoogle()}
                >
                  Continue with google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
