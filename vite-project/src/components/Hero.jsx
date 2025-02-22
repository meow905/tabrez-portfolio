import React from "react";
import hero from "../assets/hero.jpg"

export default function Hero() {
    return (
      <section id="main" className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title">Hi I'm Tabrez</h1>
          <p className="hero__description">
            I am a front-end developer from Dushanbe, I create projects using
            React, if you are interested in learning more, contact me!
          </p>
          <a href="mailTo:tabrezbunny@gmail.com" className="hero__contactBtn">
            Contact
          </a>
        </div>
        <img src={hero} alt="heroImg" className="hero__img" />
        <div className="hero__topBlur"></div>
      </section>
    );
}