import React from "react";
import { Link } from "react-router-dom";
import task from "../assets/Task.jpg";

function Home() {
  return (
    <div className="h-[90vh] flex justify-between items-center container mx-auto px-8">
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl font-bold">Welcome to Task Manager App</h1>
        <p>Use this app to add, view, and manage your daily tasks.</p>
        <button className="bg-amber-900 text-white px-6 py-2 rounded hover:bg-amber-700 w-fit">
          <Link to="/add">Add Task</Link>
        </button>
      </div>

      <div>
        <img src={task} className="w-[500px] rounded-lg shadow-lg cursor-pointer" alt="Task illustration"/>
      </div>
    </div>
  );
}

export default Home;
