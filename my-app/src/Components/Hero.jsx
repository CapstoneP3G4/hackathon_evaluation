import React from "react";
import { Link } from "react-router-dom";
import {MDBBtn } from 'mdb-react-ui-kit';

const Hero = () => {
  return (
    <div className="text-black">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Hackcedo <div className='text-[#ee4714] md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>2023</div>
        </h1>

        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Hackathons which help you put your coding skills to work. Solve
          interesting business problems and real-world challenges.
        </p>
        <Link to="/registrationForm">
          <button className="bg-[#3b71ca] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white">
            Register
          </button>
        </Link>
        {/* <Link to="/logIn" style={{ color: "white" }}><MDBBtn  >LogIn</MDBBtn></Link> */}
      </div>
    </div>
  );
};

export default Hero;
