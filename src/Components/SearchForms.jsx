import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";


const Placeholder = () => {
  
  return (
    <>
      <div className="flex justify-center mt-6 items-center relative m-auto" style={{ maxWidth: "900px"}}>
        <button className=" cursor-pointer hover:scale-110 text-gray-400 absolute right-3 bg-gray-700 rounded-full p-3" >
          <FaSearch className="" />
        </button>  
        <input
          type="text"
          placeholder="Search the largest marketplace"
          id="text"
          autoComplete="off"
          name="text"
          className="w-full rounded-sm focus:outline-none border-none text-gray-300 bg-gray-800 py-3 pl-10"
        />
        
      </div>
    </>
  );
};

export default Placeholder;