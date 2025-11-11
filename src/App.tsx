import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import FlightSearch from './components/features/flight/flight-search';
// import HotelSearch from './features/hotel/HotelSearch';
// import VisaForm from './features/visa/VisaForm';
// import ToursList from './features/tours/ToursList';
import FlightTracker from './components/features/tracking/flight-tracking';
import SignIn from './components/auth/sign-in';
import PrivateRoute from './provider/ptivate-route';


export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 sm:px-6 py-6">
          <Routes>
            {/* <Route path="/hotels" element={<HotelSearch />} />
            <Route path="/visa" element={<VisaForm />} />
            <Route path="/tours" element={<ToursList />} /> */}
            <Route path="/tracking" element={<PrivateRoute><FlightTracker /></PrivateRoute>} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/" element={<FlightSearch />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}