import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div onChange={changeLanguage}>
      <input
        type="radio"
        id="radioEN"
        value="en"
        name="language"
        defaultChecked
      />
      <label for="radioEN">EN</label>

      <input type="radio" id="radioES" value="es" name="language" />
      <label for="radioES">ES</label>
      <input type="radio" id="radioFR" value="fr" name="language" />
      <label for="radioFR">FR</label>
    </div>
  );
};

export default LanguageSelector;
