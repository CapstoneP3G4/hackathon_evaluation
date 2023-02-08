import React from "react";

const Hero = () => {
  return (
    <div className="text-black">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Hackathons <div className='text-[#ee4714] md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>2023</div>
        </h1>

        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Hackathons which help you put your coding skills to work. Solve
          interesting business problems and real-world challenges.
        </p>
        <button className="bg-[#043465] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white">
          Participate
        </button>
      </div>
    </div>
  );
};

export default Hero;
