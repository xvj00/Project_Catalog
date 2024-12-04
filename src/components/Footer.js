import React from "react";

import "../App.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container size">
      <div className="footer__column">
        <h3>Каталог</h3>
        <ul>
          <li>Новинки</li>
          <li>Распродажа</li>
          <li>Протеины</li>
          <li>Креатин</li>
          <li>Аминокислоты</li>
        </ul>
      </div>
      <div className="footer__column">
        <h3>Помощь</h3>
        <ul>
          <li>Доставка и оплата</li>
          <li>Обмен и возврат</li>
          <li>Клубная программа</li>
          <li>Гарантия лучшей цены</li>
          <li>Товары партнеров</li>
        </ul>
      </div>
      <div className="footer__column">
        <h3>О компании</h3>
        <ul>
          <li>О нас</li>
          <li>Магазины</li>
          <li>Новости</li>
          <li>Гарантия лучшей цены</li>
          <li>Товары партнеров</li>
        </ul>
      </div>
      <div className="footer__column">
        <h3>Контакты</h3>
        <ul className="footer__contacts">
          <li> +7 (906) 228-13-37</li>
          <li>info@gmail.com</li>
          <li>123722, Москва, наб. Обводного канала, 118АХ</li>
        </ul>
      </div>
      </div>
    </footer>
    
  );
};

export default Footer;
