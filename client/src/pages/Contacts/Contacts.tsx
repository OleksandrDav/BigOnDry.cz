import React from "react";
import Slider from "../../components/Slider/Slider";
import styles from "./Contacts.module.css";

const Contacts: React.FC = () => {
  const slides = [
    {
      imageUrl:
        "https://www.bigondry.com/wp-content/uploads/2021/01/Foto-Essiccatoi-Dal-Lago--1024x683.jpg",
      title: "Contacts",
    },
  ];

  return (
    <div className={styles.contactsPage}>
      <div className={styles.sliderContainer}>
        <Slider slides={slides} height="60vh" />
      </div>

      <div className={styles.contactsContainer}>
        <h2 className={styles.companyName}>BIGonDRY Srl</h2>
        <div className={styles.contactsContent}>
          <div className={styles.contactsColumn}>
            <div className={styles.officeSection}>
              <h3 className={styles.officeTitle}>REGISTERED OFFICE:</h3>
              <address className={styles.address}>
                Via Tozzi, 7<br />
                36020 Pove del Grappa (VI)
                <br />
                Italia
              </address>
            </div>

            <div className={styles.officeSection}>
              <h3 className={styles.officeTitle}>
                ADMINISTRATIVE OFFICE / PRODUCTION:
              </h3>
              <address className={styles.address}>
                Viale G. Falcone, 30
                <br />
                31037 Castione di Loria (TV)
                <br />
                Italia
              </address>
            </div>

            <div className={styles.officeSection}>
              <h3 className={styles.officeTitle}>DUBAI – ABU DHABI</h3>
              <address className={styles.address}>
                48 Burj Gate, 10th Floor, room #1001, Downtown, Dubai (UAE)
              </address>
              <address className={styles.address}>
                7th Floor, CI Tower, khalidiya Area, Abu Dhabi (UAE)
              </address>
              <p className={styles.contactDetail}>
                <strong>Ph.:</strong> +971 4 321 62 60
              </p>
            </div>
          </div>

          <div className={styles.contactsColumn}>
            <div className={styles.contactInfo}>
              <p>
                <strong>Mail:</strong>{" "}
                <a href="mailto:info@bigondry.cz">info@bigondry.cz</a>
                <br />
                <span className={styles.preferredContact}>
                  (Preferred contact method)
                </span>
              </p>
              <p>
                <strong>Tel.</strong> +420 774 675 607
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
