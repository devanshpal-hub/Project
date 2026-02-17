import "./page.css";

export default function FAQ() {
  return (
    <div className="page">
      <div className="page-content">

        <h1>Frequently Asked Questions</h1>

        <p><b>1. What is CI/CD?</b><br/>
        CI/CD stands for Continuous Integration and Continuous Deployment.
        It automates building, testing and deploying applications.</p>

        <p><b>2. How does this debugger work?</b><br/>
        You paste your pipeline error log and the system analyzes it
        and suggests possible fixes.</p>

        <p><b>3. Is this tool free?</b><br/>
        Yes, this is a student project and free to use.</p>

        <p><b>3. Which platforms are supported?</b><br/>
        GitHub Actions, Jenkins, GitLab CI and similar pipeline systems.</p>

      </div>
    </div>
  );
}
