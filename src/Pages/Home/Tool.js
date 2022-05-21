import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({tool}) => {
    const {_id,name,img,s_desc,min_order_quantity,avail_quantity,price} = tool;
    const navigate = useNavigate();
    const handleBuy = (id)=>{
        navigate(`/purchase/${id}`);
    }
    return (
        <div class="card w-96 bg-base-300 shadow-xl">
  <figure class="px-10 pt-10">
    <img src={img} alt={name} className="rounded-xl h-60" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title text-3xl">{name}</h2>
    <h3 className='text-2xl font-bold text-accent'>{price} TK</h3>
    <h3 className='text-2xl font-bold text-white'>{avail_quantity} Pcs Available </h3>
    <h2 className='text-1xl font-bold text-white'>Min. Order {min_order_quantity} Pcs</h2>
    <p>{s_desc}</p>
    <div class="card-actions">
      <button class="btn btn-primary" onClick={()=>handleBuy(_id)}>Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default Tool;