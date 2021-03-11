import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "./ThemeContext";
import { TaskProvider } from "./TaskContext";
ReactDOM.render(
  <React.StrictMode>
    <TaskProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </TaskProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
