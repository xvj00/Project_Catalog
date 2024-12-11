import React from "react";
import {Link} from "react-router-dom";
/*import "../App.css";*/
import "./style/Header.css"

const Header = () => {
    return (
            <header className="header">
                <div className="header-menu-container">
                    <div className="header-menu size">
                        <div className="header-logo">
                            <Link to="/" className="logo"><img src="img/logo.svg"/></Link>

                        </div>
                        <div className="header-contacts">

                            <a href="tel:709062281337"><img className="icon-phone" src="img/tel.svg"/></a>
                            <div className="text-container">
                                <a href="tel:709062281337"><p>+7 (906) 228-13-37</p></a>
                                <p>Пн-Пт с 9:00 до 18:00 (МСК)</p>
                            </div>
                        </div>
                        <div className="header-icons">
                            <Link to="/heart" className="heart"><img className="icon-heart" src="img/heart.svg"/></Link>
                            <Link to="/cart" className="cart"><img className="icon-cart" src="img/cart.svg"/></Link>

                        </div>
                    </div>
                </div>

                <nav className="header-nav size">
                    <ul className="nav-list">
                        <li className="nav-element"><Link to="/">Главная</Link></li>
                        <li className="nav-element"><Link to="/about">О нас</Link></li>
                        <li className="nav-element"><Link to="/promotion">Акция</Link></li>
                        <li className="nav-element"><Link to="/partners">Стать партнером</Link></li>
                        <li className="nav-element"><Link to="/orders">Где забрать заказ</Link></li>
                    </ul>
                </nav>
            </header>




    );
};

export default Header;
