import { PayrunList } from "@payroo-group/embed-sdk-react";
import { Link } from "react-router";
import check from "../assets/check.svg";
import payrun from "../assets/payrun.svg";
import "./Payroll.css";
import { getEmbedUrl } from "../embed";

function Payroll() {
  const actions = [
    {
      title: "Create New Payrun",
      icon: <img src={payrun} />,
      link: "/payruns/new",
    },
    {
      title: "Generate Reports",
      icon: <img src={check} />,
      link: "/reports",
    },
  ];
  return (
    <div className="container payroll-container">
      <PayrunList
        getEmbedUrl={getEmbedUrl}
        showFilter
        showCreateButton
        showStatSummary
        options={{
          autoHeightAdjust: true,
          extraAllowedOrigins: [
            "http://localhost:5173",
            "https://sandbox-embed.payroo.com.au",
          ],
        }}
      />
      <div className="action-container">
        <div className="action-grid">
          {actions.map((action) => (
            <Link to={action.link}>
              <div className="action-card" key={action.title}>
                <div className="action-content">
                  <div className="icon-box">{action.icon}</div>
                  <span className="action-title">{action.title}</span>
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
export default Payroll;
