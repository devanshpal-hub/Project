import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Debugger from "./pages/Debugger";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Docs from "./pages/Docs";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/debugger" element={<Debugger />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;

