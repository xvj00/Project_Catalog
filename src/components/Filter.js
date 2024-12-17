import React, { useState } from 'react';
import './style/Filter.css';

const Filter = ({ onFilter }) => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [priceRange, setPriceRange] = useState({ min: '', max: '' });

    const categories = [
        { label: "Все", query: "" },
        { label: "Новинки", query: "new" },
        { label: "Распродажа", query: "sale" },
        { label: "Протеины", query: "Протеин" },
        { label: "Креатин", query: "креатин" },
        { label: "BCAA", query: "bcaa" },
        { label: "Аминокислоты", query: "аминокислоты" },
        { label: "Гейнер", query: "гейнер" },
        { label: "Изотоники", query: "изотоник" },
    ];

    const handleCategoryChange = (query) => {
        setSelectedCategory(query);
        applyFilters(query, priceRange);
    };

    const handlePriceChange = (e) => {
        const { name, value } = e.target;
        const updatedPriceRange = { ...priceRange, [name]: value };
        setPriceRange(updatedPriceRange);
        applyFilters(selectedCategory, updatedPriceRange);
    };

    const applyFilters = (category, priceRange) => {
        if (onFilter) {
            onFilter({ category, minPrice: priceRange.min, maxPrice: priceRange.max });
        } else {
            console.error('Функция onFilter не передана в Filter.');
        }
    };

    const resetFilters = () => {
        setSelectedCategory('');
        setPriceRange({ min: '', max: '' });
        applyFilters('', { min: '', max: '' });
    };

    return (
        <div className="filter-container">
            <div className="filter-panel">
                <div className="filter-category">
                    <label htmlFor="category">Категории:</label>
                    <select
                        id="category"
                        value={selectedCategory}
                        onChange={(e) => handleCategoryChange(e.target.value)}
                    >
                        {categories.map((category, index) => (
                            <option key={index} value={category.query}>
                                {category.label}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="filter-price">
                    <label htmlFor="minPrice">Цена от:</label>
                    <input
                        type="number"
                        id="minPrice"
                        name="min"
                        value={priceRange.min}
                        placeholder="Минимум"
                        onChange={handlePriceChange}
                    />
                    <label htmlFor="maxPrice">до:</label>
                    <input
                        type="number"
                        id="maxPrice"
                        name="max"
                        value={priceRange.max}
                        placeholder="Максимум"
                        onChange={handlePriceChange}
                    />
                </div>

                <button className="reset-button" onClick={resetFilters}>Сбросить</button>
            </div>
        </div>
    );
};

export default Filter;
