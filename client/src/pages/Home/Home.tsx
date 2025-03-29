import React from "react";
import styles from "./Home.module.css";
import { SLIDES } from "../../constants/slides";
import { PRODUCTS } from "../../constants/products";
import Slider from "../../components/Slider/Slider";
import ArticleSection from "../../components/ArticleSection/ArticleSection";
import ProductsGrid from "../../components/ProductsGrid/ProductsGrid";

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <Slider slides={SLIDES} />
      <ArticleSection />
      <ProductsGrid products={PRODUCTS} />
    </div>
  );
};

export default Home;