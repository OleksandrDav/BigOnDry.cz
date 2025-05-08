import React from "react";
import styles from "./Ispm15.module.css";
import Slider from "../../../components/Slider/Slider";
import RequestInformation from "../../../components/RequestInformation/RequestInformation";

interface Ispm15Props {}

const Ispm15: React.FC<Ispm15Props> = ({}) => {
  const slides = [
    {
      imageUrl:
        "https://www.bigondry.com/wp-content/uploads/2020/11/P1220172.jpg",
      title: "Why to do ISPM-15 treatment?",
    },
  ];

  return (
    <div>
      <div className={styles.sliderContainer}>
        <Slider slides={slides} height="60vh" />
      </div>
      
       
      <div className={styles.contentContainer}>
        <h1 className={styles.mainHeader}>Why to do ISPM-15 treatment?</h1>
        
        <h2 className={styles.sectionHeading}>Regulation of Wood Packaging Material in International Trade</h2>
        <p className={styles.text}>
          FAO ISPM 15 standard is now operational in many countries and, of course, more and more countries will require wooden export packaging that conforms to the Standard.
        </p>
        
        <p className={styles.text}>
          The standard issued by the FAO refers to packaging material in raw (solid) softwood or hardwood; it therefore includes all wooden packaging, such as pallets (both new and used), stowage materials (dunnage), crates, drums, reels and loading platforms.
        </p>
        
        <p className={styles.text}>
          The trademark consists of the international symbol 'IPPC', the ISO country code consisting of two letters followed by a unique number assigned by the NPPO to the manufacturer of the wood packaging material who is responsible for ensuring the use of appropriate wood and duly marked and the abbreviation for the treatment measure used (HT).
        </p>
        
        <h3 className={styles.subHeading}>Approved measures for wood packaging material are:</h3>
        <ul className={styles.list}>
          <li>heat treatment (HT),</li>
          <li>fumigation treatment with methyl bromide (MB) – banned in the EU since March 2010</li>
        </ul>
        
        <p className={styles.text}>
          The company has been able to distinguish itself over the years for having invested heavily in R&D, always devising innovative and ad-hoc solutions precisely to give its customers something more!
        </p>
        
        <p className={styles.text}>
          And while strongly committed to designing new technologically advanced systems, BIGonDRY Srl is increasingly focused on eco-sustainable processes and the construction of eco-compatible systems in order to create an opportunity for development but with attention to optimizing energy consumption, combining the best relationship between quality and price, with excellent performance thanks to the most recent technological innovations (Direct Generator Heating System, TOP control systems with monitoring and management of Energy costs, heat recovery units, here are just a few:
        </p>
        
        <h3 className={styles.subHeading}>SPEED:</h3>
        <p className={styles.text}>
          Optimization of process times with very high efficiency heating systems so as to be able to carry out ISPM-15 treatment cycles in an average time of 3-4 hours.
        </p>
        
        <h3 className={styles.subHeading}>QUALITY:</h3>
        <p className={styles.text}>
          The highly advanced control systems, with extremely precise probes and measurement systems, allow for high quality and fully automatic processes.
        </p>
        
        <h3 className={styles.subHeading}>ENERGY SAVING:</h3>
        <p className={styles.text}>
          Thanks to the use of heat recovery units, inverter-controlled actuators and enhanced and efficient heating systems, we have obtained the lowest energy consumption per cycle.
        </p>
        
        <h3 className={styles.subHeading}>CONTROL:</h3>
        <p className={styles.text}>
          Important energy management functions have been implemented in the VENUS 2500 controllers, recording and storing the consumption parameters detected during the performance of the drying cycles, quantifying them both in terms of energy (power in kW) and in terms of cost, after introducing energy costs unitary (€ / kWh). The function allows you to create a historical archive by comparing different types of cycles and giving an immediate image of real consumption for various essences, having different thicknesses and in different external conditions.
        </p>
        
        {/* ... (keep all your existing content) ... */}
        
        <h3 className={styles.subHeading}>Below is a table with some consumptions:</h3>
        <div className={styles.tableWrapper}>
          <table className={styles.consumptionTable}>
            <thead>
              <tr>
                <th rowSpan={2}>Load capacity:</th>
                <th rowSpan={2}>Es. models</th>
                <th rowSpan={2}>ISPM-15 treatment times</th>
                <th rowSpan={2}>Average heat consumption for ISPM-15 m3 methane gas / cycle</th>
                <th rowSpan={2}>Total average heat consumption for ISPM-15 + drying m3 methane gas / pallet</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>200-300 pallets<br/>15-20 cm slatted wood</td>
                <td>LEM 46.43.24</td>
                <td>3-4 h</td>
                <td>13-16</td>
                <td>0,35-0,40</td>
              </tr>
              <tr>
                <td>400-500 pallets<br/>30-35 cm slatted wood</td>
                <td>LEM 56.58.34</td>
                <td>3-4 h</td>
                <td>25-35</td>
                <td>0,35-0,40</td>
              </tr>
              <tr>
                <td>800-1000 pallets<br/>40-50 cm slatted wood</td>
                <td>LEM 66.73.34</td>
                <td>3-4 h</td>
                <td>50-70</td>
                <td>0,35-0,40</td>
              </tr>
              <tr>
                <td>1500-2000 pallets<br/>80-100 cm slatted wood</td>
                <td>LEM 86.103.34</td>
                <td>3-4 h</td>
                <td>100-140</td>
                <td>0,35-0,40</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <RequestInformation />
    </div>
  );
};

export default Ispm15;