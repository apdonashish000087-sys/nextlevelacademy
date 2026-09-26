// components/Navbar.js
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="sticky top-0 z-20 border-b border-slate-800/80 bg-slate-950/95 px-4 py-4 backdrop-blur sm:px-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* Hamburger Menu Button (Visible on Small Screens) */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none p-2 rounded-md hover:bg-gray-700 transition-colors duration-200"
          >
            {isOpen ? (
              <AiOutlineClose size={24} />
            ) : (
              <GiHamburgerMenu size={24} />
            )}
          </button>
          {/* Logo Title (Visible on Small Screens) */}
          <Link
            href="/"
            className={`text-xl text-white font-extrabold ml-2 ${
              isOpen ? "hidden" : "block"
            }`}
          >
            <span className="">Next</span>
            <span className="ml-1">Level</span>
            <span className="ml-1 ">Academy</span>
          </Link>
        </div>

        {/* Logo Title (Visible on Larger Screens) */}
        <Link
          href="/"
          className="hidden text-xl font-extrabold tracking-tight text-white transition-colors hover:text-cyan-300 md:block"
        >
          <span className="">Next</span>
          <span className="ml-1">Level</span>
          <span className="ml-1 ">Academy</span>
        </Link>

        {/* Navigation Links (Hidden on Small Screens) */}
        <div
          className={`md:flex space-x-8 transition-all duration-300 items-center ${
            isOpen
              ? "flex flex-col mt-4 space-y-2 w-full items-center border-t border-gray-700 pt-2"
              : "hidden "
          } md:space-y-0 md:mt-0 md:block`}
        >
          <Link
            href="/"
            className="block w-full rounded-lg px-4 py-2 text-center text-base font-semibold text-slate-300 transition-colors duration-200 hover:bg-slate-800 hover:text-cyan-300 md:hidden"
          >
            Home
          </Link>
          <Link
            href="/saved-prompts"
            className="block w-auto rounded-lg px-4 py-2 text-center text-sm font-semibold text-slate-300 transition-colors duration-200 hover:bg-slate-800 hover:text-cyan-300 md:inline-block"
          >
            Saved Prompts
          </Link>
          <Link
            href="/add-prompt"
            className="block w-auto rounded-lg px-4 py-2 text-center text-sm font-semibold text-slate-300 transition-colors duration-200 hover:bg-slate-800 hover:text-cyan-300 md:inline-block"
          >
            Add New Prompt
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
