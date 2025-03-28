import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MenuSection } from '../../types/types';
import styles from './Navbar.module.css';

interface NavMenuProps {
  menuSections: MenuSection[];
  onLinkClick: () => void;
}

const NavMenu: React.FC<NavMenuProps> = ({ menuSections, onLinkClick }) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 900);
    if (window.innerWidth >= 900) setActiveSection(null);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSection = (title: string) => {
    setActiveSection(activeSection === title ? null : title);
  };

  return (
    <div className={styles.fullScreenMenu}>
      <div className={`${styles.menuContent} ${isMobile ? styles.mobileMenu : ''}`}>
        {menuSections.map((section) => (
          <div 
            key={section.title} 
            className={`${styles.menuColumn} ${activeSection === section.title ? styles.active : ''}`}
          >
            <h2 
              className={styles.sectionTitle}
              onClick={() => isMobile && toggleSection(section.title)}
            >
              {section.title}
              {isMobile && (
                <span className={styles.accordionIcon}>
                  {activeSection === section.title ? '−' : '+'}
                </span>
              )}
            </h2>
            
            <ul className={styles.menuList}>
              {section.links.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className={styles.menuLink}
                    onClick={onLinkClick}
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
  );
};

export default NavMenu;