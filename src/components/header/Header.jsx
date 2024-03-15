import React from 'react';


const Header = () => {
    return (
        <header className={'header'}>
            <div className="header-inner">
                <div className="logo">
                    <div></div>
                    <img src="/img/logo.svg" alt="logo" className={'logo_img'}/>

                </div>
                <nav className={'nav_menu'}>
                    <ul>
                        <li><a href="">Обо мне</a></li>
                        <li><a href="">Наставничество</a></li>
                        <li><a href="">Мероприятия</a></li>
                        <li><a href="">Кейсы</a></li>
                        <li><a href="">Отзывы</a></li>
                        <li><a href="">Контакты</a></li>
                    </ul>
                </nav>
                <div className="phone">
                    <img src="/img/phone1.png" alt="phone"/>
                </div>
            </div>
        </header>
    );
};

export default Header;