import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import hero from "../assets/hero.jpg";
import { useState } from "react";
export default function About() {
  
  const [border, setBorder] =useState(false)
  return (
    <section className="about__container" id="about">
      <div className="about__content">
        <img src={hero} alt="heroImg" className="about__img " />
        <div className="about__title">
          <h2>About me</h2>
          <Disclosure>
            <p>
              <DisclosureButton
                className={border ? "about__title3" : "about__title2"}
                onClick={() => setBorder(!border)}
              >
                I am currently working in Ilmkhon as an instructor in HTML & CSS
                and JS
              </DisclosureButton>
              <DisclosurePanel>
                I dream of realizing myself as a cool front dev. You can get
                more information by clicking on the button and downloading the
                CV
              </DisclosurePanel>
            </p>
          </Disclosure>
          <a
            target="_blank"
            className="hero__contactBtn"
            href="https://docs.google.com/document/d/19lgfGhmgXSj_Lxu11AYXSzelmz9Yw58-/edit?usp=sharing&ouid=117973416944816228631&rtpof=true&sd=true"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
