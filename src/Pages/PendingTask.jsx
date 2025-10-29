import { useState, useEffect } from "react";

export default function PendingTasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(saved.filter((t) => !t.completed));
  }, []);

  return (
    <div className="container mx-auto py-5">
      <h2 className="text-4xl font-bold mb-3">Pending Tasks</h2><hr />
      {tasks.length === 0 ? <p className="my-4 text-3xl">No pending tasks.</p> : (
        <ul className="my-5">
          {tasks.map((t) => (
            <li key={t.id} className="p-5 bg-gray-300  my-4 rounded-4xl flex items-center gap-6">
              <h4 className="text-2xl font-semibold">Title: {t.title}</h4>
              <p className="font-semibold">Content: {t.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
