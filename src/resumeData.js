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
// Name
const University1 = () => {
  const { t, i18n } = useTranslation();
  return <div>{t("university1.label")}</div>;
};
const University2 = () => {
  const { t, i18n } = useTranslation();
  return <div>{t("university2.label")}</div>;
};
const University3 = () => {
  const { t, i18n } = useTranslation();
  return <div>{t("university3.label")}</div>;
};

// Specialization
const University1Specialization = () => {
  const { t, i18n } = useTranslation();
  return <div>{t("university1specialization.label")}</div>;
};
const University2Specialization = () => {
  const { t, i18n } = useTranslation();
  return <div>{t("university2specialization.label")}</div>;
};
const University3Specialization = () => {
  const { t, i18n } = useTranslation();
  return <div>{t("university3specialization.label")}</div>;
};

// Month
const University1Month = () => {
  const { t, i18n } = useTranslation();
  return <div>{t("university1month.label")}</div>;
};
const University2Month = () => {
  const { t, i18n } = useTranslation();
  return <div>{t("university2month.label")}</div>;
};
const University3Month = () => {
  const { t, i18n } = useTranslation();
  return <div>{t("university3month.label")}</div>;
};

// Achievement
const University1Achievement = () => {
  const { t, i18n } = useTranslation();
  return <div>{t("university1achievement.label")}</div>;
};
const University2Achievement = () => {
  const { t, i18n } = useTranslation();
  return <div>{t("university2achievement.label")}</div>;
};
const University3Achievement = () => {
  const { t, i18n } = useTranslation();
  return <div>{t("university3achievement.label")}</div>;
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
    // {
    //   name: "twitter",
    //   url: "http://twitter.com/xzientarski",
    //   className: "fa fa-twitter",
    // },
    // {
    //   name: "medium",
    //   url: "https://medium.com/@xavierzientarski",
    //   className: "fa fa-medium",
    // },
  ],
  aboutme1: <AboutMe1 />,
  aboutme2: <AboutMe2 />,
  // aboutme3: <AboutMe3 />,
  // aboutme4: <AboutMe4 />,
  education: [
    {
      UniversityName: <University1/>,
      specialization: <University1Specialization/>,
      MonthOfPassing: <University1Month/>,
      YearOfPassing: "2021",
      Achievements: <University1Achievement/>,
    },
    {
      UniversityName: <University2/>,
      specialization: <University2Specialization/>,
      MonthOfPassing: <University2Month/>,
      YearOfPassing: "2019",
      Achievements: <University2Achievement/>,
    },
    {
      UniversityName: <University3/>,
      specialization: <University3Specialization/>,
      MonthOfPassing: <University3Month/>,
      YearOfPassing: "2018",
      Achievements: <University3Achievement/>,
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
      skillname: "SQL",
    },
    {
      skillname: "Typescript",
    },
    {
      skillname: "R",
    },
    {
      skillname: "PHP",
    },
    {
      skillname: "Java",
    },
    {
      skillname: "VBA",
    },
  ],
  portfolio: [
    {
      name: "Dust Detection Camera",
      description: "AI service",
      imgurl: "images/portfolio/1_ajedrez.png",
      link: "https://github.com/xzient/DustDetection",
    },
    // {
    //   name: "Mine detonation dust analysis",
    //   description: "Data analysis service",
    //   imgurl: "images/portfolio/coffee.jpg",
    //   link: "",
    // },
    {
      name: "Georgian Lexical Accent",
      description: "Research Paper",
      imgurl: "images/portfolio/georgian_2.png",
      link: "https://www.semanticscholar.org/paper/Word-Stress-and-Phrase-Accent-in-Georgian-Borise-Zientarski/e11a00e4787d28c60b34563b0c90f427488dd3dd",
    },
    // {
    //   name: "Georgian Lexical Accent",
    //   description: "Research Paper",
    //   imgurl: "images/portfolio/origami.jpg",
    //   link: "https://www.semanticscholar.org/paper/Word-Stress-and-Phrase-Accent-in-Georgian-Borise-Zientarski/e11a00e4787d28c60b34563b0c90f427488dd3dd",
    // },
    
    // {
    //   name: "project4",
    //   description: "mobileapp",
    //   imgurl: "images/portfolio/console.jpg",
    // },
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
