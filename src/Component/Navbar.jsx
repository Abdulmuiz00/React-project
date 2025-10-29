import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex p-5 top-0 bg-amber-900 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="font-bold text-4xl">Task Manager</h1>
        <div className="flex gap-5 justify-between">
          <Link to="/" className="text-[20px]">
            Home
          </Link>
          <Link to="/add" className="text-[20px]">Add Task</Link>
          <Link to="/all" className="text-[20px]">All Tasks</Link>
          <Link to="/completed" className="text-[20px]">Completed</Link>
          <Link to="/pending" className="text-[20px]">Pending</Link>
        </div>
      </div>
    </nav>
  );
}
