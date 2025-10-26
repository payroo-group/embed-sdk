import { Await, Link } from "react-router";
import { EmbedContainer } from "@payroo-group/embed-sdk-react";
import { getEmbedUrl } from "../../embed";  
import { Components } from "@payroo-group/embed-sdk";
import { Suspense, useMemo } from "react";

function PayrollSummary() {
  const url = useMemo(() => {
    return getEmbedUrl(Components.VIEW_REPORT, { reportType: "summary" });
  }, []);

  return (
    <div className="container">
      <div className="section-head" style={{ maxWidth: 620 }}>
        <Link
          to="/payroll"
          style={{
            transform: "rotate(180deg)",
            display: "block",
          }}
        >
          ➜{" "}
        </Link>
        <h2>Payroll Summary</h2>
      </div>
      <Suspense fallback={<div className="embed-loading">Loading...</div>}>
        <Await resolve={url}>
          {(url) => (
            <EmbedContainer
              url={url}
              id="payroll-summary"
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

export default PayrollSummary;
