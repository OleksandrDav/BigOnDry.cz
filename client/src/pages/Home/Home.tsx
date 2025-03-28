import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import { SLIDES } from "../../constants/slides";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const slides = SLIDES;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(intervalId);
  }, [nextSlide]);

  return (
    <div className={styles.home}>


      <div className={styles.slider}>
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
              <p>{slide.description}</p>
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






      {/* Mock content sections */}
      <section className={styles.featuredProducts}>
        <h2>Featured Products</h2>
        <div className={styles.productGrid}>
          {[1, 2, 3, 4].map((product) => (
            <div key={product} className={styles.productCard}>
              <div className={styles.productImage}></div>
              <h3>Product {product}</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button className={styles.productButton}>View Details</button>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.aboutSection}>
        <div className={styles.aboutContent}>
          <h2>About Our Company</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. 
            Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus 
            rhoncus ut eleifend nibh porttitor.
          </p>
          <p>
            Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl 
            tempor. Suspendisse dictum feugiat nisl ut dapibus.
          </p>
          <button className={styles.learnMoreButton}>Learn More</button>
        </div>
        <div className={styles.aboutImage}></div>
      </section>

      <section className={styles.testimonials}>
        <h2>What Our Customers Say</h2>
        <div className={styles.testimonialGrid}>
          {[1, 2, 3].map((testimonial) => (
            <div key={testimonial} className={styles.testimonialCard}>
              <div className={styles.testimonialQuote}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis 
                sapien facilisis ultricies."
              </div>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorAvatar}></div>
                <div className={styles.authorInfo}>
                  <h4>John Doe</h4>
                  <p>Customer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2>Ready to Get Started?</h2>
        <p>
          Join thousands of satisfied customers who are already using our products and services.
        </p>
        <div className={styles.ctaButtons}>
          <button className={styles.primaryButton}>Sign Up Now</button>
          <button className={styles.secondaryButton}>Contact Us</button>
        </div>
      </section>



      
    </div>
  );
};

export default Home;