import React from "react";
import { useNavigate } from "react-router-dom";
import Typed from "react-typed";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="text-black ">
      <div className="max-w-[800px] mt-[100px] h-[35vh] w-full  mx-auto text-center flex flex-col justify-center">
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Lets Grow together.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Meet one-on-one with
          </p>

          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 mb-3"
            strings={["Experts", "Superstars"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>

        <div className="flex row justify-center items-center h-24 w-100 mx-auto px-4 text-white">
          <button
           className="bg-[#2F64ED] col-sm-12 col-md-5 rounded-md font-medium my-6 mx-auto py-3 text-white"
           onClick={()=>{navigate('/FindExperts')}}
           >
            Find Creators
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
