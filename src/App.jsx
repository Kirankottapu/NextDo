import { useState, useEffect } from "react";
import Header from "./Header.jsx";
import TaskForm from "./TaskForm.jsx";
import TaskList from "./TaskList.jsx";
import Analytics from "./Analytics.jsx";
import Footer from "./Footer.jsx";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [filter, setFilter] = useState("all"); 
  const [darkMode, setDarkMode] = useState(false);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("taskmaster-tasks"));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("taskmaster-tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddOrUpdate = (newTask) => {
    setTasks((prevTasks) => {
      const exists = prevTasks.find((t) => t.id === newTask.id);
      return exists
        ? prevTasks.map((t) => (t.id === newTask.id ? newTask : t))
        : [...prevTasks, newTask];
    });
    setTaskToEdit(null);
  };

  const handleEdit = (task) => setTaskToEdit(task);

  const handleDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter((t) => t.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${darkMode ? "dark bg-gray-900 text-white" : "bg-white text-black"}`}>
      <Header darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />

      <main className="flex-1 w-full max-w-2xl mx-auto px-4 py-6">
        
        <TaskForm onAdd={handleAddOrUpdate} taskToEdit={taskToEdit} darkMode={darkMode}/>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-4">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded text-sm sm:text-base transition ${
              filter === "all" ? "bg-blue-600 text-white" : "bg-gray-200 dark:bg-gray-700 dark:text-white"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("completed")}
            className={`px-4 py-2 rounded text-sm sm:text-base transition ${
              filter === "completed" ? "bg-green-600 text-white" : "bg-gray-200 dark:bg-gray-700 dark:text-white"
            }`}
          >
            Completed
          </button>
          <button
            onClick={() => setFilter("pending")}
            className={`px-4 py-2 rounded text-sm sm:text-base transition ${
              filter === "pending" ? "bg-yellow-600 text-white" : "bg-gray-200 dark:bg-gray-700 dark:text-white"
            }`}
          >
            Pending
          </button>
        </div>

        <TaskList
          tasks={filteredTasks}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onToggle={toggleComplete}
        />
      </main>
      <Analytics tasks={filteredTasks} darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}


export default App;