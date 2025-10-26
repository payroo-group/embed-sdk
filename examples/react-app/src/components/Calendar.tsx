import { TeamCalendar } from "@payroo-group/embed-sdk-react";
import { Link } from "react-router";
import { getEmbedUrl } from "../embed";

function Calendar() {
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
        <h2>Calendar</h2>
      </div>

      <TeamCalendar
        month="2025-10"
        allowMonthChange={true}
        showTeamLeaves={true}
        showHolidays={true}
        showFilter={true}
        showSearch={true}
        getEmbedUrl={getEmbedUrl}
        options={{
          autoHeightAdjust: true,
          extraAllowedOrigins: [
            "http://localhost:5700",
            "https://sandbox-embed.payroo.com.au",
          ],
        }}
      />

    </div>
  );
}
export default Calendar;
