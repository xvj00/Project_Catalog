import React, {useState} from "react";
import products from "../DataProduct";

const Catalog = ({searchQuery}) => {



    const filteredProducts = products.filter((product) => {
        const matchesName = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesSale = searchQuery.toLowerCase() === 'sale' && product.sale;
        const matchesNew = searchQuery.toLowerCase() === 'new' && product.new;

        return matchesName || matchesSale || matchesNew;
    });

    return (
        <div className="product-container">
            <div className="product-list">
                {filteredProducts.map((product) => (
                    <div className="product-item" key={product.id}>
                        <img src={product.image} alt={product.name} className="product-image"/>
                        {product.new && <span className="sale-badge">Новинка!</span>}
                        {product.sale && <span className="sale-badge">Распродажа!</span>}

                        <h3>{product.name}</h3>
                        <div className="rating">
                            {'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)}
                        </div>
                        <div className="price_buttons">
                            <p>{product.price} ₽</p>
                            <img className="add-to-favorites" src={"./img/black_heart.svg"} alt="Добавить в избранное"/>
                            <button className="add-to-cart" onClick={() => console.log(product)}>Заказать звонок
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Catalog;
