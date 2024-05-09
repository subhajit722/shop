import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/navbar/Navbar';
import Home from './Pages/Home';
import Card from './Pages/Card';
import Category from './Pages/Category';
import User from './Pages/User';
import ProductView from './Pages/ProductView';
import Rgister from './Pages/Register'
import LoginPage from './Pages/LoginPage';
import './App.css'

function App() {
  return (
    <>

    <Router>
    <Navbar />
<div className='margins'></div>
      
        <Routes >
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<User />} />
          <Route exact path="/reister" element={<User />} />
          <Route exact path="/card" element={<Card />} />
          <Route exact path="/user" element={<User />} />
          <Route exact path="/category" element={<Category />} />
          <Route exact path="/product/:id" element={<ProductView />} />
        </Routes>
     
    </Router>
    </>
  );
}

export default App;
