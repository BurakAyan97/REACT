import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import { useEffect, useContext } from "react";
import TaskContext from "./Context/task";

function App() {
  const { fetchTasks } = useContext(TaskContext);

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="App">
      <TaskCreate />
      <h1>Görevler</h1>
      <TaskList />
    </div>
  );
}

export default App;
