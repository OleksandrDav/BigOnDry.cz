import React from "react";
import styles from "./Home.module.css";
import { SLIDES } from "../../constants/slides";
import { PRODUCTS } from "../../constants/products";
import Slider from "../../components/Slider/Slider";
import ArticleSection from "../../components/ArticleSection/ArticleSection";
import ProductsGrid from "../../components/ProductsGrid/ProductsGrid";
import PolygonSection from "../../components/PolygonSection/PolygonSection";
import { INSIGHTLINKS } from "../../constants/insightLinks";
import { Link } from "react-router-dom";
import InsightsList from "../../components/InsightsList/InsightsList";

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <Slider slides={SLIDES} />
      <ArticleSection />
      <ProductsGrid products={PRODUCTS} />

      <div>
        <h2 className={styles.sectionHeader}>Insights</h2>
        <div className={styles.container}>
          <PolygonSection />
          <InsightsList />
        </div>
      </div>
    </div>
  );
};

export default Home;
