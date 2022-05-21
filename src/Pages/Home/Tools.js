import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [tools,setTools] = useState([]);
    useEffect(()=>{
fetch(`http://localhost:5000/tools`)
.then(res=>res.json())
.then(data=>setTools(data))
    },[]);
    return (
        <div className='mt-12 mb-12 flex flex-col justify-center items-center'>
            <h2 className='text-center text-3xl font-bold uppercase text-accent mb-4'>My Tools</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 text-center '>
            {
                tools.map(tool=><Tool key={tool._id} tool={tool}></Tool>)
            }
            </div>
          

        </div>
    );
};

export default Tools;