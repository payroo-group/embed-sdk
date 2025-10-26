import { EmbedContainer } from "@payroo-group/embed-sdk-react";
import { Suspense, useMemo } from "react";
import { Await, Link } from "react-router";
import { Components } from "@payroo-group/embed-sdk";
import { getEmbedUrl } from "../embed";

function Calendar() {
  const url = useMemo(() => {
    return getEmbedUrl(Components.TEAM_CALENDAR);
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
        <h2>Calendar</h2>
      </div>
      <Suspense fallback={<div className="embed-loading">Loading...</div>}>
        <Await resolve={url}>
          {(url) => (
            <EmbedContainer
              url={url}
              id="team-calendar"
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
export default Calendar;
