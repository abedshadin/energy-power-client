import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Orders = () => {
    const [user,loading] = useAuthState(auth);
    const [orders,setOrders] = useState([]);
    useEffect(()=>{
        const email = user.email;
        fetch(`http://localhost:5000/myorders?email=${email}`)
        .then(res=>res.json())
        .then(data=>setOrders(data));
    },[])
    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure?');
       
        
        if(proceed){
            const url = `http://localhost:5000/myorders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
               
                const remaining = orders.filter(iteml => iteml._id !== id);
                setOrders(remaining);
            })
        }
    }
    return (
        <div class="overflow-x-auto">
            <h2 className='text-center text-3xl'>My Orders</h2>
        <table class="table w-full">
         

    <thead>
    <tr>
      <th></th>
      <th>Tool Name</th>
      <th>Quantity</th>
      <th>Status</th>
      <th>Action</th>
    </tr>
  </thead>
 
         
<tbody> 
          
          {
              orders.map((order,index)=> <tr key={order._id}  >
                <th>{index+1}</th>
                <td>{order.tool_name}</td>
                <td>{order.quantity}</td>
                <td className='uppercase'>{order.status==='unpaid'?<p className=' text-red-500'>{order.status}</p>:<p className='text-green-500'>{order.status}</p>}</td>

                {order.status==='unpaid'?<td className='uppercase text-danger'><button className='btn btn-danger' onClick={() => handleDelete(order._id)}>X</button></td> :<td className='uppercase text-danger'><button className='btn btn-danger' disabled>X</button></td>
                }
               
              </tr>)
          }
            
        
           
           
          </tbody>
        </table>
      </div>
    );
};

export default Orders;