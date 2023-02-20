import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
const App = () => {
  return <div className='overflow-hidden'>
    <Router>
      <Header />
     
         <Home />

    
      <Sidebar />
      <Footer />
    </Router>
  </div>;
};

export default App;
