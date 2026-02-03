import { Mail, Phone, Instagram, Twitter, Youtube } from '@/assets/symbols';
import "@/styles/pages/contact.scss";


export default function Contact() {
  return (
    <div className="contactPage">
      <img className="contactPage__avatar" src="/images/small_Avatar.jpg" alt="smallAvatar" />
      <div className="contactPage__content">
      <div className="contactPage__header">
        <img className="contactPage__header__avatar" src="/images/small_Avatar.jpg" alt="smallAvatar" />
        <h1 className="contactPage__header__title">Contact</h1>
      </div>
      <div className="contactPage__contactInfo">
        <div className="contactPage__contactInfo__item">
          <Mail className="contactPage__contactInfo__item__icon"/>
          <p>martanosowska@gmail.com</p>
        </div>
        <div className="contactPage__contactInfo__item">
          <Phone className="contactPage__contactInfo__item__icon"/>
          <p>+48 123 123 123</p>
        </div>
      </div>
      <div className="contactPage__social">
        <div className="contactPage__social__item">
          <Instagram />
          <span>@ma.noska</span>
        </div>
        <div className="contactPage__social__item">
          <Twitter />
          <span>@ma.noska</span>
        </div>
        <div className="contactPage__social__item">
          <Youtube />
          <span>@rysunki_noska</span>
          </div>
        </div>
      </div>
    </div>
  );
};
