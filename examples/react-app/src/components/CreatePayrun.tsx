import { Link } from "react-router";
import { CreatePayrun as CreatePayrunComponent } from "@payroo-group/embed-sdk-react";
import { getEmbedUrl } from "../embed";

function CreatePayrun() {
  return (
    <div className="container">
      <div className="section-head" style={{ maxWidth: 620 }}>
        <Link
          to="/payruns"
          style={{
            transform: "rotate(180deg)",
            display: "block",
          }}
        >
          ➜{" "}
        </Link>
        <h2>New Payrun</h2>
      </div>
      <CreatePayrunComponent
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

export default CreatePayrun;