
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';  // Убираем ненужные импорты
import './App.css';
import ProductPage from './pages/ProductPage';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PromotionPage from "./pages/PromotionPage";
import PartnerPage from "./pages/PartnerPage";
import LocationPage from "./pages/LocationPage";


// Основной компонент приложения
function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path="/product/:id" element={<ProductPage/>} />
                <Route path="/promotion" element={<PromotionPage/>}/>
                <Route path="/partners" element={<PartnerPage/>}/>
                <Route path="/location" element={<LocationPage/>}/>

            </Routes>


            <Footer />

        </BrowserRouter>

    );
}

export default App;
