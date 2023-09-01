// Import necessary components and libraries
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Dashboard from "./Pages/DashboardPage/Dashboard";
import LoginPage from "./Pages/LoginPage/LoginPage";
import Registration from "./Pages/RegistrationPage/Registration";
import Profile from "./Pages/DashboardPage/Profile";
import { ConfigProvider } from "antd";


// Define the main App component
function App() {
  return (
    <div className="App">
    {/* Configure theme using ConfigProvider */}
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#9B5DE6",
          },
        }}
      >
      {/* Define routes using react-router-dom */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/Profile" element={<Profile/>}/>
        </Routes>
      </ConfigProvider>
    
    </div>
  );
}

export default App;
