import React from "react";
import styles from "./ThermoModifyArticle.module.css";
import Slider from "../Slider/Slider";
import { useTranslation } from "react-i18next";

const ThermoModifyArticle: React.FC = () => {
  const { t } = useTranslation('common');
  const slides = [
    {
      imageUrl:
        "https://www.bigondry.com/wp-content/uploads/2020/11/termotrattamento_legno.jpg",
      title: t("thermoModify.sliderTitle"),
    },
  ];

  return (
    <div>
      <div className={styles.sliderContainer}>
        <Slider slides={slides} height="60vh" />
      </div>

      <div className={styles.contentContainer}>
        <h1 className={styles.mainHeader}>{t("thermoModify.mainHeader")}</h1>

        <p className={styles.text}>
          {t("thermoModify.text1.part1")}
          <strong>{t("thermoModify.text1.strong1")}</strong>
          {t("thermoModify.text1.part2")}
        </p>

        <p className={styles.text}>
          {t("thermoModify.text2.part1")}
          <strong>{t("thermoModify.text2.strong1")}</strong>
          {t("thermoModify.text2.part2")}
        </p>

        <p className={styles.text}>
          {t("thermoModify.text3.part1")}
          <strong>{t("thermoModify.text3.strong1")}</strong>
          {t("thermoModify.text3.part2")}
          <strong>{t("thermoModify.text3.strong2")}</strong>
          {t("thermoModify.text3.part3")}
          <strong>{t("thermoModify.text3.strong3")}</strong>
          {t("thermoModify.text3.part4")}
          <strong>{t("thermoModify.text3.strong4")}</strong>
          {t("thermoModify.text3.part5")}
        </p>

        <div className={styles.imageContainer}>
          <img
            src="http://www.bigondry.com/wp-content/uploads/2021/01/thw.png"
            alt={t("thermoModify.imageAlt")}
          />
        </div>

        <h3 className={styles.sectionHeading}>{t("thermoModify.sectionHeading1")}</h3>
        <p className={styles.text}>
          {t("thermoModify.text4")}
        </p>

        <ul className={styles.list}>
          <li>{t("thermoModify.listItem1")}</li>
          <li>{t("thermoModify.listItem2")}</li>
          <li>{t("thermoModify.listItem3")}</li>
        </ul>

        <p className={styles.text}>
          {t("thermoModify.text5")}
        </p>

        <h3 className={styles.sectionHeading}>{t("thermoModify.sectionHeading2")}</h3>
        <p className={styles.text}>
          {t("thermoModify.text6")}
        </p>

        <h3 className={styles.sectionHeading}>{t("thermoModify.sectionHeading3")}</h3>
        <p className={styles.text}>
          {t("thermoModify.text7")}
        </p>

        <h3 className={styles.sectionHeading}>{t("thermoModify.sectionHeading4")}</h3>
        <p className={styles.text}>
          {t("thermoModify.text8")}
        </p>
      </div>
    </div>
  );
};

export default ThermoModifyArticle;