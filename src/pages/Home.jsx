import bg from "../assets/bg.png";
import "./Home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="home-container"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="overlay"></div>
      <div className="home-content">
        <h1>Find & Fix Issues <br/> in Your <span>CI/CD Pipeline</span>
        </h1>
        <p>Automatically detect and solve CI/CD pipeline errors.</p>
        <button
          className="start-btn"
          onClick={() => navigate("/debugger")}
        >
          Start Debugging
        </button>
      </div>

      <div className="features">
        <h2>Why use CI/CD Debugger?</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <h3>Detect Errors❌</h3>
            <p>Find issues in your pipeline automatically.</p>
          </div>

          <div className="feature-card">
            <h3>🤖 AI Solutions</h3>
            <p>Get instant debugging suggestions.</p>
          </div>
          <div className="feature-card">
            <h3> ⚡Fast Debugging</h3>
            <p>Fix errors quickly and save time.</p>
          </div>

          <div className="feature-card">
            <h3>📄 Log Analysis</h3>
            <p>Supports build logs & error logs.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
