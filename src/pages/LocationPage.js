import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import '../App.css';

function PickupLocations() {
    useEffect(() => {
        // Инициализация ScrollReveal
        ScrollReveal().reveal(".reveal", {
            duration: 1000,
            distance: "50px",
            origin: "bottom",
            delay: 200,

        });
    }, []);

    return (
        <div className="location">
            <h1 className="page-title size reveal">Где забрать заказ</h1>

            <div className="map-container reveal">
                <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A7506590fc3019a8c3d8e0b6000e2595e30579e88ffdbfcdead1e7e7b2aa8838d&amp;source=constructor"
                    width="100%"
                    height="600"
                    frameBorder="0">
                </iframe>
                <div className="map-overlay">
                    <div className="contacts-box size reveal">
                        <h2>Ждём тебя</h2>
                        <p className="page-text reveal">Приходи к нам:</p>
                        <p className="page-text reveal">
                            Казань,<br />
                            ул. Большая Конюшенная, 19
                        </p>
                        <p className="page-text reveal">Позвоните нам:</p>
                        <p className="page-text reveal">+ 7 (228) 133-72-28</p>
                        <p className="page-text reveal">Напишите нам:</p>
                        <p className="page-text reveal">SportPit@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PickupLocations;
