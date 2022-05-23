import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
const UpdateProfile = () => {
    const [user, loading] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const email = user.email;
    if (loading) {
      return <Loading></Loading>;
    }
    const onSubmit = (data) => {
        console.log(data);
        const proUp = {
         phone: data.phone,
         education: data.education,
         location: data.location,
         fb: data.fb,
         linkedin: data.linkedin,
        };
        fetch(`http://localhost:5000/user/${email}`, {
  method: 'PUT',
  body: JSON.stringify(proUp),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => {
    console.log(json)
    toast('Information Updated')
    navigate('/dashboard/profile')
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
                  placeholder="Phone Number"
                  required
                  {...register("phone")}
                />
                  <input
                  class="input input-bordered w-full max-w-xs mb-2"
                  placeholder="Education"
                  required
                  {...register("education")}
                />
                  <input
                  class="input input-bordered w-full max-w-xs mb-2"
                  placeholder="Location"
                  required
                  {...register("location")}
                />
                  <input
                  class="input input-bordered w-full max-w-xs mb-2"
                  placeholder="Facebook Link"
                  required
                  {...register("fb")}
                />
                 <input
                  class="input input-bordered w-full max-w-xs mb-2"
                  placeholder="Linkedin Link"
                  required
                  {...register("linkedin")}
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

export default UpdateProfile;