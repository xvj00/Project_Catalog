import React from "react";
import '../App.css'; // Импортируем стили


const PromotionPage = () => {
    const promotions = [
        {
            id: 1,
            title: "Подарок за покупку",
            description: "При заказе на сумму от 5000 рублей получите шейкер в подарок!",
            image: "img/sheyker-be-first-color1.jpg"
        },
        {
            id: 2,
            title: "Rule 1 скидка 15%",
            description: "Rule1 по выгодным ценам",
            image: "/img/rule1.png",
        },
        {
            id: 3,
            title: "Повышенный кешбэк",
            description: "Товары с повышенным кешбэком",
            image: "/img/cashback.jpg",
        },
    ];

    return (
        <div className="about-page size">
            <h1 className="page-title ">Акции</h1>
            <div className="promotions ">

                {promotions.map((promo) => (
                    <div key={promo.id} className="promotion-card">
                        <img src={promo.image} alt={promo.title} className="promotion-image"/>
                        <h3>{promo.title}</h3>
                        <p>{promo.description}</p>
                    </div>
                ))}
            </div>
            <footer className="newsletter  ">
                <p>
                    Подпишись на рассылку и моментально получи скидку 10% на заказ
                    Продолжая, вы даёте <a href="#">согласие на обработку</a> персональных данных.
                </p>
                <form className="newsletter-form">
                    <input type="email" placeholder="Введите ваш e-mail"/>
                    <button type="submit">Подписаться</button>
                </form>
            </footer>
        </div>
    );
}

export default PromotionPage;
