import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
     <h1 className='text-center text-white text-3xl mb-5'>Blogs</h1>
       <div class="overflow-x-auto">
  <table class="table table-zebra w-full">
 
    <thead>
      <tr>
    
        <th colSpan={4}>  <h1>How will you improve the performance of a React Application?</h1></th>
        
      </tr>
    </thead>
    <tbody>
  
      <tr>
        <th colSpan={4}>Ans</th>
    
      </tr>

      <tr>
        <th colSpan={4}>What are the different ways to manage a state in a React application?</th>
      
      </tr>
  
      <tr>
        <th colSpan={4}>Ans</th>
       
      </tr>
      <tr>
        <th colSpan={4}>How does prototypical inheritance work?</th>
      
      </tr>
  
      <tr>
        <th colSpan={4}>Ans</th>
       
      </tr>
      <tr>
        <th colSpan={4}>Why you do not set the state directly in React.<br></br> For example, if you have const [products, setProducts] = useState([]).<br></br> Why you do not set products = [...] instead, you use the setProducts</th>
      
      </tr>
  
      <tr>
        <th colSpan={4}>Ans</th>
       
      </tr>
      <tr>
        <th colSpan={4}> You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
</th>
      
      </tr>
  
      <tr>
        <th colSpan={4}>Ans</th>
       
      </tr>
      <tr>
        <th colSpan={4}>What is a unit test? Why should write unit tests?
</th>
      
      </tr>
  
      <tr>
        <th colSpan={4}>Ans</th>
       
      </tr>
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Blogs;