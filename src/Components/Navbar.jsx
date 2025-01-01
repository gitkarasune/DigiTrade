import React, { useContext, useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { SiCytoscapedotjs } from "react-icons/si"
import { CoinContext } from "../Context/CoinContext";

const Navbar = () => {

  const { setCurrency } = useContext(CoinContext);

  const [showModal, setShowModal] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    window.innerWidth
  );

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case "usd": {
        setCurrency({name: "usd", symbol: "$"});
        break;
      }
      case "eur": {
        setCurrency({name: "eur", symbol: "£"});
        break;
      }
      case "inr": {
        setCurrency({name: "inr", symbol: "₹"});
        break;
      }
      default : {
        setCurrency({name: "usd", symbol: "$"});
        break;
      }
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    if (windowWidth < 640) {
      // Small screens
      const timer = setTimeout(() => {
        setShowModal(true);
      }, 10000); // 10000 secs

      return () => clearTimeout(timer);
    } else {
      setShowModal(false);
    }
  }, [windowWidth]);

  const handleCloseModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'auto';
  }

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    }
  }, [showModal])

  return (
    <nav className="bg-gray-900 fixed w-full z-40 py-4 transition-colors duration-300 shadow-sm maxContainer" >
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center md:mr-7">
            <a
              href="/"
              className="text-2xl font-bold text-indigo-600 dark:text-indigo-400"
            >
              <SiCytoscapedotjs className="text-6xl rounded-full"/>
            </a>
          </div>

          <div className="flex ml-2 mr-2 items-center">
            <button
              className="p-2 rounded-md text-gray-300 font-medium hover:bg-gray-950 focus:outline-none transition-colors duration-300"
            >
              Features
            </button>
            <button
              className="p-2 rounded-md text-gray-300 font-medium hover:bg-gray-950 focus:outline-none transition-colors duration-300"
            >
              Pricing
            </button>
            <button
              className="p-2 rounded-md text-gray-300 font-medium hover:bg-gray-950 focus:outline-none transition-colors duration-300"
            >
              Blog
            </button>
          </div>
          <div className="flex items-center">
            <select onChange={currencyHandler} className="w-28 border rounded-sm bg-gray-800 border-gray-900 outline-none">
              <option className="text-sm text-white" value="usd">USD</option>
              <option className="text-sm text-white" value="eur">EUR</option>
              <option className="text-sm text-white" value="inr">INR</option>
            </select>
          </div>
          <div className="flex items-center">
            <div className="ml-3 hidden md:block">
              <button
                className='w-28 mx-auto py-3 px-3 border border-transparent text-sm font-medium rounded-full text-white bg-blue-900 dark:bg-blue-900 hover:bg-gray-900 focus:outline-none transition duration-500 ease-in-out '
              >
                Signup
              </button>
            </div>
          </div>
          {showModal && (
            <div className="fixed inset-0 bg-gray-950 bg-opacity-80 flex justify-center items-center transition-opacity duration-300 ease-in-out">
              <div className="bg-white rounded-2xl shadow-lg p-4 transition-transform duration-300 ease-in-out w-80">
                <button className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none transition duration-300 ease-in-out " onClick={handleCloseModal}>
                  <FaTimes className="transition dura" />
                </button>
                <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
                <p className="text-center mb-7">Stay tunned and be updated with the Largest Crypto Marketplace</p>
                <div className="flex justify-center items-center">
                  <button
                    className='w-80 mx-auto py-2 px-3 border border-transparent text-sm font-medium rounded-full text-white bg-blue-900 dark:bg-blue-900 hover:bg-blue-700 focus:outline-none transition duration-500 ease-in-out '
                  >
                    Signup
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
