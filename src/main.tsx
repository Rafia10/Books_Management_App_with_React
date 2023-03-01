import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "./Context/books";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider>
      {" "}
      <App />
    </Provider>
  </React.StrictMode>
);
