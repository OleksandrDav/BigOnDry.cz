import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.columns}>
        <div className={styles.column}>
          <h3>BIGonDRY Srl</h3>
          <p>
            Viale Giovanni Falcone, 30<br />
            31037 Castione di Loria (TV)<br />
            Italy
          </p>
          <p >
            <strong><a href="mailto:info@bigondry.cz">info@bigondry.cz</a></strong>
          </p>

          <h4>Dubai – Abu Dhabi</h4>
          <p>
            48 Burj Gate, 10th Floor, room #1001, Downtown, Dubai (UAE)<br />
            7th Floor, CI Tower, Khalidiya Area, Abu Dhabi (UAE)<br />
          </p>
        </div>

        <div className={styles.column}>
          <h3>Insights</h3>
          <ul>
            <li><Link to="/insights/wood-drying">Why to dry the wood?</Link></li>
            <li><Link to="/insights/ispm15">Why to do ISPM-15 treatment?</Link></li>
            <li><Link to="/insights/thermo-modification">Why to thermo-modify the wood?</Link></li>
            <li><Link to="/insights/vaporization">Why to vaporize the wood?</Link></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3>Products</h3>
          <ul>
            <li><Link to="/products/drying-kilns/1">Drying Kilns</Link></li>
            <li><Link to="/products/heat-treatment/2">Heat Treatment Plants (ISPM-15)</Link></li>
            <li><Link to="/products/thermal-modification/3">Thermal Modification Kilns</Link></li>
            <li><Link to="/products/steaming-chambers/4">Steaming Chambers</Link></li>
            <li><Link to="/products/biomass-drying/5">Biomass Drying Systems</Link></li>
            <li><Link to="/products/spare-parts/6">Spare parts and Assistance</Link></li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} BIGonDRY Srl. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
