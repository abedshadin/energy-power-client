import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Profile = () => {
    const [user,loading] = useAuthState(auth);
    return (
        <div>
            
            
            <div class="overflow-x-auto">
  <table class="table w-full">
 
    <thead>
      <tr>
        <th className='text-center text-2xl text-white' colSpan={2}>User Information</th>
       
      </tr>
    </thead>
    <tbody>
     
      <tr>
        <th>Name</th>
        <td>{user.displayName}</td>
        
      </tr>
      
      <tr class="active">
      
        <td>Email</td>
        <td>{user.email}</td>
      </tr>

      <tr>
      
        <td>Phone</td>
        <td>Red</td>
      </tr>
      <tr class="active">
      
      <td >Education</td>
      <td>Red</td>
    </tr>
    <tr>
      
      <td>Location</td>
      <td>Red</td>
    </tr>
    <tr class="active">
      
      <td>Facebook</td>
      <td>Red</td>
    </tr>
    <tr>
      
      <td>Linkedin</td>
      <td>Red</td>
    </tr>

    </tbody>
  </table>
</div>
        </div>
    );
};

export default Profile;