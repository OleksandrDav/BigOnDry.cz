import React from 'react';
import { Link } from 'react-router-dom';
import { MenuSection } from '../../types/types';
import styles from './Navbar.module.css';

interface NavMenuProps {
  menuSections: MenuSection[];
  onLinkClick: () => void;
}

const NavMenu: React.FC<NavMenuProps> = ({ menuSections, onLinkClick }) => {
  return (
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