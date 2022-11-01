import "./App.css";
import { Routes, Navigate, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import KitchenPage from "./pages/KitchenPage";
import LaundryPage from "./pages/LaundryPage";
import FinancesPage from "./pages/FinancesPage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage"

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/dorm8ts.build/" element={JSON.parse(localStorage.getItem("loggedinname")) === null ? <LoginPage /> : <HomePage /> } />
        <Route path="/dorm8ts.build/kitchen" element={<KitchenPage />} />
        <Route path="/dorm8ts.build/laundry" element={<LaundryPage />} />
        <Route path="/dorm8ts.build/finances" element={<FinancesPage />} />
        <Route path="/dorm8ts.build/profile" element={<ProfilePage />} />
        <Route path="/dorm8ts.build/login" element={<LoginPage />} />
        <Route path="/dorm8ts.build/" element={<Navigate to="/dorm8ts.build/" />} />
      </Routes>
    </div>
  );
}
