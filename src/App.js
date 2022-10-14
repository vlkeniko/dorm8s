import './App.css';
<<<<<<< Updated upstream
=======
import { Routes, Route, Navigate} from "react-router-dom";
>>>>>>> Stashed changes
import HomePage from './pages/HomePage';
import KitchenPage from './pages/KitchenPage';
import LaundryPage from './pages/LaundryPage';

export default function App() {
  return (
    <div className="App">
<<<<<<< Updated upstream
      <HomePage />
      <KitchenPage />
      <LaundryPage />
=======
       <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/kitchen" element={<KitchenPage/>} />
                <Route path="/laundry" element={<LaundryPage/>}/>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
>>>>>>> Stashed changes
    </div>
  );
}