import "./about.css";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  return (
    <div className="home_container">
      <div className="home_content">
        <p className="example">This website is for training</p>
        <button className="back_button" onClick={() => navigate("/")}>
          Go Back
        </button>
      </div>
    </div>
  );
}

export default About;
