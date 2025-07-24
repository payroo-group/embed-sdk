import { EmbedContainer } from "@payroo-group/embed-sdk-react";
import { Suspense, useMemo } from "react";
import { Await, Link } from "react-router";
import { Components } from "@payroo-group/embed-sdk";
import { getEmbedUrl } from "../embed";

function Employees() {
  const url = useMemo(() => {
    return getEmbedUrl(Components.EMPLOYEE_LIST);
  }, []);
  return (
    <div className="container">
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
        <h2>Employees</h2>
      </div>
      <Suspense fallback={<div className="embed-loading">Loading...</div>}>
        <Await resolve={url}>
          {(url) => (
            <EmbedContainer
              url={url}
              id="create-payrun"
              options={{
                autoHeightAdjust: true,
                extraAllowedOrigins: [
                  "http://localhost:5700",
                  "https://sandbox-embed.payroo.com.au",
                ],
              }}
            />
          )}
        </Await>
      </Suspense>
    </div>
  );
}
export default Employees;
