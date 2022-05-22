import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Purchase = () => {
  const { id } = useParams();
  const [tool, setTool] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/tools/${id}`)
      .then((res) => res.json())
      .then((data) => setTool(data));
  }, []);
  return <div>
      This is purchase
      
      
      <h2>{tool.name}</h2>
      
      </div>;
};

export default Purchase;
