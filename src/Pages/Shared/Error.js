import React from 'react';
import './Error.css';
const Error = () => {
    return (
        <div className=''>
        <div className='text-center flex justify-center items-center'><svg xmlns="http://www.w3.org/2000/svg" className="icon text-center h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
<path stroke-linecap="round" stroke-linejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg></div>
<div className='text-center'>
<h1 className='text-4xl'>404</h1>
<h2 className='text-2xl'>Page not found</h2>
</div>

    </div>
    );
};

export default Error;