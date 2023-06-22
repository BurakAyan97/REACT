import React from "react";
import axios from "axios";
import { useState } from "react";

const TaskContext = React.createContext();

function Provider({ children }) {
  const [tasks, setTasks] = useState([]);

  const createTask = async (title, taskDesc) => {
    const response = await axios.post("http://localhost:3000/tasks", {
      title,
      taskDesc,
    });
    console.log(response);
    const createdTasks = [...tasks, response.data]; //Tasks içine yeni eklediğimiz taskları ekliyoruz.
    setTasks(createdTasks);
  };

  const fetchTasks = async () => {
    const response = await axios.get("http://localhost:3000/tasks");
    setTasks(response.data);
  };

  const deleteTaskById = async (id) => {
    await axios.delete(`http://localhost:3000/tasks/${id}`);
    const afterDeletingTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(afterDeletingTasks);
  };

  const editTaskById = async (id, updatedTitle, updatedTaskDesc) => {
    await axios.put(`http://localhost:3000/tasks/${id}`, {
      title: updatedTitle,
      taskDesc: updatedTaskDesc,
    });
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { id, title: updatedTitle, taskDesc: updatedTaskDesc };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const sharedValuesAndMethods = {
    tasks,
    createTask,
    fetchTasks,
    editTaskById,
    deleteTaskById,
  };
  return (
    <TaskContext.Provider value={sharedValuesAndMethods}>
      {children}
    </TaskContext.Provider>
  );
}
export { Provider };
export default TaskContext;
