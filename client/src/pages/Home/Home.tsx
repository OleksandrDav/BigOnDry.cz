import React from "react";
import { useTranslation } from "react-i18next";
import ArticleSection from "../../components/ArticleSection/ArticleSection";
import InsightsList from "../../components/InsightsList/InsightsList";
import PolygonSection from "../../components/PolygonSection/PolygonSection";
import ProductsGrid from "../../components/ProductsGrid/ProductsGrid";
import RequestInformation from "../../components/RequestInformation/RequestInformation";
import Slider from "../../components/Slider/Slider";
import { PRODUCTS } from "../../constants/products";
import { SLIDES } from "../../constants/slides";
import styles from "./Home.module.css";

const Home: React.FC = () => {
  const { t } = useTranslation(['slides', 'produts']);
  
  const translatedSlides = SLIDES.map((slide, index) => ({
    ...slide,
    title: t(`slides.${index}.title`)
  }));
  

  return (
    <div className={styles.home}>
      <Slider slides={translatedSlides} />
      <ArticleSection />
      <ProductsGrid products={PRODUCTS} />

      <div>
        <h2 className={styles.sectionHeader}>{t("insights")}</h2>
        <div className={styles.container}>
          <PolygonSection />
          <InsightsList />
        </div>
      </div>
      <RequestInformation />
    </div>
  );
};

export default Home;