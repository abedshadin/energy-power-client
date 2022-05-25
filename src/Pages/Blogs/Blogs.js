import React from "react";

const Blogs = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-white text-3xl mb-5">Blogs</h1>
      <div className="border">
        <h1 className="bg-gray-500 text-white ">
          How will you improve the performance of a React Application?
        </h1>

        <p>
          Keeping component state local where necessary, Memoizing React
          components to prevent unnecessary re-renders, Code-splitting in React
          using dynamic import,Windowing or list virtualization in React
          applications,Lazy loading images in React{" "}
        </p>

        <h1 className="bg-gray-500 text-white">
          What are the different ways to manage a state in a React application?
        </h1>
        <p>
          Local (UI) state – Local state is data we manage in one or another
          component.<br></br>
          Global (UI) state – Global state is data we manage across multiple
          components.<br></br>
          Server state – Data that comes from an external server that must be
          integrated with our UI state.<br></br>
          URL state – Data that exists on our URLs, including the pathname and
          query parameters.<br></br>
        </p>

        <h1 className="bg-gray-500 text-white">
          Why you do not set the state directly in React. For example, if you
          have const [products, setProducts] = useState([]). Why you do not set
          products = [...] instead, you use the setProducts
        </h1>

        <p>
          {" "}
          Optimized components might not re-render if you do, and the rendering
          bugs will be tricky to track down. Instead, always create new objects
          and arrays when you call setState, which is what we did above with the
          spread operator.
        </p>

        <h1 className="bg-gray-500 text-white">
          You have an array of products. Each product has a name, price,
          description, etc. How will you implement a search to find products by
          name?
        </h1>
        <p>
          Yes, i will use Name to search any product. Because user like to
          search by product name instead of other information. So i implemented
          a search bar using name.
        </p>

        <h1 className="bg-gray-500 text-white">
          What is a unit test? Why should write unit tests?
        </h1>
        <p>
          The main objective of unit testing is to isolate written code to test
          and determine if it works as intended. Unit testing is an important
          step in the development process, because if done correctly, it can
          help detect early flaws in code which may be more difficult to find in
          later testing stages.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
