import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black-300">
      <h1 className="w-full text-3xl font-bold text-[#ee4714]">Hackcedo</h1>
      <ul className="hidden md:flex">
        

        
        
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-full">
  LOGIN
</button>
       
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#ee4714] m-4">
          Hackcedo
        </h1>

        <li className="p-4 border-b border-gray-600">AboutUS</li>
        <li className="p-4">LOGIN</li>
      </ul>
    </div>
  );
};

export default Navbar;
