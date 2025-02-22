import emailIcon from "../assets/emailIcon.png"
import telegram from "../assets/Telegram_(software)-Logo.wine.svg";


export default function Contact() {
    return (
      <footer className="contact__container" id="contact">
        <div className="contact__text">
          <h2>Contacts</h2>
          <p>Get in touch with me</p>
        </div>
        <ul className="contact__links">
          <li className="contact__link">
            <img className="contactImg" src={emailIcon} alt="email" />
            <a href="mailto:tabrezbunny@gmail.com">tabrezbunny@gmail.com</a>
          </li>
          <li className="contact__link">
            <img className="contactImg2" src={telegram} alt="telegramm" />
            <a href="mailto:tabrezbunny@gmail.com">@tabrez_san</a>
          </li>
        </ul>
      </footer>
    );
}