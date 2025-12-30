import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { CrudMain } from "./components/CRUD/CrudMain";
import { Login } from "./components/intermediate/Login";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Login />
  </StrictMode>
);
