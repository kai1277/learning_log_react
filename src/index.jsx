import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LearningLog } from "./LearningLog";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <LearningLog />
  </StrictMode>
);
