import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Features from './components/Features';
import Contact from './components/Contact';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import Superior from './components/Superior';
import Linoremore from './components/Linoremore';
import Cart from "./components/Cart";
import Linore from './components/Linore';
import Favorites from './components/Favorites';
import Flagship from "./components/Flagship"
import LogoutConfirmationModal from './components/LogoutConfirmationModal';
import Resource from './components/Resource';
import Bestseller from "./components/Bestseller"
import Bestseller1 from './components/Bestseller1';
import Schedule from './components/Schedule';
import GoogleMap from './components/GoogleMap';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/favourite" element={<Favorites/>} />  
        <Route path="/Cart"element={<Cart/>} />
        <Route path="/bestseller" element={<Bestseller/>}/>
        <Route path="/bestseller1" element={<Bestseller1/>}/>
        <Route path="/schedule" element={<Schedule/>}/>
        <Route path="/Resource" element={<Resource/>}/>
        <Route path="/Linore" element={<Linore/>}/>
        <Route path="/Flagship" element={<Flagship/>}/>
        <Route path="/GoogleMap" element={<GoogleMap/>}/>

        <Route path='/LogoutConfirmation' element={<LogoutConfirmationModal />} />
        <Route path="/Linoremore" element={<Linoremore/>}/>
        <Route path="/signin" element={<SignIn setIsLoggedIn={setIsLoggedIn}  />} />
        <Route path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn}  />}/>
        <Route path="/Superior" element={<Superior/>} />  

      </Routes>
    </Router>
  );
};

export default App;