import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './components/Login';
import Register from './components/Register';
import ContactUs from './components/ContactUs';
import Services from './components/Services';
import CustomerDashboard from './pages/CustomerDashboard';

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Toaster />
        <Navbar />
      </header>
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path="/services" element={<Services />} />
          <Route path="/dashboard" element={<CustomerDashboard />} />
          <Route path='/contact' element={<ContactUs />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;
