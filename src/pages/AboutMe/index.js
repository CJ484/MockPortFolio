import smallAvatar from "../../Assets/images/pictures/small_Avatar.jpg";
import { instagram, twitter, youtube } from "../../Assets/images/symbols/";
import "../../Assets/styles/aboutMe.scss";

const AboutMe = () => {
  return (
    <div className="aboutMePage">
      <img className="avatar" src={smallAvatar} alt="smallAvatar" />
      <div className="aboutMePage_content">
        <div className="aboutMePage_text">
          <p className="aboutMePage_Header">
            Hey! I'm <b>Marta Nosowka.</b>
          </p>
          <p>
            I am an <b>illustrator</b> of books aimed mainly at children. <br />
            I work with "<b>Two Sisters publishing</b>". I also create drawings
            <br /> for the <b>Cross magazine</b>.
          </p>
          <p>
            <b>
              See <a href="/">my Porfolio</a>!
            </b>
          </p>

          <p>
            Have a nive day!
            <br /><i>- Marta</i>
          </p>
        </div>
        <div className="socialLinks">
          <img
            className="socialLink_item"
            src={instagram}
            alt="instagram logo"
          />
          <img className="socialLink_item" src={twitter} alt="twitter logo" />
          <img className="socialLink_item" src={youtube} alt="youtube logo" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
