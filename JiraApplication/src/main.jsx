import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "./Context/task.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  //Tüm uygulamada geçerli olması için direkt App'i provider içine aldık.
  <Provider>
    <App />
  </Provider>
);
