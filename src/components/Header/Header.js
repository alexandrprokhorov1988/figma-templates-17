import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__contacts">
          <p className="header__text">Новокузнечный переулок 4/1</p>
          <p className="header__text">8 (812) 123-45-67</p>
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a href="#" className="header__nav-link">Каталог</a>
            </li>
            <li className="header__nav-item">
              <a href="#" className="header__nav-link">Доставка</a>
            </li>
            <li className="header__nav-item">
              <a href="#" className="header__nav-link">Коллекции</a>
            </li>
            <li className="header__nav-item">
              <a href="#" className="header__nav-link">Контакты</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="header__buttons-container">
          <button className="header__button">винная карта</button>
          <button className="header__button">дегустация</button>
        </div>

    </header>
  );
}

export default Header;
