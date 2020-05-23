import React, { Component } from "react";

import { useTranslation } from "react-i18next";

const ContactDetails = () => {
  const { t, i18n } = useTranslation();
  return <div>{t("contactdetails.label")}</div>;
};

const AboutMe = () => {
  const { t, i18n } = useTranslation();
  return <div>{t("aboutme.label")}</div>;
};

export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/xavier.jpg" alt="" />
          </div>

          <div className="nine columns main-col">
            <h2>
              <AboutMe />
            </h2>
            <p>{resumeData.aboutme1}</p>
            <p>{resumeData.aboutme2}</p>
            <p>{resumeData.aboutme3}</p>
            <p>{resumeData.aboutme4}</p>
            {/* <div className="row">
              <div className="columns contact-details">
                <h2>
                  <ContactDetails />
                </h2>
                <p className="address">
                  <span>{resumeData.name}</span>
                  <br></br>
                  <span>{resumeData.address}</span>
                  <br></br>
                  <span>{resumeData.email}</span>
                  <br></br>
                </p>
              </div>
            </div>*/}
          </div>
        </div>
      </section>
    );
  }
}
