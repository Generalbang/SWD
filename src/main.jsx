import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
/* import './index.css' */
import App from "./App.jsx";
import { SWDProvider } from "./context/Context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SWDProvider>
      <App />
    </SWDProvider>
  </StrictMode>
);
