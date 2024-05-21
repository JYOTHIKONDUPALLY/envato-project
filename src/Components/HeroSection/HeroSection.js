import React from "react";
import styles from "./HeroSection.module.css";
import logo from "../../images/MotionArtEffect-logo.png";

const HeroSection = () => {
  return (
    <div className={styles.HeroSection}>
      <div className={styles.TopSection}>
        <img src={logo} alt="icon" />
        <button>Purchase</button>
      </div>
      <div className={styles.MainSection}>
        <div>
          <h4 className={styles.font2}>Transform Your Website</h4>
          <h4>With Motion Art Effect</h4>
        </div>
        <div>
          <h1 className={styles.font1}>Attract Your Visitors</h1>
          <h1 className={styles.font1}>Attention With Colorful</h1>
          <h1 className={styles.font12}>Motion Art Effect</h1>
          <p style={{ color: "#d2d0d8", fontSize: "18px", marginTop: "20px" }}>
            Unleash the power of creativity with Motion Art for Elementor - your
            ultimate solution for seamlessly integrating captivating animations
            into your website.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
