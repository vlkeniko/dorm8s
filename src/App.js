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
        <Route path="/" element={JSON.parse(localStorage.getItem("loggedinname")) === null ? <LoginPage /> : <HomePage /> } />
        <Route path="/kitchen" element={<KitchenPage />} />
        <Route path="/laundry" element={<LaundryPage />} />
        <Route path="/finances" element={<FinancesPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}
