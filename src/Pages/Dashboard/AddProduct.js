import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
const AddProduct = () => {
    const [user, loading] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const email = user.email;
    if (loading) {
      return <Loading></Loading>;
    }
    const onSubmit = (data) => {
        console.log(data);
        const addTool = {
         email: email,
         name: data.name,
         img: data.img,
         price: data.price,
         avail_quantity: data.avail_quantity,
         min_order_quantity: data.min_order_quantity,
         s_desc:data.s_desc
        };
        fetch(`http://localhost:5000/tools`, {
  method: 'Post',
  body: JSON.stringify(addTool),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => {
    console.log(json)
    toast('Tool Added')
    
  }
  

  
  );
      };
    return (
        <div>
        <div className="flex justify-center items-center justify-items-center">
          <div class="card w-96 bg-base-100  shadow-xl">
            <div class="card-body items-center text-center">
              <h2 class="card-title">Update Profile</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  class="input input-bordered w-full max-w-xs mb-2"
                  placeholder="Tool Name"
                  required
                  {...register("name")}
                />
                  <input
                  class="input input-bordered w-full max-w-xs mb-2"
                  placeholder="Tool Image"
                  required
                  {...register("img")}
                />
                  <input
                  class="input input-bordered w-full max-w-xs mb-2"
                  placeholder="Price"
                  required
                  {...register("price")}
                />
                  <input
                  class="input input-bordered w-full max-w-xs mb-2"
                  placeholder="Available Quantity"
                  required
                  {...register("avail_quantity")}
                />
                 <input
                  class="input input-bordered w-full max-w-xs mb-2"
                  placeholder="Min. Order Amount"
                  required
                  {...register("min_order_quantity")}
                />
                <input
                  class="input input-bordered w-full max-w-xs mb-2"
                  placeholder="Short Description"
                  required
                  {...register("s_desc")}
                />
              
                <input class="btn btn-primary" type="submit" />
              </form>
            </div>
          </div>
        </div>
        <ToastContainer></ToastContainer>
      </div>
    );
};

export default AddProduct;