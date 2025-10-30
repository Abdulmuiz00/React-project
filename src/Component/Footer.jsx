import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-amber-900 text-white mt-0 h-auto border-t border-amber-800">
      <div className="container mx-auto px-8 py-8 flex flex-col gap-6">
        {/* Top Section */}
        <div className="flex flex-col text-center">
          <h2 className="text-4xl font-bold mb-4">Stay Productive Every Day</h2>
          <p className="text-lg text-amber-100 max-w-2xl mx-auto mb-6">
            Whether it’s work, study, or personal goals, Task Manager App helps
            you focus on what matters most.
          </p>
          <button className="bg-white text-amber-900 font-semibold  py-3 rounded-lg hover:bg-amber-100 transition w-[30%] sm:w-[30%] md:w-[20%] mx-auto">
            <Link to="/tasks">View All Tasks</Link>
          </button>
        </div>

        <div className="py-4 flex md:flex-row justify-between items-center gap-4 border-t border-amber-800">
          <h2 className="text-lg font-semibold">
            Task Manager App © {new Date().getFullYear()}
          </h2>

          <div className="flex gap-6 text-sm">
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

          <p className="text-xs text-amber-200">Built by Dev Abduluiz</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
