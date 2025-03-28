import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import Cheeseburger from "../Cheeseburger";
import { useState, useEffect, useMemo, useCallback } from "react";
import logo from "../../assets/images/logo.svg"; // Import your logo file
import logoGray from "../../assets/images/logoGray.svg"; // Import your gray logo file
import logoMenu from "../../assets/images/logoMenu.svg"; // Import your menu logo file


const Navbar = () => {
  const [toggled, setToggled] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isWideScreen, setIsWideScreen] = useState(false);

  const toggle = (event: React.MouseEvent) => {
    event.preventDefault();
    setToggled(!toggled);
  };

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  const handleResize = useCallback(() => {
    setIsWideScreen(window.innerWidth > 1200);
  }, []);

  useEffect(() => {
    handleResize(); // Initial check
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleScroll, handleResize]);

  const menuSections = useMemo(
    () => [
      {
        title: "Company",
        links: [
          { name: "Homepage", path: "/" },
          { name: "Company", path: "/company" },
          { name: "News", path: "/news" },
          { name: "Experiences", path: "/experiences" },
          { name: "Contacts", path: "/contacts" },
        ],
      },
      {
        title: "Products",
        links: [
          { name: "Drying Kilns", path: "/products/drying-kilns" },
          {
            name: "Heat Treatment Plants (ISPM-15)",
            path: "/products/heat-treatment",
          },
          {
            name: "Thermal Modification Kilns",
            path: "/products/thermal-modification",
          },
          { name: "Optionals", path: "/products/optionals" },
          { name: "Steaming Chambers", path: "/products/steaming-chambers" },
          { name: "Biomass Drying Systems", path: "/products/biomass-drying" },
          { name: "Spare parts and Assistance", path: "/products/spare-parts" },
        ],
      },
      {
        title: "Insights",
        links: [
          { name: "Why to dry the wood?", path: "/insights/wood-drying" },
          { name: "Why to do ISPM-15 treatment?", path: "/insights/ispm15" },
          {
            name: "Why to thermo-modify the wood?",
            path: "/insights/thermal-modification",
          },
          { name: "Why to vaporize the wood?", path: "/insights/vaporization" },
        ],
      },
    ],
    []
  );

  const currentLogo = useMemo(() => {
    if (toggled) return logoMenu;
    if (isScrolled) return logoGray;
    return logo;
  }, [toggled, isScrolled]);

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

        <div className={styles.logo}>
          <img src={currentLogo} alt="Company Logo" />
        </div>
      </nav>

      {toggled && (
        <div className={`${styles.menu} ${toggled ? styles.open : ""}`}>
        <div className={styles.menuContent}>
          {isWideScreen ? (
            // 3-column layout for wide screens
            <div className={styles.menuColumns}>
              {menuSections.map((section) => (
                <div key={section.title} className={styles.menuColumn}>
                  <h3 className={styles.menuTitle}>{section.title}</h3>
                  <ul className={styles.menuList}>
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.path}
                          className={styles.menuLink}
                          onClick={() => setToggled(false)}
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            // Accordion menu for mobile
            <div className={styles.menuAccordion}>
              {menuSections.map((section) => (
                <details key={section.title} className={styles.accordionItem}>
                  <summary className={styles.accordionTitle}>
                    {section.title}
                  </summary>
                  <ul className={styles.accordionList}>
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.path}
                          className={styles.menuLink}
                          onClick={() => setToggled(false)}
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              ))}
            </div>
          )}
        </div>
      </div>
      )}
    </>
  );
};

export default Navbar;
