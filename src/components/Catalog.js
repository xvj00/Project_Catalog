import React, {useState} from "react";


const Catalog = ({ searchQuery, cart, addToCart}) => {
  const generateProducts = (count) => {
    const placeholderNames = ['Креатин', 'BCAA', 'Протеин', 'Гейнер', 'Изотоник', 'Аминокислоты' , 'Изотоник'];
    const placeholderImages = ['img/image.png'];
  
    return Array.from({ length: count }, (_, i) => ({
      id: i + 1,
      name: placeholderNames[i % placeholderNames.length], // Цикличный выбор имени
      price: (Math.random() * 1000 + 1000).toFixed(0), // Случайная цена от 500 до 1500
      image: placeholderImages[i % placeholderImages.length], // Цикличный выбор изображения
      rating: Math.floor(Math.random() * 5) + 1, // Рейтинг от 1 до 5
      sale: Math.random() > 0.5, // Случайная распродажа
      new: Math.random() > 0.7, // Случайный "новый продукт"
    }));
  };
  
  // Пример использования
  const products = generateProducts(20); // Создает массив из 20 продуктов

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
            <img src={product.image} alt={product.name} className="product-image" />
            {product.sale && <span className="sale-badge">Sale</span>}
            {product.new && <span className="sale-badge">Новинка!</span>}
            <h3>{product.name}</h3>
            <div className="rating">
              {'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)}
            </div>
            <div className="price_buttons">
              <p>{product.price} ₽</p>
              <img className="add-to-favorites" src="./img/black_heart.svg" alt="Добавить в избранное" />
              <button className="add-to-cart" onClick={() => addToCart(product)}>В корзину</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
