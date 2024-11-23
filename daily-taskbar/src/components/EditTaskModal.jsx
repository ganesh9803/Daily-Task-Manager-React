import { useState } from "react";

function EditTaskModal({ task, updateTask, closeModal }) {
  const [editedTask, setEditedTask] = useState(task);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask({ ...editedTask, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask(editedTask);
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow w-96">
        <h2 className="text-xl font-bold mb-4">Edit Task</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="block text-sm font-bold">Title</label>
            <input
              type="text"
              name="title"
              value={editedTask.title}
              onChange={handleChange}
              className="w-full border rounded p-2"
              required
            />
          </div>
          <div className="mb-3">
            <label className="block text-sm font-bold">Description</label>
            <textarea
              name="description"
              value={editedTask.description}
              onChange={handleChange}
              className="w-full border rounded p-2"
              required
            />
          </div>
          <div className="mb-3">
            <label className="block text-sm font-bold">Due Date</label>
            <input
              type="date"
              name="dueDate"
              value={editedTask.dueDate}
              onChange={handleChange}
              className="w-full border rounded p-2"
              required
            />
          </div>
          <div className="mb-3">
            <label className="block text-sm font-bold">Status</label>
            <select
              name="status"
              value={editedTask.status}
              onChange={handleChange}
              className="w-full border rounded p-2"
            >
              <option>Pending</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={closeModal}
              className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditTaskModal;
