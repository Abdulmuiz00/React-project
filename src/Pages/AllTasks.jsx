import { Trash2Icon, CheckCircle2, Clock3, File } from "lucide-react";
import { useState, useEffect } from "react";

function AllTasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(saved);
  }, []);

  const toggleStatus = (id) => {
    const updated = tasks.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
  };

  const deleteTask = (id) => {
    const updated = tasks.filter((t) => t.id !== id);
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
  };

  return (
    <div className="bg-white min-h-[90vh] py-10 md:mt-20 mt-13">
      <div className="container mx-auto px-4 sm:px-8 relative">
        <h2 className="text-4xl font-bold mb-6 text-center text-amber-900 relative">
          <File
            size={40}
            className="absolute lg:left-[42%] left-[25%] md:left-[36%]  transform -translate-x-1/2 text-amber-900"
          />
          All Tasks
        </h2>

        <hr className="border-gray-300 mb-8" />

        {tasks.length === 0 ? (
          <p className="text-center text-2xl text-gray-500 font-medium py-10">
            No tasks found. Create some tasks to get started!
          </p>
        ) : (
          <ul className="space-y-5">
            {tasks.map((t) => (
              <li
                key={t.id}
                className="flex sm:flex-row sm:items-center justify-between bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200"
              >
                <div>
                  <h4 className="text-2xl font-semibold text-amber-900">
                    {t.title}
                  </h4>
                  <p className="text-gray-600 mt-1">{t.description}</p>
                </div>

                <div className="flex items-center gap-4 mt-4 sm:mt-0">
                  <span
                    className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                      t.completed
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {t.completed ? (
                      <>
                        <CheckCircle2 className="w-4 h-4" /> Completed
                      </>
                    ) : (
                      <>
                        <Clock3 className="w-4 h-4" /> Pending
                      </>
                    )}
                  </span>

                  <button
                    onClick={() => toggleStatus(t.id)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-200"
                  >
                    Change Status
                  </button>

                  <button
                    onClick={() => deleteTask(t.id)}
                    className="text-red-500 hover:text-red-700 p-2 rounded-lg transition"
                    title="Delete Task"
                  >
                    <Trash2Icon className="w-5 h-5" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default AllTasks;
