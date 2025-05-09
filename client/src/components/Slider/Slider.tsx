import React, { useState, useEffect, useCallback } from "react";
import styles from "./Slider.module.css";
import { Slide } from "../../types/types";
import RequestInformation from "../RequestInformation/RequestInformation";
import { useTranslation } from "react-i18next";

interface SliderProps {
  slides: Slide[];
  height?: string;
  popup?: boolean;
}

const Slider: React.FC<SliderProps> = ({ slides, height = "100vh", popup = true }) => {
  const { t } = useTranslation('common');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showRequestInfo, setShowRequestInfo] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (slides.length > 1) {
      const intervalId = setInterval(() => {
        nextSlide();
      }, 5000);
      return () => clearInterval(intervalId);
    }
  }, [nextSlide, slides.length]);

  const toggleRequestInfoPopup = () => {
    setShowRequestInfo((prev) => !prev);
  };

  const sliderStyle = {
    height: height,
  };

  return (
    <div className={styles.slider} style={sliderStyle}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`${styles.slide} ${index === currentSlide ? styles.active : ""}`}
          style={{ backgroundImage: `url(${slide.imageUrl})` }}
        >
          <div className={styles.slideOverlay}></div>
          <div className={styles.slideContent}>
            <p>{slide.title}</p>
          </div>
        </div>
      ))}

      {slides.length > 1 && (
        <div className={styles.navigation}>
          <button
            onClick={prevSlide}
            className={styles.navButton}
            aria-label={t("slider.previous")}
          >
            &lt;
          </button>
          <button
            onClick={nextSlide}
            className={styles.navButton}
            aria-label={t("slider.next")}
          >
            &gt;
          </button>
        </div>
      )}

      {popup && (
        <div className={styles.requestButtonContainer}>
          <button
            className={styles.requestButton}
            onClick={toggleRequestInfoPopup}
          >
            {t("slider.requestInformation")}
          </button>
        </div>
      )}

      {showRequestInfo && (
        <div className={styles.popupOverlay} onClick={toggleRequestInfoPopup}>
          <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.closeButton}
              onClick={toggleRequestInfoPopup}
              aria-label={t("slider.closePopup")}
            >
              ✕
            </button>
            <RequestInformation slider={true} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Slider;
