import './App.css';
import HomePage from './pages/HomePage';
import KitchenPage from './pages/KitchenPage';
import LaundryPage from './pages/LaundryPage';

export default function App() {
  return (
    <div className="App">
      <HomePage />
      <KitchenPage />
      <LaundryPage />
    </div>
  );
}