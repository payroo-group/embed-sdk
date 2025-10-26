import { Link } from "react-router";

const reports = [
  {
    name: "Payroll Summary",
    path: "/reports/summary",
    description:
      "View a summary of payroll expenses, including total wages, taxes, deductions, and benefits for each employee.",
  },
  {
    name: "Payroll Variance",
    path: "/reports/variance",
    description:
      "Analyze differences between expected and actual payroll amounts to identify discrepancies or trends over time.",
  },
  {
    name: "Finalizations",
    path: "/reports/finalisations",
    description:
      "Review and download finalized payroll reports, including summaries and detailed breakdowns for each pay period.",
  },
  {
    name: "Leave Balances",
    path: "/reports/leaves",
    description:
      "Access up-to-date leave balances for all employees, including annual, sick, and other leave types.",
  },
  {
    name: "Super Contributions",
    path: "/reports/super",
    description:
      "View reports on superannuation contributions made for employees to help track payments and compliance.",
  },
];

export default function Reports() {
  return (
    <div className="settings-page container narrow">
      <div className="section-head">
        <Link
          to="/payruns"
          style={{
            transform: "rotate(180deg)",
            display: "block",
          }}
        >
          ➜{" "}
        </Link>
        <h1>Generate Reports</h1>
      </div>
      <div className="settings-section content">
        {reports.map((report) => (
          <Link to={`${report.path}?title=${report.name}`} key={report.path}>
            <div className="card-tall">
              <div className="items">
                <h4>{report.name}</h4>
                <p>{report.description}</p>
              </div>
              <span className="arrow">›</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
