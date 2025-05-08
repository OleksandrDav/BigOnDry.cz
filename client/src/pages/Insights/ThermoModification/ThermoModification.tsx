import React, { useState } from "react";
import styles from "./ThermoModification.module.css";
import ThermoModifyArticle from "../../../components/ThemoModifyArticle/ThermoModifyArticle";
import { WoodType } from "../../../types/types";
import { WOOD_TYPES } from "../../../constants/woodTypes";

const ThermoModification: React.FC = () => {
  const [selectedWoodType, setSelectedWoodType] = useState<WoodType>(
    WOOD_TYPES[0]
  );

  return (
    <div>
      {/* Keep your existing ThermoModifyArticle */}
      <ThermoModifyArticle />

      {/* Add the new wood type selector section */}
      <div className={styles.container}>
        <div className={styles.woodTypesSection}>
          <h2 className={styles.sectionTitle}>Wood Type Characteristics</h2>

          <div className={styles.woodSelector}>
            {WOOD_TYPES.map((wood) => (
              <button
                key={wood.id}
                className={`${styles.woodButton} ${
                  selectedWoodType.id === wood.id ? styles.active : ""
                }`}
                onClick={() => setSelectedWoodType(wood)}
              >
                {wood.name}
              </button>
            ))}
          </div>

          <div className={styles.woodInfo}>
            <h2 className={styles.woodName}>{selectedWoodType.name}</h2>
            <h3 className={styles.woodTitle}>{selectedWoodType.title}</h3>

            <div className={styles.description}>
              {selectedWoodType.description.map((paragraph, pIndex) => (
                <p key={pIndex} className={styles.paragraph}>
                  {paragraph.map((textBlock, tIndex) => (
                    <span
                      key={tIndex}
                      className={`${textBlock.isBold ? styles.boldText : ""}`}
                    >
                      {textBlock.text}
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
                  <div className={styles.characteristicName}>{char.name}</div>
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
              <h4>Examples of thermal variation</h4>
              <div className={styles.carousel} key={selectedWoodType.id}>
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
                        {appearance.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThermoModification;
