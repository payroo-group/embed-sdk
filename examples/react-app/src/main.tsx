import { StrictMode } from "react";
import "./index.css";
import Home from "./Home.tsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import PayrollSettings from "./components/PayrollSettings.tsx";
import Layout from "./components/Layout.tsx";
import Payroll from "./components/Payroll.tsx";
import Employees from "./components/Employees.tsx";
import CreatePayrun from "./components/CreatePayrun.tsx";
import Reports from "./components/Reports.tsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root as any).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/payruns" element={<Payroll />} />
          <Route path="/payruns/new" element={<CreatePayrun />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<PayrollSettings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
