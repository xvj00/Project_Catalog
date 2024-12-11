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
            <div className="form-container">
                <form id="contactForm">
                    <div className="form-group">
                        <label htmlFor="name">Имя:</label>
                        <input type="text" id="name" name="name" required minLength="2"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Номер телефона:</label>
                        <input type="tel" id="phone" name="phone" required pattern="^\+?[0-9\-\s]+$"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Электронная почта:</label>
                        <input type="email" id="email" name="email" required/>
                    </div>

                        <button type="submit" className="btn">Отправить заявку</button>

                </form>
            </div>
        </div>
    );
}

export default PartnerPage;
