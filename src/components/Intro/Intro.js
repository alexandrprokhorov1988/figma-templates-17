import React from 'react';
import './Intro.css';
import img from '../../images/intro_img_1.png';

function Intro() {
  return (
    <section className="intro">
      <div className="intro__container">
        <h2 className="intro__title">Лучший вкус, это вкус долголетнего вина</h2>
        <p className="intro__subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat enim tortor in hac id imperdiet adipiscing.
          Pellentesque nisi, mi sit non sit sed fermentum. Felis adipiscing morbi sodales ac. Mauris dictumst risus
          pulvinar blandit elit. Vestibulum quam ultrices nascetur et viverra suscipit. Proin vitae aliquet leo aliquam
          amet rutrum. Lectus auctor purus ultrices enim ultrices. Augue fringilla tellus tortor orci ultrices sed.
          Viverra cras sapien, pellentesque viverra malesuada. Tellus dolor, eget vitae dignissim molestie eget sit
          duis. Vitae dui vel pretium euismod diam. Pellentesque amet, lacus, amet, quis risus. Pellentesque scelerisque
          nunc, orci aliquam quis.
        </p>
        <img className="intro__img" src={img} alt="Картинка"/>
      </div>
    </section>
  );
}

export default Intro;
