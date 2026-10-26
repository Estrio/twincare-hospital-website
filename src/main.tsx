import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import DepartmentPage from "./DepartmentPage";
import ScrollToTop from "./ScrollToTop";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/departments/:slug"
          element={<DepartmentPage />}
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);