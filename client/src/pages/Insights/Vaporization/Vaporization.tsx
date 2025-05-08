import React from "react";
import styles from "./Vaporization.module.css";
import Slider from "../../../components/Slider/Slider";
import RequestInformation from "../../../components/RequestInformation/RequestInformation";

interface VaporizationProps {}

const Vaporization: React.FC<VaporizationProps> = ({}) => {
  const slides = [
    {
      imageUrl:
        "https://www.bigondry.com/wp-content/uploads/2020/12/parete_in_legno_01-1024x994.jpg",
      title: "Why to vaporize the wood?",
    },
  ];

  return (
    <div>
      <div className={styles.sliderContainer}>
        <Slider slides={slides} height="60vh" />
      </div>

      <div className={styles.contentContainer}>
        <h1 className={styles.mainHeader}>Why to vaporize the wood?</h1>
        
        <p className={styles.text}>
          The steaming chambers have the purpose of homogenizing and slightly modifying the color of the wood and removing any presence and effect of parasites, in order to make the wood more workable.
        </p>
        
        <p className={styles.text}>
          Inside the wood, the acids subjected to a 100% humid environment and at temperatures of about 90÷95°C, tend to melt and, from the central part of the wood, spread evenly over the section, homogeneously coloring the whole paste of the wood. Vaporization also serves to neutralize the action of bacteria and parasites that could, over time, attack and alter the good condition of the wood. The fibers of the wood, subjected to this treatment, are softened, facilitating the subsequent drying and processing of the wood itself. The vaporization treatment is normally applied to some essences such as Beech, Cherry, Walnut and some tropical species. The wood must be freshly cut, in logs (for shearing or for peeling) or in the form of sawn timber.
        </p>
        
        <p className={styles.text}>
          BIGonDRY Srl has developed various vaporization systems, depending on the thermal agent available and the energy generator used. In the steamer, the steam can be obtained in a "direct" way (direct injection of saturated steam, at low pressure) or in an "indirect" way (evaporation of the water contained in special tanks inside the chamber).
        </p>
        
        <h3 className={styles.sectionHeading}>a) Direct Steaming</h3>
        <p className={styles.text}>
          The steam is injected into the compartment containing the timber through a series of perforated pipes located under the stack, along the three walls. The vapor must be saturated or nearly saturated, and must expand in the chamber until it reaches atmospheric pressure. If you do not have saturated steam, it must be moistened (the steam is blown against the water made to enter under the steam tube in a special channel). The holes in the pipe must be turned towards the floor and not against the timber in order not to cause local overheating and drying.
        </p>
        
        <h3 className={styles.sectionHeading}>b) Indirect Steaming</h3>
        
        <h4 className={styles.subHeading}>Traditional System</h4>
        <p className={styles.text}>
          The steam is produced inside the steaming chamber by bringing the water contained in special stainless steel tanks to a boil, arranged below the floor level, along the three walls not affected by the door, under the stack. Inside these tanks a traditional heating battery is immersed in which superheated water or steam flows as a thermal agent. Using this system it is necessary to keep the water level in the tanks constant.
        </p>
        
        <h4 className={styles.subHeading}>Direct Burner System</h4>
        <p className={styles.text}>
          The steam is produced inside the vaporization chamber by bringing the water contained in special stainless steel tanks to a boil, arranged below the floor level, along the three walls not affected by the door, under the stack. Inside these tanks there is a direct heating battery heated by the flame of a gas burner. Using this system it is necessary to keep the water level in the tanks constant.
        </p>


        <div className={styles.tableWrapper}>
      <h4 className={styles.tableTitle}>Comparison between Direct and Indirect Systems</h4>
      <table className={styles.comparisonTable}>
        <thead>
          <tr>
            <th>Direct Steaming</th>
            <th>Indirect Steaming</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Easier tube plant</td>
            <td>Mild treatment of the wood, which minimizes the risk of damage</td>
          </tr>
          <tr>
            <td>It is necessary to have saturated steam at low pressure</td>
            <td>Possibility of condensation recovery, with obvious energy savings</td>
          </tr>
        </tbody>
      </table>
    </div>
        
        <p className={styles.text}>
          All the systems described above are controlled by a microprocessor, developed directly by BIGonDRY Srl in collaboration with a software house. This system allows the step-by-step control of the cycle phases according to Time and Temperature. Each program can be registered with a code, recalled, modified and reused for subsequent cycles.
        </p>
        
        <p className={styles.text}>
          Sensors are used to detect the temperature in the chamber and also in the wood. This allows the cycle to be carried out according to the actual temperature detected in the heart of the wood, which ensures a finer and more precise control of the process, since the climatic conditions of the air change faster than inside the wood and are more influenced by the external climatic conditions.
        </p>
      </div>
      <RequestInformation />
    </div>
  );
};

export default Vaporization;