import React from "react";
import "../style.css"
import {API} from "../backend"

const Home = () => {
  console.log("API Is", API)
  return (
    <div>
      <h1 className="text-white">Hello,Home Page</h1>
    </div>
  );
};

export default Home;
