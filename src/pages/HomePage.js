import React, { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";
import Catalog from "../components/Catalog";
import Filter from "../components/Filter";
import Slider from "../components/Slider";

const HomePage = () => {
    const [filters, setFilters] = useState({ category: '', minPrice: '', maxPrice: '' });

    useEffect(() => {
        // Инициализация ScrollReveal
        ScrollReveal().reveal(".reveal", {
            duration: 1000,
            distance: "50px",
            origin: "bottom",
            delay: 300,
        });
    }, []);

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters); // Обновляем фильтры из компонента Filter
        console.log('Текущие фильтры:', newFilters);
    };

    return (
        <div>
            <div className="hero reveal">
                <Slider />
            </div>

            <div className="catalog-container size">
                {/* Компонент фильтрации */}
                <Filter onFilter={handleFilterChange} />

                {/* Каталог товаров с учетом фильтров */}
                <Catalog filters={filters} />
            </div>
        </div>
    );
};

export default HomePage;
