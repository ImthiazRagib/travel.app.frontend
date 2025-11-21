import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer/footer';
// import HotelSearch from './features/hotel/HotelSearch';
// import VisaForm from './features/visa/VisaForm';
// import ToursList from './features/tours/ToursList';
import FlightTracker from './components/features/tracking/flight-tracking';
import SignIn from './components/auth/sign-in';
import PrivateRoute from './provider/ptivate-route';
import { AuthProvider } from './context/auth-context';
import LandingPage from './components/landing-page';
import Hotels from './components/hotels';
import HotelDetails from './components/hotels/details';
import Flights from './components/features/flight/flights';


export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 sm:px-6 py-6">
          <Routes>
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/hotels/:id" element={<HotelDetails />} />
            {/* <Route path="/visa" element={<VisaForm />} />
            <Route path="/tours" element={<ToursList />} /> */}
            <Route path="/flights" element={<Flights />} />

            <Route path="/tracking" element={<PrivateRoute><FlightTracker /></PrivateRoute>} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}