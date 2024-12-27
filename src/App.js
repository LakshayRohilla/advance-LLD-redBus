import "./App.css";
import DashboardPage from "./pages/dashboardPage.jsx";
import ReservationPage from "./pages/reservationPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/homePage.jsx'

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
    </>
  );
}

export default App;
