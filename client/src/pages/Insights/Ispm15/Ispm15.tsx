import React from "react";
import styles from "./Ispm15.module.css";
import Slider from "../../../components/Slider/Slider";
import RequestInformation from "../../../components/RequestInformation/RequestInformation";
import { useTranslation } from "react-i18next";

interface Ispm15Props {}

const Ispm15: React.FC<Ispm15Props> = ({}) => {
  const { t } = useTranslation('common');
  const slides = [
    {
      imageUrl: "https://www.bigondry.com/wp-content/uploads/2020/11/P1220172.jpg",
      title: t("ispm15.sliderTitle"),
    },
  ];

  return (
    <div>
      <div className={styles.sliderContainer}>
        <Slider slides={slides} height="60vh" />
      </div>
      
      <div className={styles.contentContainer}>
        <h1 className={styles.mainHeader}>{t("ispm15.mainHeader")}</h1>
        
        <h2 className={styles.sectionHeading}>{t("ispm15.regulationHeading")}</h2>
        <p className={styles.text}>
          {t("ispm15.regulationText1")}
        </p>
        
        <p className={styles.text}>
          {t("ispm15.regulationText2")}
        </p>
        
        <p className={styles.text}>
          {t("ispm15.trademarkText")}
        </p>
        
        <h3 className={styles.subHeading}>{t("ispm15.approvedMeasures")}</h3>
        <ul className={styles.list}>
          <li>{t("ispm15.measure1")}</li>
          <li>{t("ispm15.measure2")}</li>
        </ul>
        
        <p className={styles.text}>
          {t("ispm15.companyDifferentiation")}
        </p>
        
        <p className={styles.text}>
          {t("ispm15.ecoCommitment")}
        </p>
        
        <h3 className={styles.subHeading}>{t("ispm15.speedHeading")}</h3>
        <p className={styles.text}>
          {t("ispm15.speedText")}
        </p>
        
        <h3 className={styles.subHeading}>{t("ispm15.qualityHeading")}</h3>
        <p className={styles.text}>
          {t("ispm15.qualityText")}
        </p>
        
        <h3 className={styles.subHeading}>{t("ispm15.energyHeading")}</h3>
        <p className={styles.text}>
          {t("ispm15.energyText")}
        </p>
        
        <h3 className={styles.subHeading}>{t("ispm15.controlHeading")}</h3>
        <p className={styles.text}>
          {t("ispm15.controlText")}
        </p>
        
        <h3 className={styles.subHeading}>{t("ispm15.consumptionTableHeading")}</h3>
        <div className={styles.tableWrapper}>
          <table className={styles.consumptionTable}>
            <thead>
              <tr>
                <th rowSpan={2}>{t("ispm15.tableHeader1")}</th>
                <th rowSpan={2}>{t("ispm15.tableHeader2")}</th>
                <th rowSpan={2}>{t("ispm15.tableHeader3")}</th>
                <th rowSpan={2}>{t("ispm15.tableHeader4")}</th>
                <th rowSpan={2}>{t("ispm15.tableHeader5")}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{t("ispm15.tableRow1Cell1")}</td>
                <td>{t("ispm15.tableRow1Cell2")}</td>
                <td>{t("ispm15.tableRow1Cell3")}</td>
                <td>{t("ispm15.tableRow1Cell4")}</td>
                <td>{t("ispm15.tableRow1Cell5")}</td>
              </tr>
              <tr>
                <td>{t("ispm15.tableRow2Cell1")}</td>
                <td>{t("ispm15.tableRow2Cell2")}</td>
                <td>{t("ispm15.tableRow2Cell3")}</td>
                <td>{t("ispm15.tableRow2Cell4")}</td>
                <td>{t("ispm15.tableRow2Cell5")}</td>
              </tr>
              <tr>
                <td>{t("ispm15.tableRow3Cell1")}</td>
                <td>{t("ispm15.tableRow3Cell2")}</td>
                <td>{t("ispm15.tableRow3Cell3")}</td>
                <td>{t("ispm15.tableRow3Cell4")}</td>
                <td>{t("ispm15.tableRow3Cell5")}</td>
              </tr>
              <tr>
                <td>{t("ispm15.tableRow4Cell1")}</td>
                <td>{t("ispm15.tableRow4Cell2")}</td>
                <td>{t("ispm15.tableRow4Cell3")}</td>
                <td>{t("ispm15.tableRow4Cell4")}</td>
                <td>{t("ispm15.tableRow4Cell5")}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <RequestInformation />
    </div>
  );
};

export default Ispm15;