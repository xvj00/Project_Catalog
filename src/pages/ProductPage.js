import React, {useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import products from '../DataProduct'; // Импортируйте массив продуктов
import Modal from 'react-modal';

const ProductPage = () => {
    const {id} = useParams(); // Получаем id из URL
    const product = products.find(p => p.id === parseInt(id)); // Находим продукт по id
    const [modalIsOpen, setModalIsOpen] = useState(false);
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
                    <button type="button" id="closeModal" onClick={closeModal} className="btn btn-close">Закрыть
                    </button>
                    <button type="submit" className="btn btn-primary">Отправить заявку</button>
                </div>
            </form>
        </div>
    );

    if (!product) {
        return <div>Продукт не найден.</div>; // Обработка случая, если продукт не найден
    }
    return (
        <div className="size">
            <div className="product-card size">
                <Link to={'/'}>
                    <button className="back">
                        Назад
                    </button>
                </Link>
                <div className="product-details">
                    <img src={product.image} alt={product.name} className="product-image-full"/>

                    <div className="product-info">
                        <h1>{product.name}</h1>
                        <div className="rating">
                            {'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)}
                        </div>
                        <p>      {product.new && <span className="badge badge-new">Новинка!</span>}
                            {product.sale && <span className="badge badge-sale">Распродажа!</span>}</p>

                        <div className="details">
                            <div>
                                <ul>
                                    {product.settings.map((setting) => (
                                        <div>
                                            <li>Вкус: {setting.vkys}</li>
                                            <li>Тип: {setting.type}</li>
                                            <li>Объем: {setting.v} мл</li>
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
                        width: "30%",
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
