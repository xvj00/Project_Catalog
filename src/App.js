// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';  // Убираем ненужные импорты
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage'

// Основной компонент приложения
function App() {
    return (
        <BrowserRouter>
            <Header /> 
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path='/cart' element={<CartPage/>} />
                {/* Ваши другие маршруты можно добавить сюда, например: */}
                {/* <Route path="/about" element={<AboutPage />} /> */}
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
