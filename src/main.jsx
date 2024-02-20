// Importem les llibreries necessàries de React
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"; // Importem el component principal de l'aplicació

// Renderitzem l'aplicació a la plana HTML
ReactDOM.createRoot(document.getElementById("root")).render(
  // Utilitzem React.StrictMode per a detectar problemes potencials a l'aplicació
  <React.StrictMode>
    {/* Renderitzem el component principal de l'aplicació */}
    <App />
  </React.StrictMode>
);
