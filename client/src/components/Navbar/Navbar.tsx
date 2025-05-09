import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import Cheeseburger from "../Cheeseburger";
import NavMenu from "./NavMenu";
import NavLogo from "./NavLogo";
import { MENU_SECTIONS } from "../../constants/menuSections";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../LanguageSelector/LanguageSelector";

const Navbar: React.FC = () => {
  const [toggled, setToggled] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const { t } = useTranslation('menu');

  const toggle = () => setToggled((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (toggled) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [toggled]);

  const translatedMenuSections = MENU_SECTIONS.map(section => ({
    title: t(`sections.${section.title.toLowerCase()}`),
    links: section.links.map(link => ({
      ...link,
      name: t(`links.${link.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`)
    }))
  }));

  return (
    <>
      <nav
        className={`${styles.navbar} ${
          isScrolled && !toggled ? styles.scrolled : ""
        } ${toggled ? styles.menuOpen : ""}`}
      >
        <Cheeseburger
          color={toggled || !isScrolled ? "#ffffff" : "#303030"}
          width={60}
          height={60}
          isToggled={toggled}
          onClick={toggle}
        />

        <NavLogo toggled={toggled} isScrolled={isScrolled} />
        <LanguageSelector isScrolled={isScrolled && !toggled} />
      </nav>

      {/* Full-screen menu */}
      {toggled && <NavMenu menuSections={translatedMenuSections} onLinkClick={toggle} />}
    </>
  );
};

export default Navbar;