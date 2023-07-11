import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

function Navbar() {
  // Define a state variable 'toggle' and a function to update it 'setToggle'
  const [toggle, setToggle] = useState(false);

  return (
    // Navigation bar component
    <nav className="w-full py-6 flex justify-between items-center navbar ">
      {/* // Logo */}
      <img className="w-[124px] h-[32px]" src={logo} alt="logo" />
      // List of navigation links (visible on larger screens)
      <ul className="hidden sm:flex space-x-10 items-center">
        {navLinks.map((nav) => (
          // Individual navigation link item
          <li
            key={nav.id}
            className="font-poppins cursor-pointer text-[16px] text-white"
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      {/* // Mobile menu toggle button and sidebar */}
      <div className="flex sm:hidden">
        {/* // Toggle button image (changes between 'close' and 'menu' icons) */}
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px]"
          onClick={() => setToggle((prev) => !prev)} // Click event to toggle 'toggle' state
        />
        {/* // Sidebar (visible when toggle is true) */}
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          {/* // List of navigation links in the sidebar */}
          <ul className="flex flex-col justify-end items-center flex-1 space-y-6">
            {navLinks.map((nav) => (
              // Individual navigation link item
              <li
                key={nav.id}
                className="font-poppins font-normal cursor-pointer text-[16px] text-white"
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
