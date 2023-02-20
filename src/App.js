import React from 'react';
import {HashRouter as Router,Route,Routes} from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
const App = () => {
  return <div className='overflow-hidden'>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/product/:id' element={<ProductDetails />}/>
      </Routes>
      <Sidebar />
      <Footer />
    </Router>
  </div>;
};

export default App;
