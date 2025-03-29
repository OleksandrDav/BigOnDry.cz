import React from "react";
import styles from "./ProductsGrid.module.css";
import { Product } from "../../types/types";
import { Link } from "react-router-dom";

interface ProductsGridProps {
  products: Product[];
}

const ProductsGrid: React.FC<ProductsGridProps> = ({ products }) => {
  return (
    <div className={styles.productsSection}>
      <h2 className={styles.sectionHeader}>Products</h2>
      <div className={styles.productsGrid}>
        {products.map((product, index) => (
          <Link to={product.path} key={index} className={styles.productItem}>
            <div
              className={styles.productImage}
              style={{ backgroundImage: `url(${product.imageUrls[0]})` }}
            >
              <div className={styles.productName}>{product.name}</div>
              <div className={styles.clickIndicator}></div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductsGrid;