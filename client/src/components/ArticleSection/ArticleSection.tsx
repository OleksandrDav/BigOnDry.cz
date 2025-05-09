import React from "react";
import styles from "./ArticleSection.module.css";
import { useTranslation } from "react-i18next";

const ArticleSection: React.FC = () => {
  const { t } = useTranslation('common')

  return (
    <div className={styles.articleSection}>
      <div className={styles.articleContainer}>
        <h2 className={styles.articleHeader}>
        {t('article.title')}
        </h2>
        <p className={styles.articleText}>
        {t('article.description')}
        </p>
      </div>
    </div>
  );
};

export default ArticleSection;