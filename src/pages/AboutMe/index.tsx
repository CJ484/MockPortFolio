import "@/styles/pages/aboutMe.scss";

interface AboutMeProps {
  theme?: string;
}

const AboutMe: React.FC<AboutMeProps> = () => {
  return (
    <>
      <div className="aboutMePageWeb page">
        <img className="avatar" src="/images/small_Avatar.jpg" alt="smallAvatar" />
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
              src="/symbols/instagram.svg"
              alt="instagram logo"
            />
            <img className="socialLink_item" src="/symbols/twitter.svg" alt="twitter logo" />
            <img className="socialLink_item" src="/symbols/youtube.svg" alt="youtube logo" />
          </div>
        </div>
      </div>
      {/* Mobile version */}
      <div className="aboutMePageMobile">
        <div className="aboutMePage_header">
          <img className="avatar" src="/images/small_Avatar.jpg" alt="smallAvatar" />
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
              src="/symbols/instagram.svg"
              alt="instagram logo"
            />
            <img className="socialLink_item" src="/symbols/twitter.svg" alt="twitter logo" />
            <img className="socialLink_item" src="/symbols/youtube.svg" alt="youtube logo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
