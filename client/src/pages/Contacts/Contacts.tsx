import React from "react";
import Slider from "../../components/Slider/Slider";
import styles from "./Contacts.module.css";
import RequestInformation from "../../components/RequestInformation/RequestInformation";
import { useTranslation } from "react-i18next";

const Contacts: React.FC = () => {
  const { t } = useTranslation('common');
  const slides = [
    {
      imageUrl:
        "https://www.bigondry.com/wp-content/uploads/2021/01/Foto-Essiccatoi-Dal-Lago--1024x683.jpg",
      title: t("contacts.sliderTitle"),
    },
  ];

  return (
    <div className={styles.contactsPage}>
      <div className={styles.sliderContainer}>
        <Slider slides={slides} height="60vh" />
      </div>

      <div className={styles.contactsContainer}>
        <h2 className={styles.companyName}>{t("contacts.companyName")}</h2>
        <div className={styles.contactsContent}>
          <div className={styles.contactsColumn}>
            <div className={styles.officeSection}>
              <h3 className={styles.officeTitle}>{t("contacts.office1.title")}</h3>
              <address className={styles.address}>
                {t("contacts.office1.line1")}
                <br />
                {t("contacts.office1.line2")}
                <br />
                {t("contacts.office1.line3")}
              </address>
            </div>

            <div className={styles.officeSection}>
              <h3 className={styles.officeTitle}>
                {t("contacts.office2.title")}
              </h3>
              <address className={styles.address}>
                {t("contacts.office2.line1")}
                <br />
                {t("contacts.office2.line2")}
                <br />
                {t("contacts.office2.line3")}
              </address>
            </div>

            <div className={styles.officeSection}>
              <h3 className={styles.officeTitle}>{t("contacts.office3.title")}</h3>
              <address className={styles.address}>
                {t("contacts.office3.line1")}
              </address>
              <address className={styles.address}>
                {t("contacts.office3.line2")}
              </address>
            </div>
          </div>

          <div className={styles.contactsColumn}>
            <div className={styles.contactInfo}>
              <p>
                <strong>{t("contacts.contact.mail")}</strong>{" "}
                <a href="mailto:info@bigondry.cz">info@bigondry.cz</a>
                <br />
                <span className={styles.preferredContact}>
                  {t("contacts.contact.preferred")}
                </span>
              </p>
              <p>
                <strong>{t("contacts.contact.tel")}</strong> +420 774 675 607
              </p>
            </div>
          </div>
        </div>
      </div>
      <RequestInformation />
    </div>
  );
};

export default Contacts;