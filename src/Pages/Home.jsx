import React from "react";
import { Link } from "react-router-dom";
import task from "../assets/Task.jpg";
import addimg from "../assets/addimg.png";
import manage from "../assets/manage.jpg";
import track from "../assets/track.jpg";

function Home() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <section className="min-h-[90vh] flex md:flex-row justify-between items-center container mx-auto px-8 py-12">
        <div className="flex flex-col gap-5">
          <h1 className="text-5xl font-bold w-[60%] leading-tight">
            Welcome to{" "}
            <span className="text-amber-800">Task Manager App</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-lg">
            Organize your life effortlessly. Add, track, and manage your daily
            tasks to stay focused and productive.
          </p>
          <button className="bg-amber-900 hover:bg-amber-700 text-white px-8 py-3 rounded-lg transition duration-200 shadow-md w-fit">
            <Link to="/add">Add Your First Task</Link>
          </button>
        </div>

        <div>
          <img
            src={task}
            className="w-[500px] rounded-xl shadow-2xl hover:scale-105 transition-transform duration-300"
            alt="Task management illustration"
          />
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10 text-amber-900">
            Key Features
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-gray-100 p-8 rounded-2xl shadow hover:shadow-lg transition-all duration-300">
              <img
                src={addimg}
                alt="Add Task"
                className="w-full h-48 object-cover rounded-lg mb-5"
              />
              <h3 className="text-2xl font-semibold mb-3 text-amber-900">
                Add New Tasks
              </h3>
              <p className="text-gray-600">
                Quickly create new tasks with titles and descriptions. Never
                forget what’s next!
              </p>
            </div>

            <div className="bg-gray-100 p-8 rounded-2xl shadow hover:shadow-lg transition-all duration-300">
              <img
                src={manage}
                alt="Manage Tasks"
                className="w-full h-48 object-cover rounded-lg mb-5"
              />
              <h3 className="text-2xl font-semibold mb-3 text-amber-900">
                Manage Tasks
              </h3>
              <p className="text-gray-600">
                Edit, update, or delete tasks as your priorities change.
              </p>
            </div>

            <div className="bg-gray-100 p-8 rounded-2xl shadow hover:shadow-lg transition-all duration-300">
              <img
                src={track}
                alt="Track Progress"
                className="w-full h-48 object-cover rounded-lg mb-5"
              />
              <h3 className="text-2xl font-semibold mb-3 text-amber-900">
                Track Progress
              </h3>
              <p className="text-gray-600">
                Mark tasks as complete and stay motivated with a sense of
                achievement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
