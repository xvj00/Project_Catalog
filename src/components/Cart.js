import React, { useState } from 'react';
import Catalog from './Catalog';

const App = () => {
    const [cart, setCart] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const addToCart = (product) => {
        setCart((prevCart) => {
            // Проверяем, есть ли уже товар в корзине
            const existingProduct = prevCart.find(item => item.id === product.id);
            if (existingProduct) {
                // Если товар уже есть, увеличиваем количество
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                // Если товара нет, добавляем его в корзину с количеством 1
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    return (
        <div className="app">
            <input
                type="text"
                placeholder="Поиск..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <main>
                
            </main>
        </div>
    );
};

export default App;
