import React, { useState, useRef } from "react";
import styles from "./ThermoModification.module.css";
import ThermoModifyArticle from "../../../components/ThemoModifyArticle/ThermoModifyArticle";
import { WoodType } from "../../../types/types";
import { WOOD_TYPES } from "../../../constants/woodTypes";
import { ChevronLeft, ChevronRight } from "react-feather";
import RequestInformation from "../../../components/RequestInformation/RequestInformation";
import { useTranslation } from "react-i18next";

const ThermoModification: React.FC = () => {
  const { t } = useTranslation("woodTypes");
  const [selectedWoodType, setSelectedWoodType] = useState<WoodType>(
    WOOD_TYPES[0]
  );
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      carouselRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div>
      <ThermoModifyArticle />

      <div className={styles.container}>
        <div className={styles.woodTypesSection}>
          <h2 className={styles.sectionTitle}>{t("woodTypeCharacteristics")}</h2>

          <div className={styles.woodSelector}>
            {WOOD_TYPES.map((wood) => (
              <button
                key={wood.id}
                className={`${styles.woodButton} ${
                  selectedWoodType.id === wood.id ? styles.active : ""
                }`}
                onClick={() => setSelectedWoodType(wood)}
              >
                {t(`${wood.name}.name`)}
              </button>
            ))}
          </div>

          <div className={styles.woodInfo}>
            <h2 className={styles.woodName}>{t(`${selectedWoodType.name}.name`)}</h2>
            <h3 className={styles.woodTitle}>{t(`${selectedWoodType.name}.title`)}</h3>

            <div className={styles.description}>
              {selectedWoodType.description.map((paragraph, pIndex) => (
                <p key={pIndex} className={styles.paragraph}>
                  {paragraph.map((textBlock, tIndex) => (
                    <span
                      key={tIndex}
                      className={`${textBlock.isBold ? styles.boldText : ""}`}
                    >
                      {t(`${selectedWoodType.name}.description.${pIndex}.${tIndex}`)}
                    </span>
                  ))}
                </p>
              ))}
            </div>

            <div className={styles.characteristicsGrid}>
              {selectedWoodType.characteristics.map((char) => (
                <div key={char.name} className={styles.characteristicItem}>
                  <img
                    src={char.iconUrl}
                    alt={char.name}
                    className={styles.characteristicIcon}
                  />
                  <div className={styles.characteristicName}>{t(`characteristics.${char.name}`)}</div>
                  <div className={styles.characteristicDots}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={`${styles.valueDot} ${
                          i < char.value ? styles.filled : ""
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.carouselContainer}>
              <h4>{t("examplesOfThermalVariation")}</h4>
              <div className={styles.carousel} ref={carouselRef} key={selectedWoodType.id}>
                {selectedWoodType.temperatureAppearances.map((appearance) => (
                  <div
                    key={appearance.temperature}
                    className={styles.carouselItem}
                  >
                    <img
                      src={appearance.imageUrl}
                      alt={`${selectedWoodType.name} at ${appearance.temperature}`}
                      loading="lazy"
                      className={styles.carouselImage}
                    />
                    <div className={styles.temperatureLabel}>
                      {appearance.temperature}
                    </div>
                    {appearance.description && (
                      <p className={styles.carouselDescription}>
                        {t(`${selectedWoodType.name}.temperatureAppearances.${appearance.temperature}`)}
                      </p>
                    )}
                  </div>
                ))}
              </div>
              <button 
                className={`${styles.carouselNav} ${styles.prev}`}
                onClick={() => scrollCarousel('left')}
              >
                <ChevronLeft />
              </button>
              <button 
                className={`${styles.carouselNav} ${styles.next}`}
                onClick={() => scrollCarousel('right')}
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
      <RequestInformation />
    </div>
  );
};

export default ThermoModification;