import React from "react";
import Slider from "../../components/Slider/Slider";
import styles from "./Company.module.css";
import RequestInformation from "../../components/RequestInformation/RequestInformation";
import { useTranslation } from "react-i18next";

const Company: React.FC = () => {
  const { t } = useTranslation('common');
  
  const insights = [
    {
      name: t("company.insights.technicalOffices"),
      imageUrl:
        "https://www.bigondry.com/wp-content/uploads/2021/01/uff-progettazione.jpg",
    },
    {
      name: t("company.insights.executiveOffices"),
      imageUrl:
        "https://www.bigondry.com/wp-content/uploads/2021/01/uff-assistenza.jpg",
    },
    {
      name: t("company.insights.commercialOffices"),
      imageUrl:
        "https://www.bigondry.com/wp-content/uploads/2021/01/uff-commerciale.jpg",
    },
    {
      name: t("company.insights.meetingRoom"),
      imageUrl:
        "https://www.bigondry.com/wp-content/uploads/2020/12/azienda_bigondry_01-1.jpg",
    },
    {
      name: t("company.insights.administrativeOffices"),
      imageUrl:
        "https://www.bigondry.com/wp-content/uploads/2021/01/uff-amministrativo.jpg",
    },
  ];

  const slides = [
    {
      imageUrl:
        "https://www.bigondry.com/wp-content/uploads/2020/12/azienda_bigondry_02.png",
      title: t("company.sliderTitle"),
    },
    {
      imageUrl:
        "https://www.bigondry.com/wp-content/uploads/2020/12/azienda_bigondry_01-1.jpg",
      title: t("company.sliderTitle"),
    },
    {
      imageUrl:
        "https://www.bigondry.com/wp-content/uploads/2020/12/azienda_bigondry_04.png",
      title: t("company.sliderTitle"),
    },
    {
      imageUrl:
        "https://www.bigondry.com/wp-content/uploads/2020/12/azienda_bigondry_03.png",
      title: t("company.sliderTitle"),
    },
  ];

  return (
    <div className={styles.companyPage}>
      <div className={styles.sliderContainer}>
        <Slider slides={slides} height="60vh" />
      </div>

      {/* Company info section */}
      <div className={styles.infoContainer}>
        <h1 className={styles.heading}>
          {t("company.heading")}
        </h1>

        <p>
          {t("company.text1.part1")}
          <strong>{t("company.text1.strong1")}</strong>
          {t("company.text1.part2")}
        </p>

        <p className={styles.italic}>
          {t("company.text2")}
        </p>

        <p>
          <strong>{t("company.text3.strong1")}</strong>
          {t("company.text3.part1")}
        </p>

        <p>
          <strong>{t("company.text4.strong1")}</strong>
          {t("company.text4.part1")}
          <strong>{t("company.text4.strong2")}</strong>
          {t("company.text4.part2")}
        </p>

        <p>
          {t("company.text5")}
        </p>

        <p>
          <strong>{t("company.text6.strong1")}</strong>
          {t("company.text6.part1")}
        </p>

        <p className={styles.italic}>
          <em>
            {t("company.text7")}
          </em>
        </p>
      </div>

      {/* Company insights section */}
      <div className={styles.insightsSection}>
        <h2 className={styles.insightsHeading}>{t("company.insights.heading")}</h2>
        <div className={styles.insightsGrid}>
          {insights.map((insight, index) => (
            <div key={index} className={styles.insightCard}>
              <img
                src={insight.imageUrl}
                alt={insight.name}
                className={styles.insightImage}
                loading="lazy"
              />
              <div className={styles.insightOverlay}>
                <h3 className={styles.insightName}>{insight.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <RequestInformation />
    </div>
  );
};

export default Company;