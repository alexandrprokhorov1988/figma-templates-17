import React from 'react';
import './Collection.css';
import imageMain from '../../images/collection-main.png';
import imageLeft from '../../images/collection-left.png';
import imageRight from '../../images/collection-right.png';

function Collection() {
  return (
    <section className="collection">
      <div className="collection__container">
        <div className="collection__news">
          <p className="collection__tag">Новинки коллекций</p>
          <h2 className="collection__title">Март 1980 Урожай Марселя</h2>
          <p className="collection__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat enim tortor
            in hac id imperdiet adipiscing. Pellentesque nisi, mi sit non sit sed fermentum. Felis adipiscing morbi
            sodales ac.</p>
          <div className="collection__description">
            <div className="collection__description-grid">
              <p className="collection__vine-year">1980</p>
              <p className="collection__vine-name">Colli Euganei Bianco Ca' Lustra 1980</p>
              <p className="collection__vine-subname">Красочная бутылка вина из Марселя</p>
            </div>
            <div className="collection__description-grid">
              <p className="collection__vine-year">1980</p>
              <p className="collection__vine-name">Colli Euganei Bianco Ca' Lustra 1980</p>
              <p className="collection__vine-subname">Красочная бутылка вина из Марселя</p>
            </div>
            <div className="collection__description-grid">
              <p className="collection__vine-year">1980</p>
              <p className="collection__vine-name">Colli Euganei Bianco Ca' Lustra 1980</p>
              <p className="collection__vine-subname">Красочная бутылка вина из Марселя</p>
            </div>
          </div>
          <p className="collection__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat enim tortor
            in hac id imperdiet adipiscing. Pellentesque nisi, mi sit non sit sed fermentum. Felis adipiscing morbi
            sodales ac.</p>
          <button className="collection__button">узнать подробнее</button>
        </div>
        <div className="collection__photo-grid">
          <img className="collection__img collection__img_position_main" src={imageMain} alt="Вино"/>
          <img className="collection__img collection__img_position_left" src={imageLeft} alt="Вино"/>
          <img className="collection__img collection__img_position_right" src={imageRight} alt="Вино"/>
        </div>
      </div>
    </section>
  )
}

export default Collection;
