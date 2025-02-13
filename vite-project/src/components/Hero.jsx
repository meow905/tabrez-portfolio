import React from "react";
import hero from "../assets/hero.jpg"

export default function Hero() {
    return (
      <section id="main" className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title">Привет, меня зовут Табрез</h1>
          <p className="hero__description">
            Я фронтенд разработчик из Душанбе, создаю проекты на React, если
            интересно узнать больше, свяжись со мной
          </p>
          <a href="mailTo:tabrezbunny@gmail.com" className="hero__contactBtn">
            Написать
          </a>
        </div>
        <img src={hero} alt="heroImg" className="hero__img" />
        <div className="hero__topBlur"></div>
      </section>
    );
}