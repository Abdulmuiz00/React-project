import { useState } from "react";
import { Link } from "react-router-dom";

function AddTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      title,
      description,
      completed: false,
    };

    const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    localStorage.setItem("tasks", JSON.stringify([newTask, ...existingTasks]));

    setTitle("");
    setDescription("");
    alert("Task added!");
  };

  return (
    <div className="min-h-[90vh] flex flex-col justify-center items-center bg-gray-50 px-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-amber-900">
          Add a New Task
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-amber-700 transition-colors duration-200"
          />

          <textarea
            placeholder="Task description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-amber-700 transition-colors duration-200"
          />

          <div className="flex gap-3 mt-2">
            <button
              type="submit"
              className="bg-amber-900 hover:bg-amber-700 text-white py-2 w-1/2 rounded-md transition-all duration-200"
            >
              Add Task
            </button>

            <Link
              to="/all"
              className="bg-transparent border border-amber-900 hover:bg-amber-900 text-amber-900 hover:text-white py-2 w-1/2 rounded-md text-center transition-all duration-200"
            >
              Check Tasks
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTask;
