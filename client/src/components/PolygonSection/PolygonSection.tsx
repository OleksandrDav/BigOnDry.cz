import React from "react";
import styles from "./PolygonSection.module.css";

interface PolygonSectionProps {}

const PolygonSection: React.FC<PolygonSectionProps> = ({}) => {
  return (
    <div className={styles.polygon}>
      <div className={styles.content}>
        <h3 className={styles.label}>Insights</h3>
        <article className={styles.paragraph}>
          <span className={styles.text}>
            Discover the importance of a good drying or a specific heat
            treatment on wood. Each one has its own benefits.
          </span>
          <span className={styles.proposal}>Find out what you need!</span>
        </article>
      </div>
    </div>
  );
};

export default PolygonSection;
