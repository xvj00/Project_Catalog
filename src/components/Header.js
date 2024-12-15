import React, {useState} from "react";
import {Link} from "react-router-dom";
import {slide as Menu} from 'react-burger-menu'
import Hamburger from "hamburger-react";
/*import "../App.css";*/
import "./style/Header.css"

const Header = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <header className="header">
            <Menu
                isOpen={isOpen}
                onStateChange={({isOpen}) => setOpen(isOpen)}
                customBurgerIcon={false}
                right={true}
                width={'280px'}
            >
                <ul className="nav-list">
                    <li className="nav-element"><Link to="/">Главная</Link></li>
                    <li className="nav-element"><Link to="/about">О нас</Link></li>
                    <li className="nav-element"><Link to="/promotion">Акция</Link></li>
                    <li className="nav-element"><Link to="/partners">Стать партнером</Link></li>
                    <li className="nav-element"><Link to="/location">Где забрать заказ</Link></li>
                </ul>
            </Menu>
            <div className="header-menu-container">
                <div className="header-menu size">
                    <div className="header-logo">
                        <Link to="/" className="logo"><img src="img/icontext.svg"/></Link>

                    </div>
                    <Hamburger toggled={isOpen} toggle={setOpen}/>

                    <div className="header-icons">
                        <div className="header-contacts">

                            <a href="tel:709062281337"><img className="icon-phone" src="img/tel.svg"/></a>
                            <div className="text-container">
                                <a href="tel:709062281337"><p>+7 (906) 228-13-37</p></a>
                                <p>Пн-Пт с 9:00 до 18:00 (МСК)</p>
                            </div>
                        </div>
                        <ul className="footer__social">
                            <li><a href="https://vk.com/audio458976803_456247019_1ef7dcf10e111d644c"><img src="img/vk.svg"/></a></li>
                            <li><a href="https://t.me/xvjss"><img src="img/telegram.svg"/></a></li>

                        </ul>

                    </div>
                </div>
            </div>

            <nav className="header-nav hidden size">
                <ul className="nav-list">
                    <li className="nav-element"><Link to="/">Главная</Link></li>
                    <li className="nav-element"><Link to="/about">О нас</Link></li>
                    <li className="nav-element"><Link to="/promotion">Акция</Link></li>
                    <li className="nav-element"><Link to="/partners">Стать партнером</Link></li>
                    <li className="nav-element"><Link to="/location">Где забрать заказ</Link></li>
                </ul>
            </nav>
        </header>


    );
};

export default Header;
