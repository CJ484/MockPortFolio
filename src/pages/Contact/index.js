import {
  instagram,
  twitter,
  youtube,
  Mail,
  Phone,
} from "../../Assets/images/symbols";
import smallAvatar from "../../Assets/images/pictures/small_Avatar.jpg";
import "../../Assets/styles/contact.scss";
const Contact = ({theme}) => {
  return (
    <>
      <div className="contactPage page">
        <img className="avatarImg" src={smallAvatar} alt="smallAvatar" />
        <div>
          <h1 className="contact_header">Contact</h1>
          <div className="contact_primary">
            <div className="contact_primary_item">
              <Mail theme={theme}/>
              <p>martanosowska@gmail.com</p>
            </div>
            <div className="contact_primary_item">
              <Phone theme={theme}/>
              <p>+48 123 123 123</p>
            </div>
          </div>
          <div className="contact_social">
            <div className="contact_social_item">
              <img src={instagram} alt="instagram" />
              <p id="socialLink">@ma.noska</p>
            </div>
            <div className="contact_social_item">
              <img src={twitter} alt="twitter" />
              <p id="socialLink">@ma.noska</p>
            </div>
            <div className="contact_social_item">
              <img src={youtube} alt="youtube" />
              <p id="socialLink">@rysunki_noska</p>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile version */}
      <div className="contactPageMobile page">
        <div className="contactMobile_header">
          <img className="avatarImg" src={smallAvatar} alt="smallAvatar" />
          <h1 className="contactMobile_title">Contact</h1>
        </div>
        <div className="contactMobile_primary">
          <div className="contactMobile_primary_item">
            <Mail theme={theme}/>
            <p>martanosowska@gmail.com</p>
          </div>
          <div className="contactMobile_primary_item">
            <Phone theme={theme}/>
            <p>+48 123 123 123</p>
          </div>
        </div>
        <div className="contactMobile_social">
          <div className="contactMobile_social_item">
            <img src={instagram} alt="instagram" />
            <p id="socialLink">@ma.noska</p>
          </div>
          <div className="contactMobile_social_item">
            <img src={twitter} alt="twitter" />
            <p id="socialLink">@ma.noska</p>
          </div>
          <div className="contactMobile_social_item">
            <img src={youtube} alt="youtube" />
            <p id="socialLink">@rysunki_noska</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
