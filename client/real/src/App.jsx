import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Features from './components/Features';
import Contact from './components/Contact';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Parent from './Parent';
import Footer from './components/Footer';
import Superior from './components/Superior';
import Linoremore from './components/Linoremore';
import Cart from "./components/Cart";
import Linore from './components/Linore';
import Favorites from './components/Favorites';
import Flagship from "./components/Flagship"
import LogoutConfirmationModal from './components/LogoutConfirmationModal';
import Resource from './components/Resource';
import Medora from './components/Medora';
import Bestseller from "./components/Bestseller"
import Bestseller1 from './components/Bestseller1';
import Flagadvantages from './components/Flagadvantages';
import Schedule from './components/Schedule';
import Advantages from './components/Advantages';
import Superior1 from './components/Superior1';
import Aminitiesf from './components/Aminitiesf';
import Aminitiesr from './components/Aminitiesr';
import Post from './components/Post';
import Holachennai from './components/Holachennai';
import Crisp from './components/Crisp';
import Royale from './components/Royale';
import Superior3 from './components/Superior3';
import Statistics from './components/Statistics';
import Faq from './components/Faq';
import Radvantages from './components/Radvantages';
import Book from './components/Book';
import palm from "./components/Palm"
// import AuthContext from "./components/AuthContext"
import ProtectedRoute from './components/ProctedRoute';
import AppContext from "./components/AppContext";
import PropertyCard from './components/PropertyCard';
import BestSeller0 from './components/BestSeller0';
import Bestseller2 from './components/Bestseller2';
import Tsuperior from './components/Tsuperior';
import Taminities from './components/Taminities';
import Adayar from './components/Adayar';
import Adayarr from './components/Adayarr';
import Maple from './components/Maple';
import Alwarpet from './components/Alwarpet';
import Lakshmi from './components/Lakshmi';
import Palm from './components/Palm';
import Palacio from './components/Palacio';
import Ambattur from './components/Arumbakkam';
import Suncity from './components/Suncity';
import Landingpage from './components/Landingpage';
import Parkhouse from './components/Parkhouse';
import Broad from './components/Broad';
import Wing from './components/Wing';
import Atleza from './components/Atleza';
import Club from './components/Club';
import Clover from './components/Clover';
import Harida from './components/Harida';
import Arcus from './components/Arcus';
import Navasuja from './components/Navasuja';


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Landingpage/>} />
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Favorites" element={<Favorites/>} />  
        <Route path="/Cart"element={<Cart/>} />
        <Route path="/bestseller" element={<Bestseller/>}/>
        <Route path="/bestseller1" element={<Bestseller1/>}/>
        <Route path="/schedule" element={<Schedule/>}/>
        <Route path="/Resource" element={<Resource/>}/>
        <Route path="/Linore" element={<Linore/>}/>
        <Route path="/Medora" element={<Medora/>}/>
        <Route path="/Flagadvantages" element={<Flagadvantages/>}/>
        <Route path="/Flagship" element={<Flagship/>}/>
        <Route path="/Superior1" element={<Superior1/>}/>
        <Route path="/Advantages" element={<Advantages/>}/>
        <Route path="/Radvantages" element={<Radvantages/>}/>
        <Route path='/LogoutConfirmation' element={<LogoutConfirmationModal />} />
        <Route path="/Linoremore" element={<Linoremore/>}/>
        <Route path="/signin" element={<SignIn setIsLoggedIn={setIsLoggedIn}  />} />
        <Route path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn}  />}/>
        <Route path="/Superior" element={<Superior/>} /> 
        <Route path="/Superior3" element={<Superior3/>} />
        <Route path="/Post" element={<Post/>} />  
        <Route path="/Holachennai" element={<Holachennai/>} />  
        <Route path="/Royale" element={<Royale/>} />  
        <Route path="/Aminitiesr" element={<Aminitiesr/>} />  
        <Route path="/Aminitiesf" element={<Aminitiesf/>} />  
        <Route path="/Crisp" element={<Crisp/>} />  
        <Route path="/Statistics" element={<Statistics/>} />  
        <Route path="/Book" element={<Book/>} /> 
        <Route path="/AppContext" element={<AppContext/>} />  
        <Route path="/" element={<PropertyCard />} />
        <Route path="bestSeller0" element={<BestSeller0 />} />
        <Route path="BestSeller2" element={<Bestseller2 />} />
        <Route path="/Tsuperior" element={<Tsuperior/>} />
        <Route path="/Taminities" element={<Taminities/>} />  
        <Route path="/Adayar" element={<Adayar/>} />  
        <Route path="/Adayarr" element={<Adayarr/>} />  
        <Route path="/Maple" element={<Maple/>} />  
        <Route path="/Alwarpet" element={<Alwarpet/>} />  
        <Route path="/Lakshmi" element={<Lakshmi/>} />
        <Route path="/Palm" element={<Palm/>} /> 
        <Route path="/Suncity" element={<Suncity/>} />  
        <Route path="/parent" element={<Parent/>} /> 
        <Route path="/Palacio" element={<Palacio/>} />  
        <Route path="/Ambattur" element={<Ambattur/>} />  
        <Route path="/Parkhouse" element={<Parkhouse/>} />  
        <Route path="/Broad" element={<Broad/>} />  
        <Route path="/Wing" element={<Wing/>} />
        <Route path="/Alteza" element={<Atleza/>} /> 
        <Route path="/Club" element={<Club/>} /> 
        <Route path="/Clover" element={<Clover/>} /> 
        <Route path="/Harida" element={<Harida/>} /> 
        <Route path="/Arcus" element={<Arcus/>} /> 
        <Route path="/Navasuja" element={<Navasuja/>} /> 




 
        <Route path="/ProctedRoute" element={<ProtectedRoute/>} />  


        

        <Route path="/Faq" element={<Faq/>} />  




      </Routes>
    </Router>
  );
};

export default App;