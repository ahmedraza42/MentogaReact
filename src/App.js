import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './mentee/Home';
import Login from './auth/Login';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Analytics from './components/Analytics';
import Newsletter from './components/Newsletter';
import Cards from './components/Cards';
import Footer from './components/Footer';
import CrearorProfile from './components/CrearorProfile';
import FindExperts from './mentee/FindExperts';
function App() {
  return (
    
      <BrowserRouter basename="/">
      <Routes>
      {/* <Route path="/" element={<Login />} /> */}
      <Route path="/" element={<Home />} />
      <Route path="/FindExperts" element={<FindExperts />} />
          </Routes>
      </BrowserRouter>

   
  );
}

export default App;
