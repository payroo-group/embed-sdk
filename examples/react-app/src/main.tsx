import { StrictMode } from "react";
import "./index.css";
import Home from "./Home.tsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import PayrollSettings from "./components/PayrollSettings.tsx";
import Layout from "./components/Layout.tsx";
import Payroll from "./components/Payroll.tsx";
import Calendar from "./components/Calendar.tsx";
import Employees from "./components/Employees.tsx";
import CreatePayrun from "./components/CreatePayrun.tsx";
import Reports from "./components/Reports.tsx";
import PayrunSettings from "./components/Settings/PayrunSettings.tsx";
import ATOSettings from "./components/Settings/ATOSettings.tsx";
import HolidaySettings from "./components/Settings/HolidaySettings.tsx";
import PayslipSettings from "./components/Settings/PayslipSettings.tsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root as any).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/payruns" element={<Payroll />} />
          <Route path="/payruns/new" element={<CreatePayrun />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<PayrollSettings />} />
          <Route path="/settings" element={<PayrollSettings />} />
          <Route path="/settings/payroll/payrun" element={<PayrunSettings />} />
          <Route path="/settings/payroll/ato" element={<ATOSettings />} />
          <Route path="/settings/payroll/payslips" element={<PayslipSettings />} />
          <Route path="/settings/payroll/holidays" element={<HolidaySettings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
