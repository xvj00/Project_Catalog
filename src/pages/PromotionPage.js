import React, {useEffect} from "react";
import ScrollReveal from "scrollreveal";
import "../App.css";

const PromotionsPage = () => {
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
        <div className="promotions">
            <div className="promotions-hero ">
                <div className="hero-txt size">
                    <h1 className="page-title reveal">Наши акции</h1>
                    <p className="page-text reveal">
                        Следите за нашими специальными предложениями и акциями, чтобы покупать качественные продукты по
                        выгодным ценам!
                        Мы регулярно обновляем список акций, чтобы вы могли выбрать то, что подходит именно вам.
                        Это отличная возможность сэкономить и приобрести спортивное питание, аксессуары и многое другое
                        на максимально выгодных условиях.
                    </p>
                </div>
            </div>

            <div className="promotions-list  ">
                <div className="promotion-item promotion-item-1">

                    <div className="promotion-overlay size">
                        <h2 className="page-subtitle reveal">Скидка 20% на избранные товары</h2>
                        <p className="page-text reveal">
                            Получите скидку 20% на популярные товары из нашего ассортимента! Спешите воспользоваться
                            предложением,
                            так как оно действует ограниченное время. Ознакомьтесь с перечнем акционных позиций и
                            выберите то,
                            что подходит именно вам.
                        </p>

                    </div>
                </div>
                <div className="promotion-item promotion-item-2 ">

                    <h2 className="page-subtitle reveal size">Подарки за покупки</h2>
                    <p className="page-text size reveal">
                        Совершая покупку на сумму от 5000 рублей, вы получаете не только качественные товары, но и
                        приятный бонус от нас!
                        В подарок могут входить спортивные аксессуары, пробники новых вкусов, либо другие полезные
                        мелочи для вашего
                        комфорта и продуктивных тренировок. Спешите воспользоваться этой возможностью и сделайте
                        свои
                        покупки еще более выгодными!
                    </p>


                </div>
                <div className="promotion-item promotion-item-3">
                    <div className="promotion-overlay  size">
                        <h2 className="page-subtitle reveal">Скидка на следующий заказ</h2>
                        <p className="page-text reveal">
                            Оформите заказ на сумму от 3000 рублей и получите скидку на следующую покупку! Мы стремимся
                            сделать ваш шопинг выгодным и приятным.
                            Совершая покупку сейчас, вы не только приобретаете качественную продукцию, но и получаете
                            возможность сэкономить в будущем.
                            Используйте скидку при следующем заказе и продолжайте радовать себя нашими товарами по ещё
                            более привлекательным ценам!
                        </p>


                    </div>
                </div>
            </div>

            <div className="newsletter reveal size">
                <p className="page-text">
                    Подпишись на рассылку и моментально получи скидку 10% на заказ
                    Продолжая, вы даёте <a href="#">согласие на обработку</a> персональных данных.
                </p>
                <form className="newsletter-form">
                    <input type="email" placeholder="Введите ваш e-mail"/>
                    <button type="submit">Подписаться</button>
                </form>
            </div>
        </div>
    );
};

export default PromotionsPage;
