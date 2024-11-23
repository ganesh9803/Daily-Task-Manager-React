import { useState, useEffect } from "react";
import AddTaskForm from "./components/AddTaskForm";
import TaskTable from "./components/TaskTable";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

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
        <h1 className="text-center text-xl sm:text-2xl font-bold mb-4">
          Daily Tasks
        </h1>
        <AddTaskForm addTask={addTask} />
        <h1 className="text-4xl">Task Table</h1>
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
