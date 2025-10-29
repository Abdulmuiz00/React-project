import { useState } from "react";
import { Link } from "react-router-dom";

function AddTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (!title.trim()) return alert("Title is required");

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
    <div className="h-[90vh] flex flex-col justify-center items-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-[700px] h-[700px]:  mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-amber-900">
          Add a New Task
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
          <input
            type="text"
            placeholder="Task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-amber-700"
          />

          <textarea
            placeholder="Task description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-amber-700"
          />

          <div className="flex gap-2">
          <button
            type="submit"
            className="bg-amber-900 text-white py-2 w-[50%] rounded-md hover:bg-amber-700 transition duration-200">
            Add Task
          </button>
          <button className="bg-amber-900 text-white w-[50%] py-2 rounded-md hover:bg-amber-700 transition duration-200">
            <Link to="/all">Check Tasks</Link>
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
