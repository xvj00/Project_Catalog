import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "../App.css";

const PartnerPage = () => {
    useEffect(() => {
        // Инициализация ScrollReveal
        ScrollReveal().reveal(".reveal", {
            duration: 1000,
            distance: "100px",
            origin: "bottom",
            delay: 300,
            // reset: true, // повторно анимировать при прокрутке
        });
    }, []);

    return (
        <div className="partner">
            <div className="partner-hero reveal">
                <div className="hero-txt size">
                    <h1 className="page-title">Стать партнером</h1>
                    <p className="page-text">
                        Мы рады приветствовать вас на странице партнерства компании Спортпит! Если вы хотите стать
                        частью нашей команды и предлагать качественные продукты спортивного питания своим клиентам,
                        мы будем рады сотрудничеству.
                    </p>
                </div>
            </div>

            <div className="divider size reveal">
                <img src="img/icon.svg" alt="icon" />
                <div className="divider-line">
                    <h2 className="page-subtitle">Преимущества партнерства</h2>
                    <p className="page-text">
                        Сотрудничество с нами предоставляет доступ к эксклюзивным продуктам и уникальным предложениям,
                        а также маркетинговую поддержку с рекламными материалами. Мы проводим обучение и консультации для
                        повышения ваших знаний о продукции. Конкурентные цены и гибкие условия помогут эффективно развивать
                        бизнес и увеличивать прибыль.
                    </p>
                </div>
            </div>

            <h2 className="page-subtitle size reveal">Заполните форму для подачи заявки</h2>
            <div className="form-container size reveal">
                <form id="contactForm">
                    <div className="form-group">
                        <label htmlFor="name">Имя:</label>
                        <input type="text" id="name" name="name" required minLength="2" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Номер телефона:</label>
                        <input type="tel" id="phone" name="phone" required pattern="^\+?[0-9\-\s]+$" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Электронная почта:</label>
                        <input type="email" id="email" name="email" required />
                    </div>

                    <button type="submit" className="btn">Отправить заявку</button>
                </form>
            </div>
        </div>
    );
};

export default PartnerPage;
