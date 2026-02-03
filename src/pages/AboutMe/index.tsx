import { Instagram, Twitter, Youtube } from '@/assets/symbols';
import "@/styles/pages/aboutMe.scss";

interface AboutMeProps {
  theme?: string;
}

const AboutMe: React.FC<AboutMeProps> = () => {
  return (
    <>
      <div className="aboutMePage">
        <img className="aboutMePage__avatar" src="/images/small_Avatar.jpg" alt="smallAvatar" />
        <div className="aboutMePage__content">
          <div className="aboutMePage__text">
            <div className="aboutMePage__header">
              <img className="aboutMePage__header__avatar" src="/images/small_Avatar.jpg" alt="smallAvatar" />
              <h2 className="aboutMePage__header__title">
                Hey! I'm <span className="aboutMePage__header__title__name">Marta Nosowka.</span>
              </h2>
            </div>
            <p className="aboutMePage__text__paragraph">
              I am an <b>illustrator</b> of books aimed mainly at children.{" "}
              <br />I work with "<b>Two Sisters publishing</b>". I also create
              drawings
              <br /> for the <b>Cross magazine</b>.
            </p>
            <p className="aboutMePage__text__paragraph">
              <b>
                See <a className="aboutMePage__socialLink" href="/">my Porfolio</a>!
              </b>
            </p>

            <p className="aboutMePage__text__paragraph">
              Have a nive day!
              <br />
              <i>- Marta</i>
            </p>
          </div>
          <div className="aboutMePage__socialLinks">
            <Instagram className="aboutMePage__socialLinks__item" />
            <Twitter className="aboutMePage__socialLinks__item" />
            <Youtube className="aboutMePage__socialLinks__item" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
