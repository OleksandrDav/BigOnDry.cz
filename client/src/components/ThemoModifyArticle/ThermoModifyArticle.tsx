import React from "react";
import styles from "./ThermoModifyArticle.module.css";
import Slider from "../Slider/Slider";

const ThermoModifyArticle: React.FC = () => {
  const slides = [
    {
      imageUrl:
        "https://www.bigondry.com/wp-content/uploads/2020/11/termotrattamento_legno.jpg",
      title: "Why to thermo-modify the wood?",
    },
  ];

  return (
    <div>
      <div className={styles.sliderContainer}>
        <Slider slides={slides} height="60vh" />
      </div>

      <div className={styles.contentContainer}>
        <h1 className={styles.mainHeader}>Why to thermo-modify the wood?</h1>

        <p className={styles.text}>
          Thermally Modified Wood (LTM) is increasingly known all over the world
          due to the benefits that this process produces at all levels of the
          supply chain. Through the heat treatment, the wood acquires greater{" "}
          <strong>durability, stability and appearance</strong>. It is much less
          sensitive to shrinkage and swelling, acquires considerable resistance
          to parasite infestation and gains an elegant livery that is
          homogeneous over the entire thickness of the material.
        </p>

        <p className={styles.text}>
          The goal was to optimize the process technology developed by BIGonDRY
          on aspects related to costs, environmental impact, safety and
          standardization of the production of thermally modified wood (LTM)
          with proven characteristics of{" "}
          <strong>durability, stability and appearance</strong>.
        </p>

        <p className={styles.text}>
          The products that arise within these <strong>processes</strong> are to
          be considered <strong>totally bio-compatible</strong>, as no chemicals
          of any kind are applied. This process gives wood a strong
          competitiveness with respect to alternative materials, including wood
          modified with other technologies or natural wood as it acquires
          greater <strong>durability and stability</strong>, avoiding having to
          chemically treat the wood and also eliminating the possibility of
          infestations by insects and obtaining a{" "}
          <strong>
            homogeneous dark color on the wood throughout the thickness
          </strong>
          .
        </p>

        <div className={styles.imageContainer}>
          <img
            src="http://www.bigondry.com/wp-content/uploads/2021/01/thw.png"
            alt="Thermo-modify"
          />
        </div>

        <h3 className={styles.sectionHeading}>The BIGonDRY-THW System</h3>
        <p className={styles.text}>
          The BIGonDRY-THW system is a process in the presence of saturated
          steam, which thanks to the slight overpressure, allows you to work at
          a temperature close to 230°C in an environment in the absence of
          oxygen, exploiting the natural production of gas from the wood (steam
          during first phase and gas from pyrolysis during the High Temperature
          phase) and, if necessary, by the controlled evaporation of a direct
          source of water supplied by the system. Consequently, the BIGonDRY-THW
          system uses a minimum amount of steam which allows to reach an
          ecological approach to the process with the following advantages:
        </p>

        <ul className={styles.list}>
          <li>
            A lower energy requirement compared to other HT systems that use
            high quantities of superheated steam;
          </li>
          <li>Limited emission of gas into the environment;</li>
          <li>A highly competitive plant cost</li>
        </ul>

        <p className={styles.text}>
          The quality and performance of the products are proven in the field by
          customer satisfaction and by the collaboration with independent
          research and experimentation institutes in Italy.
        </p>

        <h3 className={styles.sectionHeading}>Environmental Considerations</h3>
        <p className={styles.text}>
          BIGonDRY also pays close attention to the environment and recent
          analyzes carried out on high temperature cycles for gaseous, liquid
          and solid emissions from the plant have revealed reassuring data.
          BIGonDRY is able to equip THW heat treatment plants with very
          effective filtering systems to reduce at best, also minimizing the
          consumption of "clean" water, thus having an economic as well as
          environmental saving. Furthermore, the extractives contained in the
          recycled water should not be underestimated, which often contribute to
          improving not only the appearance of the heat-treated wood but also
          its quality as it can absorb some of the extractives previously
          dissolved in the liquid and thus re-acquire some chemically important
          substances for the effects of durability and the improvement of some
          physical characteristics.
        </p>

        <h3 className={styles.sectionHeading}>Continuous Improvement</h3>
        <p className={styles.text}>
          The technical staff of BIGonDRY is constantly looking for improvements
          in both drying and heat treatment programs, continually trying not
          only to obtain a product that is increasingly suited to market demands
          but also with environment and energy saving.
        </p>

        <h3 className={styles.sectionHeading}>Final Conditioning</h3>
        <p className={styles.text}>
          The very important phases of final conditioning distinguish the
          product and its stability, in fact in these phases the humidity
          regained through controlled humidification phases allow to confer the
          dimensional stability that characterizes this product. This treatment
          phase is essential in order to make the material suitable for
          subsequent processing and provide the end customer with a durable,
          resistant but also easily workable material.
        </p>
      </div>
    </div>
  );
};

export default ThermoModifyArticle;
