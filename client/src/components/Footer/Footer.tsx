import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <footer className={styles.footer}>
      <div className={styles.columns}>
        <div className={styles.column}>
          <h3>{t("footer.company")}</h3>
          <p>
            <strong>
              <a href="mailto:info@bigondry.cz">{t("footer.email")}</a>
            </strong>
          </p>
          <p>{t("footer.address")}</p>

          <p>{t("footer.dubaiAddress")}</p>
        </div>

        <div className={styles.column}>
          <h3>{t("footer.insights")}</h3>
          <ul>
            <li>
              <Link to="/insights/wood-drying">
                {t("footer.insightsLinks.drying")}
              </Link>
            </li>
            <li>
              <Link to="/insights/ispm15">
                {t("footer.insightsLinks.ispm15")}
              </Link>
            </li>
            <li>
              <Link to="/insights/thermo-modification">
                {t("footer.insightsLinks.thermo")}
              </Link>
            </li>
            <li>
              <Link to="/insights/vaporization">
                {t("footer.insightsLinks.vapor")}
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3>{t("footer.products")}</h3>
          <ul>
            <li>
              <Link to="/products/drying-kilns/1">
                {t("footer.productLinks.dryingKilns")}
              </Link>
            </li>
            <li>
              <Link to="/products/heat-treatment/2">
                {t("footer.productLinks.ispm15")}
              </Link>
            </li>
            <li>
              <Link to="/products/thermal-modification/3">
                {t("footer.productLinks.thermo")}
              </Link>
            </li>
            <li>
              <Link to="/products/steaming-chambers/4">
                {t("footer.productLinks.steaming")}
              </Link>
            </li>
            <li>
              <Link to="/products/biomass-drying/5">
                {t("footer.productLinks.biomass")}
              </Link>
            </li>
            <li>
              <Link to="/products/spare-parts/6">
                {t("footer.productLinks.spare")}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>{t("footer.copyright", { year: new Date().getFullYear() })}</p>
      </div>
    </footer>
  );
};

export default Footer;
