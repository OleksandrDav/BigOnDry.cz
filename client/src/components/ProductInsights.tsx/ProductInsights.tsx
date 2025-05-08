import React from "react";
import styles from "./ProductInsights.module.css";
import { PRODUCTINSIGHT } from "../../constants/productInsights";

const ProductInsights: React.FC = () => {
  return (
    <div className={styles.insightsSection}>
      <h2 className={styles.sectionTitle}>Product Insights</h2>
      <div className={styles.grid}>
        {PRODUCTINSIGHT.map((insight, index) => (
          <div className={styles.card} key={index}>
            <img
              src={insight.imageUrl}
              alt={insight.title}
              className={styles.image}
            />
            <h3 className={styles.title}>{insight.title}</h3>
            <p className={styles.description}>{insight.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductInsights;
