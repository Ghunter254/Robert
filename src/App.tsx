import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TempDetails from './pages/TempDetails';
import About from './pages/About';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import Cart from './pages/Cart';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/item/:id" element={<TempDetails />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
