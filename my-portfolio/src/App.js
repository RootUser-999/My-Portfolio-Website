import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Nav';
import Hero from './components/Hero';
import Education from './components/Education';
import Services from './components/Services';
import Footer from './components/Footer';
import Contact from "./components/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/education" element={<Education />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />

            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
