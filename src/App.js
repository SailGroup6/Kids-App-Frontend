import { Routes, Route } from "react-router-dom"
import Dashboard from "./Pages/DashboardPage/Dashboard";
import LoginPage from "./Pages/LoginPage/LoginPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
