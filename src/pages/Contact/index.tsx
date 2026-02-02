import {useMediaQuery} from "usehooks-ts";
import "@/styles/pages/contact.scss";


export default function Contact() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  if (!isMobile) {
    return (
      <div className="contactPage page">
        <img className="avatarImg" src="/images/small_Avatar.jpg" alt="smallAvatar" />
        <div>
          <h1 className="contact_header">Contact</h1>
          <div className="contact_primary">
            <div className="contact_primary_item">
              <img src="/symbols/Mail.svg" alt="Mail" />
              <p>martanosowska@gmail.com</p>
            </div>
            <div className="contact_primary_item">
              <img src="/symbols/Phone.svg" alt="Phone" />
              <p>+48 123 123 123</p>
            </div>
          </div>
          <div className="contact_social">
            <div className="contact_social_item">
              <img src="/symbols/instagram.svg" alt="instagram" />
              <p id="socialLink">@ma.noska</p>
            </div>
            <div className="contact_social_item">
              <img src="/symbols/twitter.svg" alt="twitter" />
              <p id="socialLink">@ma.noska</p>
            </div>
            <div className="contact_social_item">
              <img src="/symbols/youtube.svg" alt="youtube" />
              <p id="socialLink">@rysunki_noska</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      {/* Mobile version */}
      <div className="contactPageMobile page">
        <div className="contactMobile_header">
          <img className="avatarImg" src="/images/small_Avatar.jpg" alt="smallAvatar" />
          <h1 className="contactMobile_title">Contact</h1>
        </div>
        <div className="contactMobile_primary">
          <div className="contactMobile_primary_item">
            <img src="/symbols/Mail.svg" alt="Mail" />
            <p>martanosowska@gmail.com</p>
          </div>
          <div className="contactMobile_primary_item">
            <img src="/symbols/Phone.svg" alt="Phone" />
            <p>+48 123 123 123</p>
          </div>
        </div>
        <div className="contactMobile_social">
          <div className="contactMobile_social_item">
            <img src="/symbols/instagram.svg" alt="instagram" />
            <p id="socialLink">@ma.noska</p>
          </div>
          <div className="contactMobile_social_item">
            <img src="/symbols/twitter.svg" alt="twitter" />
            <p id="socialLink">@ma.noska</p>
          </div>
          <div className="contactMobile_social_item">
            <img src="/symbols/youtube.svg" alt="youtube" />
            <p id="socialLink">@rysunki_noska</p>
          </div>
        </div>
      </div>
    </>
  );
};
