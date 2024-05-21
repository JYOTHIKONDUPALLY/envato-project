import React from "react";
import styles from "./HeroSection.module.css";
import logo from "../../images/MotionArtEffect-logo.png";
import icon1 from "../../images/motionarteffect-img2.png";
import icon2 from "../../images/motionarteffect-img1.png";
import icon3 from "../../images/motionarteffect-img3.png";
import rating from "../../images/motionarteffect-img4.png";
const HeroSection = () => {
  const arr = [icon1, icon2, icon3];
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

      <p
        style={{
          fontSize: "20px",
          textAlign: "center",
          fontWeight: 400,
          margin: "auto",
          marginTop: "50px",
          color: "white",
        }}
      >
        Trusted by thousands of users around the world
      </p>
      <div className={styles.rating}>
        {arr.map((item, index) => (
          <card key={index}>
            <img src={item} alt="icon" />
            <div>
              <img src={rating} alt={rating} />
              <p>4.5 score, 9 Reviews</p>
            </div>
          </card>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
