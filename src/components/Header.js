import React, { Component } from "react";
import LanguageSelector from "./LanguageSelector";

import { useTranslation } from "react-i18next";

const Home = () => {
  const { t, i18n } = useTranslation();
  return <div>{t("home.label")}</div>;
};
const Skills = () => {
  const { t, i18n } = useTranslation();
  return <div>{t("skills.label")}</div>;
};
const About = () => {
  const { t, i18n } = useTranslation();
  return <div>{t("about.label")}</div>;
};
const Works = () => {
  const { t, i18n } = useTranslation();
  return <div>{t("works.label")}</div>;
};
const Contact = () => {
  const { t, i18n } = useTranslation();
  return <div>{t("contact.label")}</div>;
};

export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
              Show navigation
            </a>
            <a className="mobile-btn" href="#" title="Hide navigation">
              Hide navigation
            </a>

            <ul id="nav" className="nav">
              <li className="current">
                <a className="smoothscroll" href="#home">
                  <Home />
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#about">
                  <About />
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#resume">
                  <Skills />
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#portfolio">
                  <Works />
                </a>
              </li>

              <li>
                <a className="smoothscroll" href="#contact">
                  <Contact />
                </a>
              </li>
            </ul>
            <ul id="nav2">
              <li>
                <LanguageSelector />
              </li>
            </ul>
          </nav>

          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">{resumeData.name}</h1>
              <h3 style={{ color: "#edc1be", fontFamily: "sans-serif " }}>
                {resumeData.role}
              </h3>
              <h3 style={{ color: "#fff", fontFamily: "sans-serif " }}>
                {resumeData.roleDescription}
              </h3>
              <hr />
              <ul className="social">
                {resumeData.socialLinks &&
                  resumeData.socialLinks.map((item) => {
                    return (
                      <li key={item.name}>
                        <a href={item.url} target="_blank">
                          <i className={item.className}></i>
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>

          <p className="scrolldown">
            <a className="smoothscroll" href="#about">
              <i className="icon-down-circle"></i>
            </a>
          </p>
        </header>
      </React.Fragment>
    );
  }
}
