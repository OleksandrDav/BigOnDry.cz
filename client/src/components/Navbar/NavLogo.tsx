import React, { useMemo } from 'react';
import styles from './Navbar.module.css';

import logo from "../../assets/images/logo.svg";  
import logoGray from "../../assets/images/logoGray.svg";  
import logoMenu from "../../assets/images/logoMenu.svg";  

interface NavLogoProps {
  toggled: boolean;
  isScrolled: boolean;
}

const NavLogo: React.FC<NavLogoProps> = ({ toggled, isScrolled }) => {
  const currentLogo = useMemo(() => {
    if (toggled) return logoMenu;
    if (isScrolled) return logoGray;
    return logo;
  }, [toggled, isScrolled]);

  return (
    <div className={styles.logo}> 
      <img src={currentLogo} alt="Company Logo" /> 
    </div>
  );
};

export default NavLogo;