import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Menu from "../components/Menu";
import Home from "./Home/Home";
import Resume from "./Resume/Resume";
import Works from "./Works";
import Contact from "./Contact/Contact";
import "./Layout.css"

function Layout() {
  return (
    <Router>
      <Menu />
      <div className="Layout">
        <Routes>
          <Route path="/" element={<Navigate to="/Home" replace />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Works" element={<Works />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Layout;