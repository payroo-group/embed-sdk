import { Components } from "@payroo-group/embed-sdk";
import { EmbedContainer } from "@payroo-group/embed-sdk-react";
import { useMemo, Suspense } from "react";
import { Await, Link } from "react-router";
import { getEmbedUrl } from "../../embed";

export default function PayrunSettings() {
  const url = useMemo(() => {
    return getEmbedUrl(Components.PAYROLL_SETTINGS);
  }, []);
  return (
    <div className="settings-page container">
      <div className="section-head">
        <Link
          to="/settings"
          style={{
            transform: "rotate(180deg)",
            display: "block",
          }}
        >
          ➜{" "}
        </Link>
        <h1>Payrun Settings</h1>
      </div>
      <div className="content">
        <Suspense fallback={<div className="embed-loading">Loading...</div>}>
          <Await resolve={url}>
            {(url) => (
              <EmbedContainer
                url={url}
                id="payrun-settings"
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
    </div>
  );
}
