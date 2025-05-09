import React from "react";
import styles from "./ProductsGrid.module.css";
import { Product } from "../../types/types";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";  // Import the translation hook

interface ProductsGridProps {
  products: Product[];
}

const ProductsGrid: React.FC<ProductsGridProps> = ({ products }) => {
  const { t } = useTranslation("products"); // Access translations from the "common" namespace

  return (
    <div className={styles.productsSection}>
      <h2 className={styles.sectionHeader}>{t('header')}</h2> {/* Use the translation key here */}
      <div className={styles.productsGrid}>
        {products.map((product, index) => (
          <Link to={product.path} key={index} className={styles.productItem}>
            <div
              className={styles.productImage}
              style={{ backgroundImage: `url(${product.imageUrls[0]})` }}
            >
              <div className={styles.productName}>{t(`${product.name}.name`)}</div>
              <div className={styles.clickIndicator}></div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductsGrid;
