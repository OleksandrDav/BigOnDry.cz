import React from "react";
import { INSIGHTLINKS } from "../../constants/insightLinks";
import { Link } from "react-router-dom";
import styles from "./InsightsList.module.css";

type Props = {};

const InsightsList = (props: Props) => {
  return (
    <div className={styles.insights}>
      <div className={styles.insightsList}>
        {INSIGHTLINKS.map((insight, index) => (
          <Link key={index} to={insight.path} className={styles.insightItem}>
            <div
              className={styles.insightAvatar}
              style={{ backgroundImage: `url(${insight.imageUrl})` }}
            />
            <div className={styles.insightText}>{insight.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default InsightsList;
