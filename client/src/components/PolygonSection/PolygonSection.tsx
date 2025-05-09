import React from "react";
import styles from "./PolygonSection.module.css";
import { useTranslation } from "react-i18next";

const PolygonSection: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <div className={styles.polygon}>
      <div className={styles.content}>
        <h3 className={styles.label}>{t("polygonSection.label")}</h3>
        <article className={styles.paragraph}>
          <span className={styles.text}>
            {t("polygonSection.text")}
          </span>
          <span className={styles.proposal}>
            {t("polygonSection.proposal")}
          </span>
        </article>
      </div>
    </div>
  );
};

export default PolygonSection;
