import { useState } from "react";
import EditTaskModal from "./EditTaskModal";

function TaskTable({ tasks, updateTask, deleteTask }) {
  const [selectedTask, setSelectedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const openEditModal = (task) => {
    setSelectedTask(task);
    setIsEditing(true);
  };

  const closeEditModal = () => {
    setSelectedTask(null);
    setIsEditing(false);
  };

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg overflow-x-auto">
      <table className="table-auto w-full border-collapse text-sm sm:text-base">
        <thead>
          <tr className="w-full bg-gray-100 text-xs sm:text-sm font-semibold">
            <th className="border px-2 py-2 text-left">Title</th>
            <th className="border px-2 py-2 text-left">Description</th>
            <th className="border px-2 py-2 text-left">Due Date</th>
            <th className="border px-2 py-2 text-left">Status</th>
            <th className="border px-2 py-2 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <tr key={task.id} className="hover:bg-gray-50 text-sm">
                <td className="border px-4 py-2">{task.title}</td>
                <td className="border px-4 py-2">{task.description}</td>
                <td className="border px-4 py-2">{task.dueDate}</td>
                <td
                  className={`border px-4 py-2 ${
                    task.status === "Completed"
                      ? "text-green-500 font-semibold"
                      : task.status === "In Progress"
                      ? "text-blue-500 font-semibold"
                      : "text-gray-500 font-semibold"
                  }`}
                >
                  {task.status}
                </td>
                <td className="border px-4 py-2 text-center">
                  <button
                    onClick={() => openEditModal(task)}
                    className="bg-blue-500 text-white px-2 sm:px-3 py-1 rounded mr-2 hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() =>
                      window.confirm(
                        "Are you sure you want to delete this task?"
                      ) && deleteTask(task.id)
                    }
                    className="bg-red-500 text-white px-2 sm:px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center py-4 text-gray-500">
                No tasks available
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {isEditing && (
        <EditTaskModal
          task={selectedTask}
          updateTask={updateTask}
          closeModal={closeEditModal}
        />
      )}
    </div>
  );
}

export default TaskTable;
