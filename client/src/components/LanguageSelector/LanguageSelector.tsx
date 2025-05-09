import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./LanguageSelector.module.css";

interface LanguageSelectorProps {
  isScrolled: boolean;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ isScrolled }) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsDropdownOpen(false);
  };

  const languages = [
    { code: "cs", label: "ČE" },
    { code: "en", label: "EN" },
    { code: "sk", label: "SK" },
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={styles.languageSelector}>
      {/* Desktop view - always visible */}
      <div className={styles.desktopView}>
        {languages.map((lang, index) => (
          <React.Fragment key={lang.code}>
            <button
              className={`${styles.languageButton} ${
                currentLanguage === lang.code ? styles.active : ""
              }`}
              onClick={() => changeLanguage(lang.code)}
              style={{ color: isScrolled ? "#303030" : "#ffffff" }}
            >
              {lang.label}
            </button>
            {index < languages.length - 1 && (
              <span
                className={styles.divider}
                style={{ color: isScrolled ? "#303030" : "#ffffff" }}
              >
                /
              </span>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Mobile view - dropdown */}
      <div className={styles.mobileView}>
        <button
          className={styles.dropdownToggle}
          onClick={toggleDropdown}
          style={{ color: isScrolled ? "#303030" : "#ffffff" }}
        >
          {languages.find((lang) => lang.code === currentLanguage)?.label}
          <span className={styles.dropdownArrow}>▼</span>
        </button>
        {isDropdownOpen && (
          <div className={styles.dropdownMenu}>
            {languages.map((lang) => (
              <button
                key={lang.code}
                className={`${styles.dropdownItem} ${
                  currentLanguage === lang.code ? styles.active : ""
                }`}
                onClick={() => changeLanguage(lang.code)}
              >
                {lang.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSelector;