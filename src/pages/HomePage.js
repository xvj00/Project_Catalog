import React, { useState } from "react";
import Catalog from "../components/Catalog";
import Filter from "../components/Filter";
import Slider from "../components/Slider";

const HomePage = () => {
    const [searchQuery, setSearchQuery] = useState(''); // Стейт для поиска

    const handleSearch = (query) => {
        setSearchQuery(query); // Обновление поискового запроса при выборе категории
        console.log('Фильтрация по:', query);
    };

    const handleReturn = () => {
        setSearchQuery(''); // Очистка поиска
    };

    return (
        <div>
            <div className="hero">
                <Slider />
            </div>

            <div className="catalog-container size">
                {/* Компонент фильтрации */}
                <Filter 
                    onSearch={handleSearch} 
                    onReturn={handleReturn} 
                />

                {/* Каталог товаров с фильтрацией */}
                <Catalog searchQuery={searchQuery} />
            </div>
        </div>
    );
};

export default HomePage;
