import React, { useState, useEffect, useCallback } from "react";
import styles from "./Slider.module.css";
import { Slide } from "../../types/types";
import RequestInformation from "../RequestInformation/RequestInformation";

interface SliderProps {
  slides: Slide[];
  height?: string;
  popup?: boolean;
}

const Slider: React.FC<SliderProps> = ({ slides, height = "100vh", popup = true }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showRequestInfo, setShowRequestInfo] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    // Only set interval if there's more than one slide
    if (slides.length > 1) {
      const intervalId = setInterval(() => {
        nextSlide();
      }, 5000);

      return () => clearInterval(intervalId);
    }
  }, [nextSlide, slides.length]);

  const toggleRequestInfoPopup = () => {
    setShowRequestInfo(!showRequestInfo);
  };

  const sliderStyle = {
    height: height
  };

  return (
    <div className={styles.slider} style={sliderStyle}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`${styles.slide} ${
            index === currentSlide ? styles.active : ""
          }`}
          style={{ backgroundImage: `url(${slide.imageUrl})` }}
        >
          <div className={styles.slideOverlay}></div>
          <div className={styles.slideContent}>
            <p>{slide.title}</p>
          </div>
        </div>
      ))}

      {/* Only show navigation if there's more than one slide */}
      {slides.length > 1 && (
        <div className={styles.navigation}>
          <button onClick={prevSlide} className={styles.navButton}>
            &lt;
          </button>
          <button onClick={nextSlide} className={styles.navButton}>
            &gt;
          </button>
        </div>
      )}

      {/* Request Information Button */}
      {popup && (
        <div className={styles.requestButtonContainer}>
          <button 
            className={styles.requestButton}
            onClick={toggleRequestInfoPopup}
          >
            Request Information
          </button>
        </div>
      )}

      {/* Request Information Popup */}
      {showRequestInfo && (
        <div className={styles.popupOverlay}>
          <div className={styles.popup}>
            <button className={styles.closeButton} onClick={toggleRequestInfoPopup}>
              ✕
            </button>
            <RequestInformation />
          </div>
        </div>
      )}
    </div>
  );
};

export default Slider;