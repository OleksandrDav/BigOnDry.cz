import React from "react";
import styles from "./ProductInsights.module.css";
import { PRODUCTINSIGHT } from "../../constants/productInsights";
import { useTranslation } from "react-i18next";

const ProductInsights: React.FC = () => {
  const { t } = useTranslation('productInsights');

  return (
    <div className={styles.insightsSection}>
      <h2 className={styles.sectionTitle}>{t("sectionTitle")}</h2>
      <div className={styles.grid}>
        {PRODUCTINSIGHT.map((insight, index) => (
          <div className={styles.card} key={index}>
            <img
              src={insight.imageUrl}
              alt={t(`items.${index}.title`)}
              className={styles.image}
            />
            <h3 className={styles.title}>{t(`items.${index}.title`)}</h3>
            <p 
              className={styles.description} 
              dangerouslySetInnerHTML={{ __html: t(`items.${index}.description`) }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductInsights;