import React from 'react';
import '../App.css';

const Catalog = () => {
  const products = [
    {
      id: 1,  // добавим id для ключа
      name: 'CREATINE',
      price: '1000',
      image: 'img/image.png',
      rating: 4, // Добавим рейтинг для примера
    },
    {
      id: 2,  // добавим id для ключа
      name: 'CREATINE new',
      price: '1000',
      image: 'img/image.png',
      rating: 5, // Добавим рейтинг для примера
    },
    {
      id: 3,  // добавим id для ключа
      name: 'CREATINE few',
      price: '1000',
      image: 'img/image.png',
      rating: 3, // Добавим рейтинг для примера
    },
    {
      id: 4,  // добавим id для ключа
      name: 'CREATINE',
      price: '1000',
      image: 'img/image.png',
      rating: 4, // Добавим рейтинг для примера
    },
    {
      id: 5,  // добавим id для ключа
      name: 'CREATINE',
      price: '1000',
      image: 'img/image.png',
      rating: 4, // Добавим рейтинг для примера
    },
    {
      id: 6,  // добавим id для ключа
      name: 'CREATINE',
      price: '1000',
      image: 'img/image.png',
      rating: 4, // Добавим рейтинг для примера
    },
    {
      id: 7,  // добавим id для ключа
      name: 'CREATINE',
      price: '1000',
      image: 'img/image.png',
      rating: 4, // Добавим рейтинг для примера
    },
    {
      id: 8,  // добавим id для ключа
      name: 'CREATINE',
      price: '1000',
      image: 'img/image.png',
      rating: 4, // Добавим рейтинг для примера
    },

    // Добавьте остальные продукты
  ];

  return (
    <div className='product-container'>
      <div className="product-list">
        {products.map((product) => (
          <div className="product-item" key={product.id}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <div className="rating">
              {'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)}
            </div>
            <div className='price_buttons'>
              <p>{product.price} ₽</p>
              <img className="add-to-favorites"src='./img/black_heart.svg' />
              <button className="add-to-cart">В корзину</button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
