import { ToggleLeft, Trash2Icon } from "lucide-react";
import { useState, useEffect } from "react";
import { BsToggles } from "react-icons/bs";

export default function AllTasks() {
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
    <div className="container mx-auto py-5">
      <h2 className="text-4xl font-bold mb-3">All Tasks</h2><hr />
      {tasks.length === 0 ? (
        <p className="py-4 text-3xl">No tasks found.</p>
      ) : (
        <ul>
          {tasks.map((t) => (
            <li className="p-5 bg-gray-300 my-4 rounded-4xl flex items-center gap-6" key={t.id}>
              <h4 className="text-2xl font-semibold">Title: {t.title}</h4>
              <p className="font-semibold">{t.description}</p>
              <div className="ms-auto flex w-[300px] justify-between">
              <p className="my-auto">{t.completed ? "✅ Completed" : "⏳ Pending"}</p>
              <button onClick={() => toggleStatus(t.id)} className="bg-green-500 text-white p-2 rounded-3xl">Change Status</button>
              <button onClick={() => deleteTask(t.id)}><Trash2Icon/></button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
