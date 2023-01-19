import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ApiDataProvider } from "./context/getUserContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApiDataProvider>
      <App />
    </ApiDataProvider>
  </React.StrictMode>
);
