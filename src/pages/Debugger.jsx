import { useState } from "react";
import "../pages/Debugger.css";

export default function Debugger() {
  const [log, setLog] = useState("");
  const [result, setResult] = useState("");
  const analyzeLog = () => {
    if (log.includes("npm install")) {
      setResult("Dependency issue detected. Run: npm install");
    } 
    else if (log.includes("permission denied")) {
      setResult("Permission error. Try running terminal as administrator.");
    }
    else {
      setResult("No known issue detected. Please check YAML configuration.");
    }
  };

  return (
    <div className="debugger-page">
       <h2>Paste Your CI/CD Error Logs</h2>

      <textarea
        placeholder="Paste Jenkins, GitHub Actions, Docker, or build error logs here..."
        value={log}
        onChange={(e) => setLog(e.target.value)}
      />
     <button className="analyse-btn" onClick={analyzeLog}>Analyze</button>
      <div className="output">
        <h3>Solutions</h3>
        <p>{result}</p>
      </div>
    </div>
  );
}
