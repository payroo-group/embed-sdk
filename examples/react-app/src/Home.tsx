import { useEffect } from "react";
import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/payruns");
  }, []);

  return null;
}

export default Home;
