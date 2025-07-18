import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../assests/Logo.jpeg'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex sticky top-0 border-b shadow-lg py-3 px-4 sm:px-10 bg-white min-h-[70px] tracking-wide relative z-50">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto w-full">

        {/* Logo with Name (Desktop View) */}
        <Link to="/" className="hidden sm:flex items-center gap-2">
          {/* <img style={{ width: "350px" }}
            src={Logo} // Replace with the correct path to your logo
            alt="Logo"
            className="w-12 h-12 object-contain" // Adjust size as needed
          /> */}
          <span className="text-[25px] font-bold text-gray-900">Dr. Raj Kanwar Yadav</span>
        </Link>

        {/* Logo Only (Mobile View) */}
        <Link to="/" className="sm:hidden flex items-center gap-2">
          {/* <img style={{ width: "200px" }}
            src={Logo} // Replace with the correct path to your logo
            alt="Logo"
            className=" object-contain" // Smaller size for mobile
          /> */}
           <span className="text-[25px] font-bold text-gray-900">Dr. Raj Kanwar Yadav</span>
        </Link>

        {/* Mobile Menu Button (Hamburger) */}
        <button
          onClick={() => setIsOpen(true)}
          className="lg:hidden text-2xl ml-auto"
        >
          ☰
        </button>

        {/* Mobile Side Menu */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md p-6 z-50 transform ${isOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out lg:hidden`}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 bg-gray-100 rounded-full p-2"
          >
            ✖
          </button>

          <ul className="space-y-4 mt-10">
            {["About Me"].map((item, index) => (
              <li key={index}>
                <Link
                   to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
                  className="block text-lg font-medium text-gray-800 hover:text-blue-500 relative group"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                  <span className="absolute left-0 bottom-0 w-0 h-[5px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:items-center lg:ml-auto lg:gap-x-5">
          {[,"About Me"].map((item, index) => (
            <Link
              key={index}
              to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
              className="font-medium text-gray-900 text-[15px] relative group"
              style={{ fontWeight: "bold" }}
            >
              {item}
              <span className="absolute left-0 bottom-[-5px] w-0 h-[4px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          {/* Booking Appointment Button */}
          {/* <Link
            to="/booking"
            className="text-white px-6 py-3 mt-4 rounded-lg text-lg font-medium border-2 transition duration-[1000ms]"
            style={{
              fontWeight: "bold",
              backgroundColor: "#336699",
              borderColor: "#336699",
              transition: "background-color 1s, color 1s, border-color 1s",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "white";
              e.target.style.color = "#336699";
              e.target.style.borderColor = "#336699";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#336699";
              e.target.style.color = "white";
              e.target.style.borderColor = "#336699";
            }}
          >
            Booking Appointment
          </Link> */}

        </nav>
      </div>
    </header>
  );
};

export default Navbar;
