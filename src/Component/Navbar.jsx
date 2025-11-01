import { MenuIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex lg:px-15 md:px-9 py-3 px-3 top-0 bg-amber-900 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="font-bold text-4xl">Task Manager</h1>
        <div className="flex gap-5 justify-between">
          <Link to="/" className="text-[20px] md:hidden lg:block">
            Home
          </Link>
          <Link to="/add" className="text-[20px] md:hidden hidden lg:block ">Add Task</Link>
          <Link to="/all" className="text-[20px] md:hidden hidden lg:block">All Tasks</Link>
          <Link to="/completed" className="text-[20px] md:hidden hidden lg:block">Completed</Link>
          <Link to="/pending" className="text-[20px] md:hidden hidden lg:block">Pending</Link>
          <button className="md:block lg:hidden "><MenuIcon /></button>
        </div>
      </div>
    </nav>
  );
}
