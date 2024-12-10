import React from "react";
import '../App.css'; // Импортируем стили


const PromotionPage = () => {
    return (
        <div className="about-us size">
            <div className="about-page">
                <div className="promotion-page-content">
                    <h1 className="page-title">Акции и Специальные Предложения</h1>
                    <p className="page-text">
                        Добро пожаловать на страницу акций "СпортПит и Точка"! Мы рады предложить вам лучшие
                        предложения на спортивное питание, которые помогут вам достичь ваших целей в фитнесе и спорте.
                    </p>

                    {/* Баннер 1 */}
                    <img src="/img/banners/banner1.jpg" alt="Акция 1" className="banner size"/>

                    <h2 className="page-subtitle">Текущие Акции:</h2>
                    <ul className="page-list">
                        <li>
                            <strong>Скидка 20% на все протеиновые порошки!</strong>
                            Примените код <em>PROTEIN20</em> при оформлении заказа. Акция действует до конца месяца.
                        </li>
                        <li>
                            <strong>Купи 2, получи 1 бесплатно!</strong>
                            При покупке любых двух товаров из категории "Энергетики" третий в подарок.
                        </li>
                        <li>
                            <strong>Бесплатная доставка</strong>
                            на заказы от 3000 рублей. Успейте воспользоваться предложением!
                        </li>
                    </ul>

                    {/* Баннер 2 */}
                    <img src="/img/banners/banner1.jpg" alt="Акция 2" className="banner size"/>

                    <h2 className="page-subtitle">Почему выбирают нас?</h2>
                    <p className="page-text">
                        Мы гарантируем высокое качество наших продуктов, разработанных с учетом потребностей
                        российских спортсменов. Наша команда постоянно работает над новыми формулами и улучшением
                        существующих продуктов, чтобы вы могли быть уверены в их эффективности.
                    </p>

                    <h2 className="page-subtitle">Следите за новостями</h2>
                    <p className="page-text">
                        Подписывайтесь на наши социальные сети и будьте в курсе последних акций и новинок!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default PromotionPage;
