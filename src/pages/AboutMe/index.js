import smallAvatar from "../../Assets/images/pictures/small_Avatar.jpg";
import { instagram, twitter, youtube } from "../../Assets/images/symbols/";
import "../../Assets/styles/aboutMe.scss";

const AboutMe = () => {
  return (
    <>
      <div className="aboutMePageWeb page">
        <img className="avatar" src={smallAvatar} alt="smallAvatar" />
        <div className="aboutMePage_content">
          <div className="aboutMePage_text">
            <p className="aboutMePage_title">
              Hey! I'm <b>Marta Nosowka.</b>
            </p>
            <p>
              I am an <b>illustrator</b> of books aimed mainly at children.{" "}
              <br />I work with "<b>Two Sisters publishing</b>". I also create
              drawings
              <br /> for the <b>Cross magazine</b>.
            </p>
            <p>
              <b>
                See <a id="socialLink" href="/">my Porfolio</a>!
              </b>
            </p>

            <p>
              Have a nive day!
              <br />
              <i>- Marta</i>
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
      {/* Mobile version */}
      <div className="aboutMePageMobile">
        <div className="aboutMePage_header">
          <img className="avatar" src={smallAvatar} alt="smallAvatar" />
          <p className="aboutMePage_title">
            Hey! I'm <br />
            <b>Marta Nosowka.</b>
          </p>
        </div>
        <div className="aboutMePage_content">
          <div className="aboutMePage_text">
            <p>
              I am an <b>illustrator</b> of books aimed mainly <br /> at
              children. I work with "
              <b>
                Two Sisters
                <br /> publishing
              </b>
              ". I also create drawings for
              <br /> the <b>Przekrój magazine</b>.
            </p>
            <p>
              <b>
                See <a id="socialLink" href="/portfolio">my Porfolio</a>!
              </b>
            </p>

            <p>
              Have a nive day!
              <br />
              <em>- Marta</em>
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
    </>
  );
};

export default AboutMe;
