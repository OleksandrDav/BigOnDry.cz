import React from "react";
import Slider from "../../components/Slider/Slider";
import styles from "./Company.module.css";

const Company: React.FC = () => {
  const insights = [
    {
      name: "Technical Offices",
      imageUrl:
        "https://www.bigondry.com/wp-content/uploads/2021/01/uff-progettazione.jpg",
    },
    {
      name: "Executive Offices",
      imageUrl:
        "https://www.bigondry.com/wp-content/uploads/2021/01/uff-assistenza.jpg",
    },
    {
      name: "Commercial Offices",
      imageUrl:
        "https://www.bigondry.com/wp-content/uploads/2021/01/uff-commerciale.jpg",
    },
    {
      name: "Meeting room",
      imageUrl:
        "https://www.bigondry.com/wp-content/uploads/2020/12/azienda_bigondry_01-1.jpg",
    },
    {
      name: "Administrative Offices",
      imageUrl:
        "https://www.bigondry.com/wp-content/uploads/2021/01/uff-amministrativo.jpg",
    },
  ];

  const slides = [
    {
      imageUrl:
        "https://www.bigondry.com/wp-content/uploads/2020/12/azienda_bigondry_02.png",
      title: "Company",
    },
    {
      imageUrl:
        "https://www.bigondry.com/wp-content/uploads/2020/12/azienda_bigondry_01-1.jpg",
      title: "Company",
    },
    {
      imageUrl:
        "https://www.bigondry.com/wp-content/uploads/2020/12/azienda_bigondry_04.png",
      title: "Company",
    },
    {
      imageUrl:
        "https://www.bigondry.com/wp-content/uploads/2020/12/azienda_bigondry_03.png",
      title: "Company",
    },
  ];

  return (
    <div className={styles.companyPage}>
      <div className={styles.sliderContainer}>
        <Slider slides={slides} height="60vh" />
      </div>

      {/* Company info section */}
      <div className={styles.infoContainer}>
        <h1 className={styles.heading}>
          BIGonDRY Srl: a company with experience and passion in the design and
          construction of plants and systems for drying, steaming and heat
          treatment of wood.
        </h1>

        <p>
          Passion and experience unite two generations, father and son, and led
          in 2001 to the foundation of <strong>BIGonDRY Srl</strong>, a company
          specializing in the design and construction of systems for drying,
          steaming and heat treatment of wood.
        </p>

        <p className={styles.italic}>
          The constant goal is the enhancement of a raw material, such as wood,
          as ancient as fundamental in today's global economy.
        </p>

        <p>
          <strong>Made in Italy</strong> technologies combined with fully
          automatic control systems, create systems designed also in the light
          of an operating economy, with important energy savings.
        </p>

        <p>
          <strong>BIGonDRY srl</strong> is a careful and scrupulous partner that
          wants to ensure a quality standard of excellence by using quality
          materials and high construction standards even in the simplest
          products. In fact, BIGonDRY studies every request with attention and
          commitment, from the treatment of firewood, to the drying of precious
          woods, to special thermo-modification and phytosanitary treatments for
          the packaging sector. It also has produced special treatment systems
          in the clothing and agri-food sector, coming out victorious.
        </p>

        <p>
          Thanks to the synergy between collaborators with many years of
          experience in the sector and young and creative forces, with a very
          important preparation, full of enthusiasm and resourcefulness, it was
          possible to create a production and commercial reality able to operate
          successfully and offer CUSTOMIZED and INNOVATIVE SOLUTIONS, starting
          from the drying kilns up to the construction of turnkey plants,
          complete with a thermal and electrical energy generation system, with
          the flexibility to adapt to any circumstance.
        </p>

        <p>
          <strong>BIGonDRY srl</strong> has about thirty employees and a lot of
          agents in Italy and in the rest of the world, with representative
          offices organized on site. Strong of professionalism and technical and
          commercial preparation, it is able to communicate in multiple
          languages, as well as to install and test Turnkey systems, with
          internal linguistic support such as: English, French, German, Spanish,
          Hungarian, Romanian, Serbo-Croatian and Russian.
        </p>

        <p className={styles.italic}>
          <em>
            Hundreds of systems installed in over 50 countries around the world
            ... reliability and quality are the plus of BIGonDRY Srl.
          </em>
        </p>
      </div>

      {/* Company insights section */}
      <div className={styles.insightsSection}>
  <h2 className={styles.insightsHeading}>Our Workspaces</h2>
  <div className={styles.insightsGrid}>
    {insights.map((insight, index) => (
      <div key={index} className={styles.insightCard}>
        <img 
          src={insight.imageUrl} 
          alt={insight.name} 
          className={styles.insightImage} 
          loading="lazy"
        />
        <div className={styles.insightOverlay}>
          <h3 className={styles.insightName}>{insight.name}</h3>
        </div>
      </div>
    ))}
  </div>
</div>
    </div>
  );
};

export default Company;
