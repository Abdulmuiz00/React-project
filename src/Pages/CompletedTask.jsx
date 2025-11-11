import { useState, useEffect } from "react";

function CompletedTasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(saved.filter((t) => t.completed));
  }, []);

  return (
    <div className="min-h-[80vh] bg-gray-50 py-16 md:mt-10 mt-10 px-6">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl font-bold text-center mb-6 text-amber-900">
          Completed Tasks
        </h2>

        <p className="text-center text-gray-600 mb-8">
          Here are all the tasks you’ve successfully completed. Great job
          staying productive!
        </p>

        <hr className="border-amber-900 mb-10 mx-auto" />

        {tasks.length === 0 ? (
          <div className="text-center bg-white shadow-md rounded-2xl py-16 px-8">
            <p className="text-2xl font-semibold text-gray-600">
              No completed tasks yet.
            </p>
            <p className="text-gray-500 mt-2">
              Finish a task to see it appear here.
            </p>
          </div>
        ) : (
          <ul className="grid gap-6">
            {tasks.map((t) => (
              <li
                key={t.id}
                className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition-all duration-300 flex md:flex-row justify-between items-center md:items-center gap-4 border border-gray-200"
              >
                <div>
                  <h4 className="text-2xl font-semibold text-amber-900 mb-1">
                    {t.title}
                  </h4>
                  <p className="text-gray-700">{t.description}</p>
                </div>
                <span className="bg-amber-100 text-amber-800 text-sm font-medium px-4 py-1 rounded-full">
                  Completed
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default CompletedTasks;
