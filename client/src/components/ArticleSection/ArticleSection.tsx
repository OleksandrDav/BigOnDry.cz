import React from "react";
import styles from "./ArticleSection.module.css";

const ArticleSection: React.FC = () => {
  return (
    <div className={styles.articleSection}>
      <div className={styles.articleContainer}>
        <h2 className={styles.articleHeader}>
          Wood Drying Kilns and Heat Treatment Plants
        </h2>
        <p className={styles.articleText}>
          BIGonDRY is an italian company that produces Wood Drying Kilns and
          Heat Treatment Plants. Since 2001 BIGonDRY has been studying and
          designing "turnkey" systems for any request and following the
          customer in his growth path.
        </p>
      </div>
    </div>
  );
};

export default ArticleSection;