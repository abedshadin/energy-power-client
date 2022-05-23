import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useToken from "../../hooks/useToken";
import Loading from "../Shared/Loading";

const Register = () => {
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  let signInError;
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token]=useToken(user || guser);
  if (user || guser) {
    navigate(from, { replace: true });
  }
  if (loading || updating || gloading) {
    return <Loading></Loading>;
  }
  if (error || gerror || updateError) {
    signInError = (
      <p className="text-red-500">
        <small>{error?.message}</small>
      </p>
    );
  }
  const onSubmit =async e => {
    e.preventDefault();
    await createUserWithEmailAndPassword(email, password);
     await updateProfile({ displayName: displayName});
     console.log(email,password,displayName);
   
 }
  return (
    <div className="hero  bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-80 max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={onSubmit}>
              <h1 className="text-center text-2xl text-white">Register</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"  onChange={(e) => setDisplayName(e.target.value)} required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"  onChange={(e) => setEmail(e.target.value)} required
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
                  className="input input-bordered"     onChange={(e) => setPassword(e.target.value)} required
                />
                <label className="label">
                  <p className="label-text-alt text-white">
                    Already have an account ?{" "}
                    <Link to="/login" className="link link-hover text-info">
                      Please Login Now
                    </Link>
                  </p>
                </label>
              </div>
              {signInError}
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
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
    </div>
  );
};

export default Register;
