import React, {useEffect} from "react";
import products from "../DataProduct";
import {Link} from "react-router-dom";
import "./style/Catalog.css";
import ScrollReveal from "scrollreveal";

const Catalog = ({filters}) => {
    const filteredProducts = products.filter((product) => {
        const {category, minPrice, maxPrice} = filters;

        // Проверяем на наличие данных, чтобы избежать ошибок
        const matchesName = product.name && category && product.name.toLowerCase().includes(category.toLowerCase());
        const matchesSale = category === 'sale' && product.sale;
        const matchesNew = category === 'new' && product.new;

        // Фильтрация по цене
        const matchesPrice =
            (!minPrice || product.price >= Number(minPrice)) &&
            (!maxPrice || product.price <= Number(maxPrice));

        return (matchesName || matchesSale || matchesNew || !category) && matchesPrice;
    });

    useEffect(() => {
        // Инициализация ScrollReveal
        ScrollReveal().reveal(".reveal", {
            duration: 1000,
            distance: "100px",
            origin: "bottom",
            delay: 300,
        });
    }, []);

    return (
        <div className="product-container">
            <div className="product-list">
                {filteredProducts.map((product) => (
                    <div className="product-item reveal" key={product.id}>
                        <p className="badge">
                            {product.new && <span className="badge-new badge">Новинка!</span>}
                            {product.sale && <span className="badge-sale badge">Распродажа!</span>}
                        </p>
                        <Link to={`/product/${product.id}`}>
                            <img src={product.image[0]} alt={product.name} className="product-image"/>
                        </Link>

                        <h3>{product.name}</h3>
                        <div className="rating">
                            {Array.from({length: product.rating}).map((_, index) => (
                                <img key={index} src="/img/StarFill.svg" alt="filled star"/>
                            ))}
                            {Array.from({length: 5 - product.rating}).map((_, index) => (
                                <img key={index + product.rating} src="/img/starLine.svg" alt="empty star"/>
                            ))}
                        </div>
                        <div className="price_buttons">
                            <p>{product.price} ₽</p>
                            <Link to={`/product/${product.id}`}>
                                <button className="add-to-cart" onClick={() => console.log(product)}>Подробнее</button>
                            </Link>
                        </div>
                    </div>
                ))}
                {filteredProducts.length === 0 && <p className="no-products">Товары не найдены.</p>}
            </div>
        </div>
    );
};

export default Catalog;
