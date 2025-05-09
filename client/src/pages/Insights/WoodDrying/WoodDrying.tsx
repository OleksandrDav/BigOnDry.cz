import React from "react";
import styles from "./WoodDrying.module.css";
import Slider from "../../../components/Slider/Slider";
import RequestInformation from "../../../components/RequestInformation/RequestInformation";
import { useTranslation } from "react-i18next";

interface WoodDryingProps {}

const WoodDrying: React.FC<WoodDryingProps> = ({}) => {
  const { t } = useTranslation('common');

  const slides = [
    {
      imageUrl:
        "https://www.bigondry.com/wp-content/uploads/2020/12/legno_segheria_01-1024x994.jpg",
      title: t("woodDrying.sliderTitle"),
    },
  ];

  return (
    <div>
      <div className={styles.sliderContainer}>
        <Slider slides={slides} height="60vh" />
      </div>

      <div className={styles.contentContainer}>
        <h1 className={styles.mainHeader}>{t("woodDrying.mainTitle")}</h1>

        <p className={styles.text}>
          {t("woodDrying.paragraph1")}
        </p>

        <p className={styles.text}>
          {t("woodDrying.paragraph2")}
        </p>

        <p className={styles.subHeading}>{t("woodDrying.checkTitle")}</p>

        <ul className={styles.list}>
          <li>{t("woodDrying.checkItems.temp")}</li>
          <li>{t("woodDrying.checkItems.humidity")}</li>
          <li>{t("woodDrying.checkItems.ventilation")}</li>
        </ul>

        <h3 className={styles.sectionHeading}>{t("woodDrying.tempTitle")}</h3>
        <p className={styles.text}>
          {t("woodDrying.tempText")}
        </p>

        <h3 className={styles.sectionHeading}>{t("woodDrying.humidityTitle")}</h3>
        <p className={styles.text}>
          {t("woodDrying.humidityText")}
        </p>

        <h3 className={styles.sectionHeading}>{t("woodDrying.ventilationTitle")}</h3>
        <p className={styles.text}>
          {t("woodDrying.ventilationText")}
        </p>

        <p className={styles.text}>
          {t("woodDrying.controlText")}
        </p>

        <p className={styles.text}>
          {t("woodDrying.experimentalText")}
        </p>
      </div>
      <RequestInformation />
    </div>
  );
};

export default WoodDrying;
