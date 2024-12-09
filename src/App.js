// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';  // Убираем ненужные импорты
import './App.css';
import ProductPage from './pages/ProductPage';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';


// Основной компонент приложения
function App({children}) {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path="/product/:id" element={<ProductPage/>} />
                {/* Ваши другие маршруты можно добавить сюда, например: */}
                {/* <Route path="/about" element={<AboutPage />} /> */}
            </Routes>


            <Footer />

        </BrowserRouter>

    );
}

export default App;
