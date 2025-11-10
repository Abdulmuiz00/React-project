import React, { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-amber-900 text-white fixed w-full top-0 left-0 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center px-7 py-4">
        <h1 className="font-bold text-2xl md:text-3xl">Task Manager</h1>

        {/* Desktop Links */}
        <div className="hidden md:hidden lg:flex gap-6 text-lg">
          <Link to="/" className="hover:text-yellow-300">Home</Link>
          <Link to="/add" className="hover:text-yellow-300">Add Task</Link>
          <Link to="/all" className="hover:text-yellow-300">All Tasks</Link>
          <Link to="/completed" className="hover:text-yellow-300">Completed</Link>
          <Link to="/pending" className="hover:text-yellow-300">Pending</Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          className="lg:hidden focus:outline-none p-2"
        >
          {isOpen ? <XIcon size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden bg-amber-800 text-white flex flex-col items-center space-y-4 py-6">
          <Link to="/" onClick={closeMenu} className="hover:text-yellow-300 text-lg">Home</Link>
          <Link to="/add" onClick={closeMenu} className="hover:text-yellow-300 text-lg">Add Task</Link>
          <Link to="/all" onClick={closeMenu} className="hover:text-yellow-300 text-lg">All Tasks</Link>
          <Link to="/completed" onClick={closeMenu} className="hover:text-yellow-300 text-lg">Completed</Link>
          <Link to="/pending" onClick={closeMenu} className="hover:text-yellow-300 text-lg">Pending</Link>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
