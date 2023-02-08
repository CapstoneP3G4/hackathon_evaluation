import React from "react";

import Double from "../assets/double.png";


const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Double}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">2nd prize</h2>
          <p className="text-center text-4xl font-bold">US$10,000</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8"></p>
            <p className="py-2 border-b mx-8"></p>
            <p className="py-2 border-b mx-8"></p>
          </div>
        </div>
        <div className="w-full shadow-2xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={Double}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">1st Prize</h2>
          <p className="text-center text-4xl font-bold">US$20,000</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8"></p>
            <p className="py-2 border-b mx-8"></p>
            <p className="py-2 border-b mx-8"></p>
          </div>
          
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Double}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">3rd Prize</h2>
          <p className="text-center text-4xl font-bold">$5000</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8"></p>
            <p className="py-2 border-b mx-8"></p>
            <p className="py-2 border-b mx-8"></p>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Cards;
