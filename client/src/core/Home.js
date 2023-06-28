import React from "react";
import "../style.css";
import { API } from "../backend";
import Base from "./Base";

const Home = () => {
  console.log("API Is", API);
  return (
    <Base title='Home Page'>
      {/* BY The Time It Consider Aa a Cards Below Button */}
      <div className='row'>
        <div className='col-4'>
          <button className='btn btn-success'>TEST</button>
        </div>
        <div className='col-4'>
          <button className='btn btn-success'>TEST</button>
        </div>
        <div className='col-4'>
          <button className='btn btn-success'>TEST</button>
        </div>
      </div>
    </Base>
  );
};

export default Home;
