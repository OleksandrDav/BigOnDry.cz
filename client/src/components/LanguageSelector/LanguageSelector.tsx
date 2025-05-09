import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./LanguageSelector.module.css";

interface LanguageSelectorProps {
  isScrolled: boolean;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ isScrolled }) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={styles.languageSelector}>
      <button
        className={`${styles.languageButton} ${
          currentLanguage === "cs" ? styles.active : ""
        }`}
        onClick={() => changeLanguage("cs")}
        style={{ color: isScrolled ? "#303030" : "#ffffff" }}
      >
        ČE
      </button>
      <span 
        className={styles.divider} 
        style={{ color: isScrolled ? "#303030" : "#ffffff" }}
      >
        /
      </span>
      <button
        className={`${styles.languageButton} ${
          currentLanguage === "en" ? styles.active : ""
        }`}
        onClick={() => changeLanguage("en")}
        style={{ color: isScrolled ? "#303030" : "#ffffff" }}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSelector;