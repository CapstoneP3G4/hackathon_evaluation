import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Tech-A-Thon (Hardware Hackathon)
          </h1>
          <p>
            Participating teams would have to formulate their ideas on one of
            the given Problem Statements and submit their presentations which
            explain how they would like to implement it and briefly inform about
            the components to be used. Participating teams can submit their
            presentations until the deadline for this round anytime during the
            challenge window. 
          </p>
          <button className="bg-black text-[#df5200] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Register
          </button>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Game of Codes 
          </h1>
          <p>
            Participating teams would have to formulate their ideas on one of
            the given Problem Statements and submit their presentations which
            explain how they would like to implement it and briefly inform about
            the components to be used. Participating teams can submit their
            presentations until the deadline for this round anytime during the
            challenge window. 
          </p>
          <button className="bg-black text-[#df5200] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
