import { Routes, Route } from "react-router-dom"
import Dashboard from "./Pages/DashboardPage/Dashboard";
import LoginPage from "./Pages/LoginPage/LoginPage";
import LandingPage from './Homepage/components/LandingPage/LandingPage'
import Registration from './Component/Registration'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/dashboard" element={<LandingPage/>}/>
        <Route path="/dashboard" element={<Registration/>}/>
      </Routes>
    </div>
  );
}

export default App;
