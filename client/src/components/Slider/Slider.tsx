import React, { useState, useEffect, useCallback } from "react";
import styles from "./Slider.module.css";
import { Slide } from "../../types/types";

interface SliderProps {
  slides: Slide[];
  height?: string;
}

const Slider: React.FC<SliderProps> = ({ slides, height = "100vh" }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [nextSlide]);

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

      <div className={styles.navigation}>
        <button onClick={prevSlide} className={styles.navButton}>
          &lt;
        </button>
        <div className={styles.dots}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${
                index === currentSlide ? styles.activeDot : ""
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
        <button onClick={nextSlide} className={styles.navButton}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Slider;