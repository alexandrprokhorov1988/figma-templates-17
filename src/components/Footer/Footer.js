import React from 'react';
import './Footer.css';
import youtubeIcon from '../../images/carbon_logo-youtube.svg';
import vkIcon from '../../images/entypo-social_vk.svg';
import fbIcon from '../../images/bx_bxl-facebook.svg';

function Footer() {
  return (
    <footer className="footer">

      <nav className="footer__nav">
        <ul className="footer__nav-list footer__nav-list_type_nav">
          <li className="footer__nav-item">
            <a href="#" className="footer__nav-link footer__nav-link_type_nav">Главная</a>
          </li>
          <li className="footer__nav-item">
            <a href="#" className="footer__nav-link footer__nav-link_type_nav">Каталог</a>
          </li>
          <li className="footer__nav-item">
            <a href="#" className="footer__nav-link footer__nav-link_type_nav">Поставщики</a>
          </li>
          <li className="footer__nav-item">
            <a href="#" className="footer__nav-link footer__nav-link_type_nav">Коллекции</a>
          </li>
          <li className="footer__nav-item">
            <a href="#" className="footer__nav-link footer__nav-link_type_nav">Дегустация</a>
          </li>
          <li className="footer__nav-item">
            <a href="#" className="footer__nav-link footer__nav-link_type_nav">Коллекция 2020</a>
          </li>
          <li className="footer__nav-item">
            <a href="#" className="footer__nav-link footer__nav-link_type_nav">Контакты</a>
          </li>
        </ul>
      </nav>


      <nav className="footer__nav">
        <ul className="footer__nav-list footer__nav-list_type_social">
          <li className="footer__nav-item footer__nav-item_type_social">
            <p className="footer__nav-text">ВИННЫЙ БУТИК LE CORTE</p>
          </li>
          <li className="footer__nav-item footer__nav-item_type_social">
            <p className="footer__nav-text">8 (812) 123-45-67</p>
          </li>
          <li className="footer__nav-item footer__nav-item_type_social footer__nav-item_type_icon">
            <a href="#" className="footer__nav-link footer__nav-link_type_icon">
              <img className="footer__social-icon" src={youtubeIcon} alt="youtube"/>
            </a>
            <a href="#" className="footer__nav-link footer__nav-link_type_icon">
              <img className="footer__social-icon" src={vkIcon} alt="vk"/>
            </a>
            <a href="#" className="footer__nav-link footer__nav-link_type_icon">
              <img className="footer__social-icon" src={fbIcon} alt="fb"/>
            </a>
          </li>
          <li className="footer__nav-item footer__nav-item_type_social">
            <p className="footer__nav-text">© le-corte.ru</p>
          </li>
        </ul>
      </nav>

    </footer>
  );
}

export default Footer;
