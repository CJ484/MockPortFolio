import { instagram, twitter, youtube, mail, phone } from "../../Assets/images/symbols";
import smallAvatar from "../../Assets/images/pictures/small_Avatar.jpg";
import "../../Assets/styles/contact.scss";
const Contact = () => {
  return (
    <div className="contactPage">
      <img className="avatarImg" src={smallAvatar} alt="smallAvatar" />
      <div>
        <h1 className="contact_header">Contact</h1>
        <div className="contact_primary">
            <div className="contact_primary_item">
                <img src={mail} alt="email" />
                <p>martanosowska@gmail.com</p>
            </div>
            <div className="contact_primary_item">
                <img src={phone} alt="phone" />
                <p>+48 123 123 123</p>
            </div>
        </div>
        <div className="contact_social">
            <div className="contact_social_item">
                <img src={instagram} alt="instagram"/>
                <p>@ma.noska</p>
            </div>
            <div className="contact_social_item">
                <img src={twitter} alt="twitter"/>
                <p>@ma.noska</p>
            </div>
            <div className="contact_social_item">
                <img src={youtube} alt="youtube"/>
                <p>@rysunki_noska</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
