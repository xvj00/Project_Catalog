import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import products from '../DataProduct'; // Импортируйте массив продуктов
import Modal from 'react-modal';

const ProductPage = () => {
    const { id } = useParams(); // Получаем id из URL
    const product = products.find(p => p.id === parseInt(id)); // Находим продукт по id
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [mainImage, setMainImage] = useState(product?.image?.[0] || ''); // Устанавливаем первое изображение как основное

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const modalContent = (
        <div className="size">
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
                <div className="modal-footer">
                    <button type="button" id="closeModal" onClick={closeModal} className="btn btn-close">Закрыть</button>
                    <button type="submit" className="btn btn-primary">Отправить заявку</button>
                </div>
            </form>
        </div>
    );

    if (!product) {
        return <div>Продукт не найден.</div>; // Обработка случая, если продукт не найден
    }

    // Функции для смены основного изображения
    const handleMouseEnter = (image) => {
        setMainImage(image); // Меняем основное изображение при наведении
    };

    const handleMouseLeave = () => {
        setMainImage(product.image[0]); // При уходе с миниатюры возвращаем первое изображение
    };

    return (
        <div className="size">
            <div className="product-card size">
                <div className="product-details">
                    <div className="image-thumbnails">
                        {product.image.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`thumbnail ${index}`}
                                className="thumbnail"
                                onMouseEnter={() => handleMouseEnter(image)} // Меняем основное изображение при наведении
                                onMouseLeave={handleMouseLeave} // Возвращаем основное изображение
                            />
                        ))}
                    </div>
                    {/* Отображаем основное изображение */}
                        <img src={mainImage} alt={product.name} className="product-image-full"/>

                    {/* Блок с миниатюрами изображений */}


                    <div className="product-info">
                        <h1>{product.name}</h1>
                        <div className="rating">
                            {Array.from({length: product.rating}).map((_, index) => (
                                <img key={index} src="/img/StarFill.svg" alt="filled star"/>
                            ))}
                            {Array.from({length: 5 - product.rating}).map((_, index) => (
                                <img key={index + product.rating} src="/img/starLine.svg" alt="empty star"/>
                            ))}
                        </div>
                        <p>
                            {product.new && <span className="badge badge-new">Новинка!</span>}
                            {product.sale && <span className="badge badge-sale">Распродажа!</span>}
                        </p>

                        <div className="details">
                            <div>
                                <ul>
                                    {product.settings.map((setting, index) => (
                                        <div key={index}>
                                            <li>Вкус: {setting.vkys}</li>
                                            <li>Тип: {setting.type}</li>
                                            <li>Объем: {setting.v}</li>
                                            <li>Формат выпуска: {setting.format}</li>
                                        </div>
                                    ))}
                                </ul>
                            </div>
                            <p className="description">{product.description}</p>
                            <p className="price">Цена: {product.price} ₽</p>
                            <button className="order-call-button" onClick={openModal}>
                                Заказать звонок
                            </button>
                        </div>
                    </div>

                </div>
            </div>
            <Modal
                style={{
                    overlay: {
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                    },
                    content: {
                        top: "50%",
                        left: "50%",
                        right: "auto",
                        bottom: "auto",
                        marginRight: "-50%",
                        transform: "translate(-50%, -50%)",
                        padding: "20px",
                        borderRadius: "10px",
                    },
                }}
                isOpen={modalIsOpen} onRequestClose={closeModal}>
                {modalContent}
            </Modal>
        </div>
    );
};

export default ProductPage;
