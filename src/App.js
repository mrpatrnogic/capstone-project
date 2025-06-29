import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme/theme';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Home/HomePage';
import AboutPage from './OtherTabs/AboutPage';
import MenuPage from './OtherTabs/MenuPage';
import ReservationPage from './OtherTabs/ReservationPage';
import OrderPage from './OtherTabs/OrderPage';
import LoginPage from './OtherTabs/LoginPage';
import { BookingProvider } from './Reservations/BookingProvider';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BookingProvider>
        <Router>
          <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/reservations" element={<ReservationPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
      </BookingProvider>
    </ChakraProvider>
  );
}

export default App;
