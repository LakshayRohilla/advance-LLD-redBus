import "./App.css";
import DashboardPage from "./pages/dashboardPage.jsx";
import ReservationPage from "./pages/reservationPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/homePage.jsx'
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/reservation" element={<ReservationPage />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </>
  );
}

export default App;
