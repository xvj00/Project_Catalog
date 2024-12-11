import React from "react";
import "../App.css";

const PartnerPage = () => {
    return (
        <div className="about-page size">
            <h1 className="page-title">Стать партнером</h1>
            <p className="page-text">
                Мы рады приветствовать вас на странице партнерства компании Спортпит! Если вы хотите стать частью нашей
                команды и предлагать качественные продукты спортивного питания своим клиентам, мы будем рады
                сотрудничеству.
            </p>
            <h2 className="page-subtitle">Преимущества партнерства</h2>
            <ul className="page-list">
                <li>Доступ к эксклюзивным продуктам и предложениям.</li>
                <li>Маркетинговая поддержка и рекламные материалы.</li>
                <li>Обучение и консультирование по продуктам.</li>
                <li>Конкурентные цены и гибкие условия сотрудничества.</li>
            </ul>

            <h2 className="page-subtitle">Заполните форму для подачи заявки</h2>
            <form id="contactForm">
                <div className="form-group">
                    <label htmlFor="name">Имя:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Телефон:</label>
                    <input type="tel" id="phone" name="phone" required />
                </div>
                <button type="submit" className="add-to-cart">Отправить заявку</button>
            </form>
        </div>
    );
}

export default PartnerPage;
