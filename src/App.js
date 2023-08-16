import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Dashboard from "./Pages/DashboardPage/Dashboard";
import LoginPage from "./Pages/LoginPage/LoginPage";
import Registration from "./Pages/RegistrationPage/Registration";
import AboutUs from "./Pages/LandingPage/AboutUs/AboutUs";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App;
