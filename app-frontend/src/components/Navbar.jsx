import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          CI/CD <span className="highlight">Debugger</span>
        </div>
        <ul className="nav-links">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/docs">Documentation</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
