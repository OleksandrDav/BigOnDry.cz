import { Outlet } from "react-router-dom";
import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.css";
import ScrollToTop from "../ScrollToTop"; 

const Layout: React.FC = () => {
  return (
    <div className={styles.layout}>
      <ScrollToTop /> 
      <Navbar />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
