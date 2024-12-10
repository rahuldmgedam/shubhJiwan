import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import RegistrationForm from "./components/RegistrationForm";
import HomePage2 from "./pages/HomePage2";
import LoginDashboard from "./pages/LoginDashboard";
import Profiles from "./components/Profiles";
import MembershipPlans from "./components/MembershipPlans";
import Contact from "./components/Contact";
import ProfileDetails from "./components/ProfileDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/register" element={<Register />} /> */}
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/loginProfile" element={<LoginDashboard/>} />

          <Route path="/memberships" element={<MembershipPlans/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/profileDetails" element={<ProfileDetails/>} />

          <Route path="/login" element={<Login />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route path="/index" element={<Navigate to="/home" />} />{" "}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
