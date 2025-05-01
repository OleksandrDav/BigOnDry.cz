import React from "react";
import styles from "./WoodDrying.module.css";
import Slider from "../../../components/Slider/Slider";

interface WoodDryingProps {}

const WoodDrying: React.FC<WoodDryingProps> = ({}) => {
  const slides = [
    {
      imageUrl:
        "https://www.bigondry.com/wp-content/uploads/2020/12/legno_segheria_01-1024x994.jpg",
      title: "Why to dry the wood?",
    },
  ];

  return (
    <div>
      <div className={styles.sliderContainer}>
        <Slider slides={slides} height="60vh" />
      </div>
      
      <div className={styles.contentContainer}>
        <h1 className={styles.mainHeader}>Why to dry the wood?</h1>
        
        <p className={styles.text}>
          Wood is a hygroscopic material, it receives or loses humidity, depending on the climate that surrounds it; by modifying the climate in a controlled way, drying can be accelerated. There are different techniques for drying, the most common and widespread is the traditional or conventional drying.
        </p>
        
        <p className={styles.text}>
          Traditional drying takes advantage of the physical properties of air to contain more water as the temperature increases.                                                    
        </p>
        
        <p className={styles.subHeading}>So in the drying process is important to check:</p>
        
        <ul className={styles.list}>
          <li>The air temperature</li>
          <li>The relative humidity of the air</li>
          <li>The ventilation</li>
        </ul>
        
        <h3 className={styles.sectionHeading}>The air temperature</h3>
        <p className={styles.text}>
          Let's imagine a conventional drying cell, completely hermetic and insulated: by introducing cold air from the outside and then heated, the air increases the ability to absorb moisture from the wood.
        </p>
        
        <h3 className={styles.sectionHeading}>The relative humidity of the air</h3>
        <p className={styles.text}>
          It is the relationship between the amount of water contained in the air at a given temperature. It can therefore be defined that on a traditional dryer, the air enters cold and therefore dry and comes out hot but humid, moisture that is released from the surface of the wood by means of ventilation.
        </p>
        
        <h3 className={styles.sectionHeading}>The ventilation</h3>
        <p className={styles.text}>
          Ventilation is the vehicle that transports humidity and temperature. It can be defined that, in traditional dryers, the air heated by the heat exchangers acquires the capacity to contain water and therefore with the ventilation it is conveyed into the wooden stacks that release their humidity to the air, when the air is saturated, it is expelled.
        </p>
        
        <p className={styles.text}>
          To control the processes in the drying kilns we must therefore control the temperature, relative humidity and ventilation.
        </p>
        
        <p className={styles.text}>
          For an adequate wood drying process, temperature and relative humidity values must be used which have already been experimentally determined for each type of wood essence.
        </p>
      </div>
    </div>
  );
};

export default WoodDrying;