import React, { useEffect, useState } from 'react';

const AllOrders = () => {
    const [allOrders,setAllOrders]= useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/orders`)
        .then(res=>res.json())
        .then(data=>setAllOrders(data));
    },[])
    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure?");
    
        if (proceed) {
          const url = `http://localhost:5000/allorders/${id}`;
          fetch(url, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              const remaining = allOrders.filter((iteml) => iteml._id !== id);
              setAllOrders(remaining);
            });
        }
      };

    return (
        <div>
              <h1 className='text-center text-3xl text-white mb-5'>All Orders</h1>
            <div class="overflow-x-auto w-full">
  <table class="table w-full">
  
    <thead>
      <tr>
       
        <th>Name</th>
        <th>Email</th>
        <th>Tool Name</th>
        <th>Status</th>
        <th>Cancel</th>
        
      </tr>
    </thead>
    <tbody>
  
     
     
    
     
    
   

          
            {
                allOrders.map(order=> <tr>
        
                    <td>
                     {order.user_name}
                    </td>
                    <td>
                    {order.user_email}
                    
                    
                    </td>
                  
                    <td>
                    {order.tool_name}
                    </td>
                    <td className='uppercase'>
                    {order.status}
                    </td>
                 
                    <td>
                        {
                            order.status==='unpaid' ?<button class="btn btn-ghost btn-xs text-white bg-orange-800" onClick={() => handleDelete(order._id)}>Cancel</button>:<button class="btn btn-ghost btn-xs text-white bg-orange-800" disabled>Cancel</button>
                        }
                      
                    </td>
                  </tr>)
            }
             </tbody>
  
  
    
  </table>
        </div>
        </div>
    );
};

export default AllOrders;