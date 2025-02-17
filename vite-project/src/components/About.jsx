import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import hero from "../assets/hero.jpg";
import { useState } from "react";
export default function About() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/myCV.docx";
    link.setAttribute("download", "myCV.docx");
    document.body.appendChild(link);
    link.click()
    document.body.removeChild(link);
  };
  const [border, setBorder] =useState(false)
  return (
    <section className="about__container" id="about">
      <div className="about__content">
        <img src={hero} alt="heroImg" className="about__img " />
        <div className="about__title">
          <h2>Обо мне</h2>
          <Disclosure>
            <p>
              <DisclosureButton
                className={border ? "about__title3" : "about__title2"}
                onClick={()=> setBorder(!border)}
              >
                Работаю на данный момент в Илмхоне в качестве инструктора по
                HTML & CSS а также JS,
              </DisclosureButton>
              <DisclosurePanel>
                мечтаю реализоваться как крутой front dev. Больше информации вы
                можете получить нажав на кнопку и скачав CV
              </DisclosurePanel>
            </p>
          </Disclosure>
          <a className="hero__contactBtn" onClick={handleDownload}>
            Скачать CV
          </a>
        </div>
      </div>
    </section>
  );
}
