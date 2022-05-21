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
        <div className='mt-4 lg:px-20 mb-4 px-12'>
            <h2 className='text-center text-3xl font-bold uppercase'>My Tools</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 text-center mx-auto'>
            {
                tools.map(tool=><Tool key={tool._id} tool={tool}></Tool>)
            }
            </div>
          

        </div>
    );
};

export default Tools;