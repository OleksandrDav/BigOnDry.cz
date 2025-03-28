import { Link } from 'react-router-dom';
import styles from './Home.module.css';

// Временные данные - в реальном приложении замените на данные из API
const featuredProducts = [
  { id: 1, name: 'Продукт 1', description: 'Описание продукта 1' },
  { id: 2, name: 'Продукт 2', description: 'Описание продукта 2' },
  { id: 3, name: 'Продукт 3', description: 'Описание продукта 3' },
];

const latestNews = [
  { id: 1, title: 'Новость 1', date: '2023-05-15', excerpt: 'Краткое описание новости 1' },
  { id: 2, title: 'Новость 2', date: '2023-05-10', excerpt: 'Краткое описание новости 2' },
];

const Home = () => {
  return (
    <div className={styles.home}>
      {/* Герой-секция */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Добро пожаловать в нашу компанию</h1>
          <p className={styles.heroSubtitle}>Инновационные решения для вашего бизнеса</p>
          <Link to="/products" className={styles.heroButton}>
            Наши продукты
          </Link>
        </div>
      </section>

      {/* Преимущества */}
      <section className={styles.features}>
        <h2 className={styles.sectionTitle}>Наши преимущества</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <h3>Качество</h3>
            <p>Мы используем только лучшие материалы и технологии</p>
          </div>
          <div className={styles.featureCard}>
            <h3>Опыт</h3>
            <p>Более 10 лет на рынке</p>
          </div>
          <div className={styles.featureCard}>
            <h3>Поддержка</h3>
            <p>Круглосуточная техническая поддержка</p>
          </div>
        </div>
      </section>

      {/* Избранные продукты */}
      <section className={styles.featuredProducts}>
        <h2 className={styles.sectionTitle}>Рекомендуемые продукты</h2>
        <div className={styles.productsGrid}>
          {featuredProducts.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <Link to={`/products/${product.id}`} className={styles.productLink}>
                Подробнее
              </Link>
            </div>
          ))}
        </div>
        <Link to="/products" className={styles.allProductsLink}>
          Все продукты →
        </Link>
      </section>

      {/* Последние новости */}
      <section className={styles.latestNews}>
        <h2 className={styles.sectionTitle}>Последние новости</h2>
        <div className={styles.newsList}>
          {latestNews.map((news) => (
            <div key={news.id} className={styles.newsItem}>
              <h3>
                <Link to={`/news/${news.id}`}>{news.title}</Link>
              </h3>
              <p className={styles.newsDate}>{new Date(news.date).toLocaleDateString()}</p>
              <p className={styles.newsExcerpt}>{news.excerpt}</p>
            </div>
          ))}
        </div>
        <Link to="/news" className={styles.allNewsLink}>
          Все новости →
        </Link>
      </section>
    </div>
  );
};

export default Home;