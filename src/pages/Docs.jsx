import "./page.css";

export default function Docs() {
  return (
    <div className="page">
      <div className="page-content">

        <h1>Documentation</h1>

        <p><b>Step 1:</b> Open Debugger page</p>
        <p><b>Step 2:</b> Copy your CI/CD error log</p>
        <p><b>Step 3:</b> Paste the log into the input box</p>
        <p><b>Step 4:</b> Click Analyze</p>
        <p><b>Step 5:</b> View suggested solutions</p>

        <p>
          The system will analyze your error and provide possible fixes
          to help you solve pipeline failures quickly.
        </p>

      </div>
    </div>
  );
}
