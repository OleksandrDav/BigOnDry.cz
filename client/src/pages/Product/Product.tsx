import React from "react";
import { useParams } from "react-router-dom";
import Slider from "../../components/Slider/Slider";
import { PRODUCTS } from "../../constants/products";
import styles from "./Product.module.css";
import RichText from "../../components/RichText/RichText";
import ProductInsights from "../../components/ProductInsights.tsx/ProductInsights";
import RequestInformation from "../../components/RequestInformation/RequestInformation";

const Product: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const productId = id ? parseInt(id) : 0;
  const product = PRODUCTS.find((p) => p.id === productId);

  if (!product) {
    return <div className={styles.notFound}>Product not found</div>;
  }

  // Convert product images to slides format
  const slides = product.imageUrls.map((imageUrl) => ({
    imageUrl,
    title: product.name,
  }));

  return (
    <div className={styles.productPage}>
      {/* Slider section */}
      <div className={styles.sliderContainer}>
        <Slider slides={slides} height="60vh" popup={true}/>
      </div>

      {/* Product info section */}
      <div className={styles.productInfo}>
        <div className={styles.contentWrapper}>
          {product.contentImage && (
            <div className={styles.contentImageContainer}>
              <img
                src={product.contentImage}
                alt={product.name}
                className={styles.contentImage}
              />
            </div>
          )}

          <div className={styles.descriptionContainer}>
            <h1 className={styles.productTitle}>{product.title}</h1>
            <RichText paragraphs={product.description} />
          </div>
        </div>
      </div>

      {/* Product Insights section */}
      <ProductInsights />

      <RequestInformation />
    </div>
  );
};

export default Product;