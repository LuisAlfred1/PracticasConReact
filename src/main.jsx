import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { UserCrud } from "./components/intermediate/UserCrud";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserCrud />
  </StrictMode>
);
