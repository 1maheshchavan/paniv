import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SSCForm from "./Components/SSCForm";
import LibraryMembershipForm from "./Components/LibraryMembershipForm";
import I_Annexure from "./Components/I_Annexure";
import II_Annexure from "./Components/II_Annexure";
import III_Annexure from "./Components/III_Annexure";
import StudentRegistrationForm from "./Components/Student.Registration_From";

function App() {
  return (
    <Router>
      <div className="container my-4">
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
          <Link className="navbar-brand" to="/">Home</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/ssc-form">SSC Form</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/library-form">Library Membership Form</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/i-annexure">I Annexure</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ii-annexure">II Annexure</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/iii-annexure">III Annexure</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/student-registration-form">Student Registration Form</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ssc-form" element={<SSCForm />} />
          <Route path="/library-form" element={<LibraryMembershipForm />} />
          <Route path="/i-annexure" element={<I_Annexure />} />
          <Route path="/ii-annexure" element={<II_Annexure />} />
          <Route path="/iii-annexure" element={<III_Annexure />} />
          <Route path="/student-registration-form" element={<StudentRegistrationForm />} /> {/* Added the route for the Student Registration Form */}
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => (
  <div className="text-center">
    <h1>Welcome to Paniv College</h1>
    <p>Select a form from the navigation bar above to get started.</p>
  </div>
);

export default App;