import './App.css';
import  {Routes, Navigate, Route} from "react-router-dom"
import HomePage from './pages/HomePage';
import KitchenPage from './pages/KitchenPage';
import LaundryPage from './pages/LaundryPage';

export default function App() {
  return (
    <div className="App">

       <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/kitchen" element={<KitchenPage/>} />
                <Route path="/laundry" element={<LaundryPage/>}/>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
    </div>
  );
}