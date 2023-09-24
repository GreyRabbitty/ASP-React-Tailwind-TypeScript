import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

//import pages
import LandingPage from './pages/LandingPage';
import DetailPage from './pages/DetailPage';
import Footer from './layout/Footer';
import Header from './layout/Header';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/detail/:id' element={<DetailPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
