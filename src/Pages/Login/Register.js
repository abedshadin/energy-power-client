import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div class="hero  bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
         
          <div class="card flex-shrink-0 w-80 max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
            <form>
            <h1 className='text-center text-2xl text-white'>Register</h1>
            <div class="form-control">
             
              
                <label class="label">
                  <span class="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" name='name' class="input input-bordered" />
              </div>
              <div class="form-control">
              
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" name='email' class="input input-bordered" />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Password</span>
                </label>
                <input type="text" name='password' placeholder="password" class="input input-bordered" />
                <label class="label">
                  <p className="label-text-alt text-white">Already have an account ? <Link to='/login' className='link link-hover text-info'>Please Login Now</Link></p>
                </label>
              </div>
              <div class="form-control mt-6">
                <button class="btn btn-primary">Register</button>
              </div>
              </form>
              <div class="flex flex-col w-full border-opacity-50">

<div class="divider">OR</div>
<div class="text-center"><button class="btn btn-success">Continue with google</button></div>
</div>
            </div>
           
          </div>
        </div>
      </div>
    );
};

export default Register;