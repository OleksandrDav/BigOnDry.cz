import React from "react";
import styles from "./Vaporization.module.css";
import Slider from "../../../components/Slider/Slider";
import RequestInformation from "../../../components/RequestInformation/RequestInformation";
import { useTranslation } from "react-i18next";

interface VaporizationProps {}

const Vaporization: React.FC<VaporizationProps> = ({}) => {
  const { t } = useTranslation('common');
  const slides = [
    {
      imageUrl:
        "https://www.bigondry.com/wp-content/uploads/2020/12/parete_in_legno_01-1024x994.jpg",
      title: t("vaporization.sliderTitle"),
    },
  ];

  return (
    <div>
      <div className={styles.sliderContainer}>
        <Slider slides={slides} height="60vh" />
      </div>

      <div className={styles.contentContainer}>
        <h1 className={styles.mainHeader}>{t("vaporization.mainHeader")}</h1>
        
        <p className={styles.text}>
          {t("vaporization.text1")}
        </p>
        
        <p className={styles.text}>
          {t("vaporization.text2")}
        </p>
        
        <p className={styles.text}>
          {t("vaporization.text3")}
        </p>
        
        <h3 className={styles.sectionHeading}>{t("vaporization.directSteaming")}</h3>
        <p className={styles.text}>
          {t("vaporization.text4")}
        </p>
        
        <h3 className={styles.sectionHeading}>{t("vaporization.indirectSteaming")}</h3>
        
        <h4 className={styles.subHeading}>{t("vaporization.traditionalSystem")}</h4>
        <p className={styles.text}>
          {t("vaporization.text5")}
        </p>
        
        <h4 className={styles.subHeading}>{t("vaporization.directBurnerSystem")}</h4>
        <p className={styles.text}>
          {t("vaporization.text6")}
        </p>

        <div className={styles.tableWrapper}>
          <h4 className={styles.tableTitle}>{t("vaporization.tableTitle")}</h4>
          <table className={styles.comparisonTable}>
            <thead>
              <tr>
                <th>{t("vaporization.directSteaming")}</th>
                <th>{t("vaporization.indirectSteaming")}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{t("vaporization.tableRow1.direct")}</td>
                <td>{t("vaporization.tableRow1.indirect")}</td>
              </tr>
              <tr>
                <td>{t("vaporization.tableRow2.direct")}</td>
                <td>{t("vaporization.tableRow2.indirect")}</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className={styles.text}>
          {t("vaporization.text7")}
        </p>
        
        <p className={styles.text}>
          {t("vaporization.text8")}
        </p>
      </div>
      <RequestInformation />
    </div>
  );
};

export default Vaporization;