import React, {useEffect} from "react";
import ScrollReveal from "scrollreveal";

const AboutPage = () => {
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
        <div className="about-us">
            <div className="about-page">
                <section className="about-hero ">
                    <div className="hero-txt size">
                        <h1 className="page-title reveal">Кто мы?</h1>
                        <div className="page-text_container">
                            <p className="page-text reveal">
                                Мы – команда из Набережных Челнов. Под брендом <strong>Спортпит и Точка</strong> мы с
                                2015 года
                                разрабатываем и производим спортивное питание на современном оборудовании, расположенном
                                в
                                Татарстане.
                            </p>
                            <p className="page-text reveal">
                                Наша миссия – создавать продукты, которые помогают людям достигать своих целей и
                                вдохновляют
                                их на новые достижения.
                            </p>
                        </div>
                    </div>
                </section>

                <div className="text-container size reveal">
                    <div className="leader">
                        <div className="leader-text">
                            <h2 className="page-subtitle">Руководство</h2>
                            <p className="page-text">
                                30-летний опыт управления, дипломы MBA и высокие достижения в авторитетных рейтингах —
                                наша команда профессионалов гарантирует надежность и успех «Спортпит — и точка».
                            </p>
                        </div>
                        <img src="img/vladoos.png"/>
                    </div>
                </div>

                <div className="company-values reveal">
                    <div className="size">
                        <h2 className="page-subtitle">Что для нас важно?</h2>
                        <p className="page-text">
                            Для нас важно выпускать актуальные и проверенные продукты, основываясь на рекомендациях
                            профессионалов. Мы используем проверенные технологии и опыт, чтобы гарантировать качество.
                        </p>
                    </div>
                </div>

                <div className="divider size reveal">

                    <div>
                        <h2 className="page-subtitle">Наш ассортимент</h2>
                        <p className="page-text">
                            Мы предлагаем протеины в различных вкусах, идеальные для любого способа приготовления. В
                            нашем ассортименте также есть высокобелковые снеки — батончики и печенье без сахара для
                            здорового перекуса.
                        </p>
                    </div>
                    <img src="/img/foraboutus.png"/>
                </div>
                <div className="blocks size reveal">
                    <iframe
                        width="100%"
                        height="716"
                        src="https://www.youtube.com/embed/O9jX1hvTyzQ"
                        title="Магазин спортивного питания «Geneticshop»"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="blocks size reveal">
                    <h2 className="page-subtitle">И это еще не все...</h2>
                    <p className="page-text">
                        Мы заботимся о наших клиентах, предлагая доступные цены и удобную доставку. На нашем сайте
                        регулярно проходят акции, розыгрыши и скидки.
                    </p>
                    <p className="page-text">
                        Все это мы делаем для того, чтобы вы могли меняться к лучшему вместе с <strong>Спортпит и
                        Точка</strong>!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
