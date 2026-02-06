import "./App.css";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">⚙ CI/CD Debugger</div>

        <ul className="nav-links">
          <li>About</li>
          <li>FAQ</li>
          <li>Documentation</li>
          <li>Contact</li>
        </ul>
      </nav>
      <section className="hero">
        <h1 className="hero-title">
          Find & Fix Issues <br />
          in Your <span>CI/CD Pipeline</span>
        </h1>

        <p className="hero-desc">Paste your error logs and get automated solutions and suggestions.
        </p>

        <div className="search-box">
          <input
            type="text"
            placeholder="Paste CI/CD error messages, build failures, and logs..."
          />
          <button>Analyze</button>
        </div>

        <small className="hero-help">
          Need help? Enter your CI/CD error messages to get started.
        </small>
      </section>
      <section className="features">
        <div className="feature-card">
          <h3>⚡ Instant Analysis</h3>
          <p>Get quick insights into CI/CD pipeline failures.</p>
        </div>

        <div className="feature-card">
          <h3>🤖 AI Suggestions</h3>
          <p>Smart fixes generated using AI logic.</p>
        </div>

        <div className="feature-card">
          <h3>📄 Log Support</h3>
          <p>Supports build logs, error logs and YAML configs.</p>
        </div>
      </section>
    </div>
  );
}

export default App;
