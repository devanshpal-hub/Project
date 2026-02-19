import "./page.css";

export default function About() {
  return (
    <div className="page">
      <div className="page-content">

        <h1>About CI/CD Debugger</h1>

        <p>
          1️⃣CI/CD Debugger is a web based tool that helps developers identify and
          fix errors in Continuous Integration and Continuous Deployment pipelines.
        </p>

        <p>
          2️⃣Developers often face issues while running GitHub Actions, Jenkins or
          other automated pipelines. Understanding long error logs can be difficult.
          Our system analyzes the error logs and provides clear solutions.
        </p>

        <p>
          3️⃣The goal of this project is to make debugging faster, easier and beginner-friendly.
          Instead of searching errors manually on the internet, users can simply paste
          their error logs and instantly receive suggestions.
        </p>

      </div>
    </div>
  );
}
