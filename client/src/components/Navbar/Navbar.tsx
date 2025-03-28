import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import Cheeseburger from "../Cheeseburger";
import NavMenu from "./NavMenu";
import NavLogo from "./NavLogo";
import { MENU_SECTIONS } from "../../constants/menuSections";

const Navbar: React.FC = () => {
  const [toggled, setToggled] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

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

  return (
    <>
      <nav
        className={`${styles.navbar} ${
          isScrolled && !toggled ? styles.scrolled : ""
        } ${toggled ? styles.menuOpen : ""}`}
      >
        <Cheeseburger
          color={toggled ? "#ffffff" : "#303030"}
          width={60}
          height={60}
          isToggled={toggled}
          onClick={toggle}
        />

        <NavLogo toggled={toggled} isScrolled={isScrolled} />
      </nav>

      {/* Full-screen menu */}
      {toggled && <NavMenu menuSections={MENU_SECTIONS} onLinkClick={toggle} />}
    </>
  );
};

export default Navbar;
