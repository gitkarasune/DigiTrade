import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";


const Placeholder = ({ allCoin, setDisplayCoin }) => {
  const [input, setInput] = useState("");

  const searchHandler = (event) => {
    setInput(event.target.value);
    if (event.target.value === "") {
      setDisplayCoin(allCoin)
    }
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const searchCoins = await allCoin.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase())
    })
    setDisplayCoin(searchCoins);
  }

  return (
    <>
      <div className="flex justify-center mt-6 items-center relative m-auto" style={{ maxWidth: "900px" }}>

        <form onSubmit={onSubmitHandler} className="w-full">
        <input
          type="text"
          placeholder="eg: Bitcoin"
          id="text"
          autoComplete="off"
          name="text"
          className="w-full rounded-sm focus:outline-none border-none text-gray-300 bg-gray-800 py-3 pl-10"
          onChange={searchHandler}
          required
          value={input}
        />

        <button type="submit" className=" cursor-pointer text-gray-400 absolute scale-110 right-0 top-1 bg-gray-700 rounded-sm p-3" >
          <FaSearch className="" />
        </button>
        </form> 
      </div>
    </>
  );
};

export default Placeholder;