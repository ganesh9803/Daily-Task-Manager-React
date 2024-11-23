import { useState, useEffect } from "react";
import AddTaskForm from "./components/AddTaskForm";
import TaskTable from "./components/TaskTable";

function App() {
  const [tasks, setTasks] = useState([]);
  const [showAddTaskForm, setShowAddTaskForm] = useState(false); // State to toggle AddTaskForm

  // Load tasks from localStorage on mount
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  // Save tasks to localStorage on change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => setTasks([...tasks, task]);
  const updateTask = (updatedTask) =>
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));

  return (
    <div className="text-center min-h-screen p-4 bg-gray-100">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-center text-2xl font-bold mb-4">
          Daily Tasks
        </h1>

        {/* Button to toggle AddTaskForm */}
        <button
          onClick={() => setShowAddTaskForm(!showAddTaskForm)}
          className="mb-6 bg-blue-500 text-white py-2 px-4 rounded-lg font-medium shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
        >
          {showAddTaskForm ? "Close Add Task Form" : "Add New Task"}
        </button>

        {/* Conditionally display AddTaskForm */}
        {showAddTaskForm && (
          <div className="transition duration-300">
            <AddTaskForm addTask={addTask} />
          </div>
        )}

        {/* Task Table */}
        <TaskTable
          tasks={tasks}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
}

export default App;
