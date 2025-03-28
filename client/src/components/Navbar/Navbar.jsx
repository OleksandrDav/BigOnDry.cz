import { Link } from "react-router-dom"; 
import styles from "./Navbar.module.css"; 
import Cheeseburger from "../Cheeseburger"; 
import { useState, useEffect, useMemo } from "react"; 
import logo from "../../assets/images/logo.svg";  
import logoGray from "../../assets/images/logoGray.svg";  
import logoMenu from "../../assets/images/logoMenu.svg";  
 
const Navbar = () => { 
  const [toggled, setToggled] = useState(false); 
  const [isScrolled, setIsScrolled] = useState(false); 
 
  const toggle = () => setToggled((prev) => !prev); 
 
  useEffect(() => { 
    const handleScroll = () => { 
      setIsScrolled(window.scrollY > 50); 
    }; 
 
    window.addEventListener("scroll", handleScroll); 
    return () => window.removeEventListener("scroll", handleScroll); 
  }, []); 
 
  const menuSections = [ 
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
  ]; 
 
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

      {/* Full-screen menu */}
      {toggled && (
        <div className={styles.fullScreenMenu}>
          <div className={styles.menuContent}>
            {menuSections.map((section) => (
              <div key={section.title} className={styles.menuColumn}>
                <h2 className={styles.sectionTitle}>{section.title}</h2>
                <ul>
                  {section.links.map((link) => (
                    <li key={link.path}>
                      <Link 
                        to={link.path} 
                        className={styles.menuLink}
                        onClick={toggle}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  ); 
}; 
 
export default Navbar;