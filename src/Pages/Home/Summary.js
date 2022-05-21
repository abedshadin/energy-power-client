import React from 'react';
import experience from '../../assets/icons/user-experience.png'
import quality from '../../assets/icons/quality-control.png'
import satisfaction from '../../assets/icons/satisfaction.png'
import award from '../../assets/icons/trophy.png'
const Summary = () => {
    return (
        <div>
            <div className="mt-4 mb-4">
            <h2 className='text-center text-3xl font-bold uppercase mb-4'>Our Activities</h2>
        <div className="grid grid-cols-4">
            
		<div className="border rounded-lg m-5 p-5">
		<h4 className="text-center">
			<img src={experience} alt="" className='w-20 mx-auto'/>
		<span className="font-bold   text-success lg:text-8xl text-6xl" data-from="0" data-to="25" data-speed="1500">5</span>
	</h4>
	<p className="special-heading text-center">
		<span className="uppercase text-white font-bold lg:text-2xl text-1xl">
		Years of</span>
	
	</p>
	<h4 className="special-heading text-center">
		<span className="uppercase text-white font-bold lg:text-2xl text-1xl">
		Experience	</span>
	
	</h4>
	</div> 

    <div className="border rounded-lg m-5 p-5">
		<h4 className="text-center">
		<img src={quality} alt="" className='w-20 mx-auto'/>
		<span className="font-bold   text-success lg:text-8xl text-6xl" data-from="0" data-to="25" data-speed="1500">27</span>
	</h4>
	<p className="special-heading text-center">
		<span className="uppercase text-white font-bold lg:text-2xl text-1xl">
		high quality</span>
	
	</p>
	<h4 className="special-heading text-center">
		<span className="uppercase text-white font-bold lg:text-2xl text-1xl">
		proposals	</span>
	
	</h4>
	</div>
    <div className="border rounded-lg m-5 p-5">
		<h4 className="text-center">
		<img src={satisfaction} alt="" className='w-20 mx-auto'/>
		<span className="font-bold   text-success lg:text-8xl text-6xl" data-from="0" data-to="25" data-speed="1500">6K+</span>
	</h4>
	<p className="special-heading text-center">
		<span className="uppercase text-white font-bold lg:text-2xl text-1xl">
		Satisfied</span>
	
	</p>
	<h4 className="special-heading text-center">
		<span className="uppercase text-white font-bold lg:text-2xl text-1xl">
		Customers	</span>
	
	</h4>
	</div>
    <div className="border rounded-lg m-5 p-5">
		<h4 className="text-center"> 
		<img src={award} alt="" className='w-20 mx-auto'/>
		<span className="font-bold   text-success lg:text-8xl text-6xl" data-from="0" data-to="25" data-speed="1500">12</span>
	</h4>
	<p className="special-heading text-center">
		<span className="uppercase text-white font-bold lg:text-2xl text-1xl">
		earned</span>
	
	</p>
	<h4 className="special-heading text-center">
		<span className="uppercase text-white font-bold lg:text-2xl text-1xl">
		awards	</span>
	
	</h4>
	</div>
        </div>

    </div>
        </div>
    );
};

export default Summary;