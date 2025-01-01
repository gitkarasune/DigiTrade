import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdOutlineWhatshot } from 'react-icons/md'

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [shake, setShake] = useState(false)

  useEffect(() => {
    // Close the dropdown when clicking outside of it
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  useEffect(() => {
    const intervalid = setInterval(() => {
      setShake(true);
      setTimeout(() => {
        setShake(false)
      }, 2000); // shake for 0.5 sec 
    }, 4000); // Repeats every 3 sec

    return () => clearTimeout(intervalid);
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button onClick={toggleDropdown} className="">
        More
      </button>

      <div
        ref={dropdownRef}
        className={`absolute right-0 p-4 py-10 mt-2 w-60 shadow-2xl rounded-md dark:bg-gray-900 bg-white text-sm ${isOpen ? "block" : "hidden"
          }`}
      >
        <div className="block px-4 text-sm dark:text-white">
          <div className="">
            {/* Link One */}
            <Link to={"/curriculum"}>
              <div className="mb-4 dark:hover:bg-gray-700 dark:bg-gray-800 hover:bg-gray-200 transition-all bg-gray-100 text-sm p-2">
                Curriculum
              </div>
            </Link>

            {/* Link Two */}
            <Link>
              <div className="mb-4 dark:hover:bg-gray-700 dark:bg-gray-800 hover:bg-gray-200 transition-all bg-gray-100 text-sm p-2">
                Projects
              </div>
            </Link>

            {/* Link Three */}
            {/* <Link>
              <div className="mb-4 dark:hover:bg-gray-700 dark:bg-gray-800 hover:bg-gray-200 transition-all bg-gray-100 p-2">
                Forum
              </div>
            </Link> */}

            {/* Link Four */}
            <Link>
              <div className="mb-4 dark:hover:bg-gray-700 dark:bg-gray-800 hover:bg-gray-200 transition-all flex justify-between items-center bg-gray-100 text-sm p-2">
                Daily Scoop
                <span className={` ${shake ? 'shake' : ''}`}>
                  <MdOutlineWhatshot className="text-blue-600 dark:text-blue-300" size={20} />
                </span>
              </div>
            </Link>

            <button className="w-full mx-auto py-2 px-2 border border-transparent text-sm font-medium rounded-sm text-white bg-gray-900 dark:bg-blue-900 hover:bg-blue-700 focus:outline-none transition duration-500 ease-in-out uppercase">
              <Link to={"/Pricing"}>Go Pro</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
