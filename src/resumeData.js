import React from "react";
import { useTranslation } from "react-i18next";

const Name = () => {
  const { t, i18n } = useTranslation();
  return <div>{t("name.label")}</div>;
};
const Role = () => {
  const { t, i18n } = useTranslation();
  return <div>{t("role.label")}</div>;
};
const RoleDescription = () => {
  const { t, i18n } = useTranslation();
  return <div>{t("roledescription.label")}</div>;
};
const AboutMe1 = () => {
  const { t, i18n } = useTranslation();
  return <div>{t("aboutmetext1.label")}</div>;
};
const AboutMe2 = () => {
  const { t, i18n } = useTranslation();
  return <div>{t("aboutmetext2.label")}</div>;
};
const AboutMe3 = () => {
  const { t, i18n } = useTranslation();
  return <div>{t("aboutmetext3.label")}</div>;
};
const AboutMe4 = () => {
  const { t, i18n } = useTranslation();
  return <div>{t("aboutmetext4.label")}</div>;
};

const Address = () => {
  const { t, i18n } = useTranslation();
  return <div>{t("address.label")}</div>;
};

const SkillsText = () => {
  const { t, i18n } = useTranslation();
  return <div>{t("skillstext.label")}</div>;
};

const Email = () => {
  const { t, i18n } = useTranslation();
  return <div>{t("email.label")}</div>;
};

const Skype = () => {
  const { t, i18n } = useTranslation();
  return <div>{t("skype.label")}</div>;
};

let resumeData = {
  imagebaseurl: "https://xzient.github.io/",
  name: <Name />,
  role: <Role />,
  address: <Address />,
  email: "xzientarski@gmail.com",
  skype: <Skype />,
  linkedinId: "xavier-zientarski",
  skypeid: "xavier.zientaarski",
  roleDescription: <RoleDescription />,
  socialLinks: [
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/xavier-zientarski/",
      className: "fa fa-linkedin",
    },
    {
      name: "github",
      url: "http://github.com/xzient",
      className: "fa fa-github",
    },
    {
      name: "twitter",
      url: "http://twitter.com/xzientarski",
      className: "fa fa-twitter",
    },
    {
      name: "medium",
      url: "https://medium.com/@xavierzientarski",
      className: "fa fa-medium",
    },
  ],
  aboutme1: <AboutMe1 />,
  aboutme2: <AboutMe2 />,
  aboutme3: <AboutMe3 />,
  aboutme4: <AboutMe4 />,
  education: [
    {
      UniversityName: "The LNM Insitute of Information Technology",
      specialization: "Some specialization",
      MonthOfPassing: "Aug",
      YearOfPassing: "2020",
      Achievements: "Some Achievements",
    },
    {
      UniversityName: "Some University",
      specialization: "Some specialization",
      MonthOfPassing: "Jan",
      YearOfPassing: "2018",
      Achievements: "Some Achievements",
    },
  ],
  work: [
    {
      CompanyName: "Some Company",
      specialization: "Some specialization",
      MonthOfLeaving: "Jan",
      YearOfLeaving: "2018",
      Achievements: "Some Achievements",
    },
    {
      CompanyName: "Some Company",
      specialization: "Some specialization",
      MonthOfLeaving: "Jan",
      YearOfLeaving: "2018",
      Achievements: "Some Achievements",
    },
  ],
  skillsDescription: <SkillsText />,
  skills: [
    {
      skillname: "Python",
    },
    {
      skillname: "Java",
    },
    {
      skillname: "C/C++",
    },
    {
      skillname: "MATLAB",
    },
    {
      skillname: "OCaml",
    },
  ],
  portfolio: [
    {
      name: "project1",
      description: "mobileapp",
      imgurl: "images/portfolio/retrocam.jpg",
    },
    {
      name: "project2",
      description: "mobileapp",
      imgurl: "images/portfolio/coffee.jpg",
    },
    {
      name: "project3",
      description: "mobileapp",
      imgurl: "images/portfolio/origami.jpg",
    },
    {
      name: "project4",
      description: "mobileapp",
      imgurl: "images/portfolio/console.jpg",
    },
  ],
  testimonials: [
    {
      /*
      description: "This is a sample testimonial",
      name: "Some technical guy",
    },
    {
      description: "This is a sample testimonial",
      name: "Some technical guy",
    */
    },
  ],
};

export default resumeData;
