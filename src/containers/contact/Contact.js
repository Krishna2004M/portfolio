import React, {useContext} from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {illustration, contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div style={{ position: "relative", padding: "20px" }}>
          <div style={{ 
            position: "absolute",
            top: "0",
            right: "50px",
            zIndex: "1"
          }}>
            <img
              alt="Krishna's photo"
              src="/photo.jpg"
              style={{ 
                width: "400px",
                height: "400px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "8px solid #8957ff",
                boxShadow: "0 0 20px rgba(137, 87, 255, 0.4)"
              }}
            />
          </div>
          <div className="contact-div-main">
            <div className="contact-header">
              <h1 className="heading contact-title">{contactInfo.title}</h1>
              <p
                className={
                  isDark
                    ? "dark-mode contact-subtitle"
                    : "subTitle contact-subtitle"
                }
              >
                {contactInfo.subtitle}
              </p>
              <div
                className={
                  isDark ? "dark-mode contact-text-div" : "contact-text-div"
                }
              >
                {contactInfo.number && (
                  <>
                    <a
                      className="contact-detail"
                      href={"tel:" + contactInfo.number}
                    >
                      {contactInfo.number}
                    </a>
                    <br />
                    <br />
                  </>
                )}
                <a
                  className="contact-detail-email"
                  href={"mailto:" + contactInfo.email_address}
                >
                  {contactInfo.email_address}
                </a>
                <br />
                <br />
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
