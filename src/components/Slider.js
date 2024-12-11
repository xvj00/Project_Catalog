import React, { useState } from "react";
import data from "../dataImg";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import './style/Slider.css';

const Slider = () => {
    const [sliderImage, setSliderImage] = useState(data);
    const [index, setIndex] = useState(0);

    const handlePrev = () => {
        setIndex((prevState) => (prevState - 1 + sliderImage.length) % sliderImage.length);
    };

    const handleNext = () => {
        setIndex((prevState) => (prevState + 1) % sliderImage.length);
    };




    return (
        <div className="Slider">
            {/* Контейнер с ограниченной шириной для кнопок */}
            <div className="size slider-navigation">
                <button className="prev" onClick={handlePrev}>
                    <FiChevronLeft />
                </button>
                <button className="next" onClick={handleNext}>
                    <FiChevronRight />
                </button>
            </div>
            {/* Контейнер для изображения */}
            <div className="Slider-container">
                {sliderImage.map((sliderImage, sliderImageIndex) => {
                    const { id, image, alt } = sliderImage;
                    let position = "nextSlide";

                    if (sliderImageIndex === index) {
                        position = "activeSlide";
                    }
                    if (
                        sliderImageIndex === index - 1 ||
                        (index === 0 && sliderImageIndex === sliderImage.length - 1)
                    ) {
                        position = "lastSlide";
                    }

                    return (
                        <img
                            key={id}
                            src={image}
                            alt={alt}
                            className={`slider-image ${position}`}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Slider;
