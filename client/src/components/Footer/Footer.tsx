import styles from './Footer.module.css';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Company Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;