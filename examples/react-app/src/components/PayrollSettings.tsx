import { Link } from "react-router";
import "./PayrollSettings.css";

function PayrollSettings() {
  const actions = [
    {
      title: "Payrun",
      description:
        "Manage employee payments, set up pay runs, and ensure everyone is paid accurately and on time.",
      link: "/settings/payroll/payrun",
    },
    {
      title: "Payslips",
      description:
        "Generate and distribute payslips for your employees quickly and securely.",
      link: "/settings/payroll/payslips",
    },
    {
      title: "ATO",
      description:
        "Submit payroll and tax information directly to the Australian Taxation Office (ATO) with ease.",
      link: "/settings/payroll/ato",
    },
    {
      title: "Holidays",
      description:
        "Manage public holidays and employee leave to ensure compliance and accurate payroll.",
      link: "/settings/payroll/holidays",
    },
  ];

  return (
    <div className="settings-page container narrow">
      <div className="section-head">
        <Link
          to="/payroll"
          style={{
            transform: "rotate(180deg)",
            display: "block",
          }}
        >
          ➜{" "}
        </Link>
        <h1>Payroll Settings</h1>
      </div>
      <div className="content">
        <div className="settings-section">
          {actions.map((action) => (
            <Link
              to={`${action.link}?title=${action.title}`}
              key={action.title}
            >
              <div className="settings-item">
                <div className="card-item">
                  <h4>{action.title}</h4>
                  <p>{action.description}</p>
                </div>
                <span className="arrow">›</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
export default PayrollSettings;
