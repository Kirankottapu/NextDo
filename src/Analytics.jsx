import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const StatCard = ({ label, value, darkMode }) => (
  <div
    className={`rounded-xl p-4 shadow-md transition-all duration-300 ${
      darkMode
        ? "bg-gray-800 text-white hover:bg-gray-700"
        : "bg-gray-200 text-gray-900 hover:bg-gray-50"
    }`}
  >
    <p className={`text-sm sm:text-base mb-1 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
      {label}
    </p>
    <h3 className="text-lg sm:text-xl font-bold">{value}</h3>
  </div>
);


const Analytics = ({ tasks, darkMode }) => {
  const total = tasks.length;
  const completed = tasks.filter((task) => task.completed).length;
  const pending = total - completed;
  const today = new Date().toISOString().split("T")[0];
  const dueToday = tasks.filter(
    (task) => !task.completed && task.dueDate === today
  ).length;
  const completionRate =
    total === 0 ? 0 : Math.round((completed / total) * 100);

  const barData = [
    { name: "Completed", value: completed },
    { name: "Pending", value: pending },
    { name: "Due Today", value: dueToday },
  ];

  return (
    <div
      className={`p-6 rounded-2xl shadow-lg border transition-all duration-300 ${
        darkMode
          ? "bg-gray-900 text-white border-gray-700"
          : "bg-white text-gray-800 border-gray-200"
      }`}
    >
      <h2 className="text-xl sm:text-2xl font-bold mb-6">📊 Task Analytics</h2>
      
      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center mb-8">
        <StatCard label="Total" value={total} darkMode={darkMode} />
        <StatCard label="Completed" value={completed} darkMode={darkMode} />
        <StatCard label="Pending" value={pending} darkMode={darkMode} />
        <StatCard label="Due Today" value={dueToday} darkMode={darkMode} />
        <StatCard label="Completion %" value={`${completionRate}%`} darkMode={darkMode} />
      </div>

      {/* Bar Chart */}
      <div className="h-100 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke={darkMode ? "#ddd" : "#333"} />
            <YAxis allowDecimals={false} stroke={darkMode ? "#ddd" : "#333"} />
            <Tooltip />
            <Bar dataKey="value" fill={darkMode ? "#60a5fa" : "#4f46e5"} radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
export default Analytics;