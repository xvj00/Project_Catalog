import React, { useState } from "react";
import Catalog from "../components/Catalog"

import Slider from "../components/Slider";



const HomePage = () => {
    const categories = [
        "Новинки", "Распродажа", "Протеины", "Креатин", "BCAA", "Аминокислоты", "Гейнер", "Изотоники"
    ];
    return (
        <div>
            <div className="hero">
                <Slider />
            </div>
            <div className="main-container size">
                <div className="sidebar">
                    <h2>Категории</h2>
                    <ul>
                        {categories.map((category, index) => (
                            <li key={index}>{category}</li>
                        ))}
                    </ul>
                </div>
           
            <Catalog />
            </div>
        </div>
    );
};

export default HomePage;