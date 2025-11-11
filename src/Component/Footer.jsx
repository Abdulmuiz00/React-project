import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-amber-900 text-white mt-0 h-auto border-t border-amber-800">
      <div className="container mx-auto px-8 py-8 flex flex-col gap-6">

        <div className="flex flex-col text-start lg:text-center md:text-center">
          <h2 className="text-4xl font-bold mb-4">Stay Productive Every Day</h2>
          <p className="text-lg text-amber-100 max-w-2xl mx-auto mb-6">
            Whether it’s work, study, or personal goals, Task Manager App helps
            you focus on what matters most.
          </p>
          <button className="bg-white text-amber-900 font-semibold  py-3 rounded-lg hover:bg-amber-100 transition  w-[40%]  md:w-[20%] me-auto md:mx-auto lg:mx-auto">
            <Link to="/all">View All Tasks</Link>
          </button>
        </div>

        <div className="py-4 flex flex-col md:flex-col lg:flex-row justify-between items-center gap-4 border-t border-amber-800">
          <h2 className="text-lg me-auto lg:my-auto md:mx-[16px] md:text-2xl font-semibold">
            Task Manager App © {new Date().getFullYear()}
          </h2>

          <div className="flex flex-col lg:flex-row md:flex-row me-auto lg:my-auto md:mx-auto gap-6 md:text-[16px] text-[15px]    ">
            <Link to="/" className="hover:text-amber-300 transition">
              Home
            </Link>
            <Link to="/add" className="hover:text-amber-300 transition">
              Add Task
            </Link>
            <Link to="/all" className="hover:text-amber-300 transition">
              All Tasks
            </Link>
            <Link to="/pending" className="hover:text-amber-300 transition">
              Pending Tasks
            </Link>
            <Link to="/completed" className="hover:text-amber-300 transition">
              Completed Tasks
            </Link>
          </div>

          <p className="text-xs me-auto lg:my-auto md:mx-auto md:text-[15px] text-[15px] text-amber-200">Built by Dev Abduluiz</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
