import React from 'react';
import { useParams } from 'react-router-dom';
import Slider from '../../components/Slider/Slider'; 
import { PRODUCTS } from '../../constants/products';
import styles from './Product.module.css';

const Product: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const path = useParams();
  console.log(path);
  
  const productId = id ? parseInt(id) : 0;
  const product = PRODUCTS.find(p => p.id === productId);

  if (!product) {
    return <div className={styles.notFound}>Product not found</div>;
  }

  // Convert product images to slides format
  const slides = product.imageUrls.map(imageUrl => ({
    imageUrl,
    title: product.name
  }));

  return (
    <div className={styles.productPage}>
      {/* Slider section */}
      <div className={styles.sliderContainer}>
        <Slider slides={slides} height="60vh" />
      </div>
      
      
    </div>
  );
};

export default Product;