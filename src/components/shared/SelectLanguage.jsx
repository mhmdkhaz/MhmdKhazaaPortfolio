import React from "react";
import { useTranslation } from "react-i18next";

const Welcome = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // تغيير اللغة
    console.log(`Current language: ${lng}`); // طباعة اللغة الحالية
  };

  return (
    <div>
      <h1>{t("welcomeTo")}</h1>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("ar")}>Arabic</button>
    </div>
  );
};

export default Welcome;
