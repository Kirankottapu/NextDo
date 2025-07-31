import { useState, useEffect } from "react";

function TaskForm({ onAdd, taskToEdit, darkMode }) {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title || "");
      setDueDate(taskToEdit.dueDate || "");
    } else {
      setTitle("");
      setDueDate("");
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedTitle = title.trim();
    if (!trimmedTitle) return;

    const newTask = {
      id: taskToEdit ? taskToEdit.id : Date.now(),
      title: trimmedTitle,
      dueDate,
      completed: taskToEdit ? taskToEdit.completed : false,
    };

    onAdd(newTask);
    setTitle("");
    setDueDate("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`space-y-4 p-6 sm:p-8 border rounded-2xl shadow-2xl transition-all duration-300 ${
        darkMode
          ? "bg-gray-900 text-white border-gray-700"
          : "bg-white text-gray-800 border-gray-200"
      }`}
    >
      <h2 className="text-xl font-semibold text-center">
        {taskToEdit ? "Edit Task" : "Add a New Task"}
      </h2>

      <div className="flex flex-col gap-2">
        <label htmlFor="title" className="text-sm font-medium">
          Task Title
        </label>
        <input
          id="title"
          type="text"
          value={title}
          placeholder="Enter your task"
          onChange={(e) => setTitle(e.target.value)}
          className={`w-full px-4 py-2 text-sm rounded-lg border outline-none focus:ring-2 focus:ring-blue-500 ${
            darkMode
              ? "bg-gray-800 text-white border-gray-600"
              : "bg-gray-100 border-gray-300"
          }`}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="dueDate" className="text-sm font-medium">
          Due Date
        </label>
        <input
          id="dueDate"
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className={`w-full px-4 py-2 text-sm rounded-lg border outline-none focus:ring-2 focus:ring-blue-500 ${
            darkMode
              ? "bg-gray-800 text-white border-gray-600"
              : "bg-gray-100 border-gray-300"
          }`}
        />
      </div>

      <button
        type="submit"
        className="w-full mt-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all"
      >
        {taskToEdit ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
}

export default TaskForm;
