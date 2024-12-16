import React from "react";
import data from "../dataImg";
import {Swiper, SwiperSlide} from "swiper/react";  // Импортируем Swiper и SwiperSlide
import {Navigation, Autoplay} from "swiper/modules";  // Импортируем модули Navigation и Autoplay
import "swiper/css";  // Основные стили
import "swiper/css/navigation";  // Стили для навигации
import "swiper/css/pagination";  // Если нужна пагинация
import './style/Slider.css';
import {FiChevronLeft, FiChevronRight} from "react-icons/fi"; // Ваши кастомные стили

const Slider = () => {
    return (
        <div className="Slider">
            <Swiper
                modules={[Navigation, Autoplay]}  // Передаем модули
                slidesPerView={1}  // Показываем один слайд за раз
                navigation={{
                    prevEl: ".prev",  // Кнопка "Назад"
                    nextEl: ".next",  // Кнопка "Вперед"
                }}
                breakpoints={true}
                loop={true}
                autoplay={{
                    delay: 10000,  // Задержка автопрокрутки
                    disableOnInteraction: false,  // Не останавливать автопрокрутку при взаимодействии
                }}
            >
                {data.map((sliderImage) => {
                    const {id, image, alt} = sliderImage;
                    return (
                        <SwiperSlide key={id}>
                            <img
                                src={image}
                                alt={alt}
                                className="slider-image"
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            {/* Контейнер с кнопками навигации */}
            <div className="slider-navigation size">
                <button className="prev">
                    <FiChevronLeft/>
                </button>
                <button className="next">
                    <FiChevronRight/>
                </button>
            </div>

        </div>
    );
};

export default Slider;
