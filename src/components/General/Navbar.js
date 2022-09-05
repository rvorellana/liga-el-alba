import React, { useState, useEffect, useCallback } from "react";
import logo from "./../../logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <nav className="px-2 bg-white border-gray-200  ">
        <div className="container py-2 flex flex-wrap justify-between items-center mx-auto md:">
          <Link to="/liga-el-alba" className="flex items-center">
            <img src={logo} className="mr-3 h-16 sm:h-16" alt="" />
            <span className="self-center font-semibold whitespace-nowrap md:text-xl text-3xl">
              Liga El Alba
            </span>
          </Link>
          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            className="inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-300 "
            aria-controls="mobile-menu-2"
            aria-expanded="true"
            onClick={() => setOpen(!open)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className={
              open
                ? "w-full md:block md:w-auto"
                : "hidden w-full md:block md:w-auto"
            }
            id="mobile-menu"
          >
            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white ">
              <li>
                <Link
                  to="/liga-el-alba/home"
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-rose-800 md:p-0 "
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/liga-el-alba/tables"
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-rose-800 md:p-0 "
                >
                  Torneos
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
