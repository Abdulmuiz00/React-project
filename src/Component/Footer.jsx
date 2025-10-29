import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-amber-900 text-white mt-10">
      <div className="container mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
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

        <p className="text-xs text-amber-200">
          Built by Dev Abduluiz
        </p>
      </div>
    </footer>
  );
}

export default Footer;
