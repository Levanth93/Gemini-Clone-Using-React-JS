import React from "react";
import ReactDOM from "react-dom/client"; // Correct import
import ContextProvider from "./context/context"; // Adjust path if needed
import App from "./App";
import './index.css';

ReactDOM.createRoot(document.getElementById("root")).render(

    <ContextProvider>
      <App />
    </ContextProvider>
);
