import React from 'react';
import {Link, useParams} from 'react-router-dom';
import products from '../DataProduct'; // Импортируйте массив продуктов

const ProductPage = () => {
    const { id } = useParams(); // Получаем id из URL
    const product = products.find(p => p.id === parseInt(id)); // Находим продукт по id

    if (!product) {
        return <div>Продукт не найден.</div>; // Обработка случая, если продукт не найден
    }

    return (
        <div className="product-container size">
            <div className="product-page size">
                <h2>{product.name}</h2>
                <img className='product-image' src={product.image} alt={product.name}/>
                <div className="rating">
                    {'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)}
                </div>
                <p>Цена: {product.price} ₽</p>
                {product.sale && <p className="sale-badge">Скидка!</p>}
                {product.new && <p className="sale-badge">Новинка!</p>}
                <Link to='/'>
                    <button className="add-to-cart">Назад</button>
                </Link>
            </div>
        </div>
            );
            };

            export default ProductPage;
