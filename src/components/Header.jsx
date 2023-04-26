import React from "react";

const Header = () => {
    return(
        <header>
            <div className="logo">
                <img src="img/logo1.png" alt="Логотип сайта" className="logo-img"/>
                <h1 className="logo">Food Planet</h1>
                <p className="logo-in-russian">Планета вкусной еды</p>
            </div>
            <div className="menu">
                <ul>
                    <li><a href="#" className="home">Главная</a></li>
                    <li><a href="#">Меню</a></li>
                    <li><a href="#">Доставка</a></li>
                    <li><a href="#">Контакты</a></li>
                    <li><a href="#"><img src="img/phone-number.svg"/>+996500405988</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;