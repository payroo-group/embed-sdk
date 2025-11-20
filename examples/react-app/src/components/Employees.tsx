import { CreateEmployee, EmployeeList } from "@payroo-group/embed-sdk-react";
import { Link } from "react-router";
import { getEmbedUrl } from "../embed";

function Employees() {

  return (
    <div className="container">
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
        <h2>Employees</h2>
      </div>


      <EmployeeList
        status="Active"
        getEmbedUrl={getEmbedUrl}
        showFilter={true}
        params={{
          status: "Active",
        }}
        options={{
          autoHeightAdjust: true,
          extraAllowedOrigins: [
            "http://localhost:5700",
            "https://sandbox-embed.payroo.com.au",
          ],
        }}
      />

      <CreateEmployee
        getEmbedUrl={getEmbedUrl}
        options={{
          autoHeightAdjust: true,
          extraAllowedOrigins: [
            "http://localhost:5700",
            "https://sandbox-embed.payroo.com.au",
          ],
        }}
        onSuccess={({ employeeId }) => {
          alert(`Employee created successfully! ID: ${employeeId}`);
        }}
      />
    </div>
  );
}
export default Employees;
