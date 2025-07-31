const TaskList = ({ tasks, onEdit, onDelete, onToggle }) => {
  return (
    <div className="space-y-6 mt-6">
      {tasks.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-400 text-center">No tasks yet. Add one!</p>
      ) : (
        tasks.map((task) => (
          <div
            key={task.id}
            className={`p-4 rounded-xl shadow-md flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 transition-all duration-300 ${
              task.completed
                ? "bg-green-100 dark:bg-green-900"
                : "bg-yellow-100 dark:bg-yellow-900"
            }`}
          >
            <div className="w-full sm:w-auto">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100">
                {task.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                Due: {task.dueDate || "Not set"}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 justify-end w-full sm:w-auto cursor-pointer">
              <button
                onClick={() => onToggle(task.id)}
                className={`text-sm px-3 py-1 font-medium rounded-lg transition cursor-pointer ${
                  task.completed
                    ? "bg-gray-600 hover:bg-gray-700 text-white"
                    : "bg-purple-600 hover:bg-purple-700 text-white"
                }`}
              >
                {task.completed ? "Undo" : "Mark Done"}
              </button>

              <button
                onClick={() => onEdit(task)}
                className="text-sm px-3 py-1 font-medium rounded-lg bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
              >
                ✏️ Edit
              </button>

              <button
                onClick={() => onDelete(task.id)}
                className="text-sm px-3 py-1 font-medium rounded-lg bg-red-600 hover:bg-red-700 text-white cursor-pointer"
              >
                🗑️ Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;
