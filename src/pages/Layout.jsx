import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Menu from "../components/Menu";
import Home from "./Home";
import Resume from "./Resume";
import Works from "./Works";
import Contact from "./Contact";
import "./Layout.css"

function Layout() {
  return (
    <Router>
      <div className="Layout">
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Works" element={<Works />} />
          <Route path="/Contact" element={<Contact />} />

        </Routes>
      </div>
    </Router>
  );
}

export default Layout;