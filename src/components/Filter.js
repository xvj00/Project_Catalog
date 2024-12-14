import React from 'react';
import './style/Filter.css';

const Filter = ({onSearch, onReturn}) => {
    const categories = [
        {label: "Новинки", query: "new"},
        {label: "Распродажа", query: "sale"},
        {label: "Протеины", query: "Протеин"},
        {label: "Креатин", query: "креатин"},
        {label: "BCAA", query: "bcaa"},
        {label: "Аминокислоты", query: "аминокислоты"},
        {label: "Гейнер", query: "гейнер"},
        {label: "Изотоники", query: "изотоник"},
    ];

    const handleCategoryClick = (categoryQuery) => {
        if (onSearch) {
            onSearch(categoryQuery); // Передаем query в onSearch для фильтрации
        }
        else {
            console.error('Функция onSearch не передана в Filter.');
        }
    };

    return (
        <div className="sidebar">
            <h2>Категории</h2>
            <ul>
                {categories.map((category, index) => (
                    <li key={index} onClick={() => handleCategoryClick(category.query)}>
                        {category.label}
                    </li>
                ))}

                <button onClick={onReturn}>Сбросить</button>
            </ul>

        </div>
    );
};

export default Filter;