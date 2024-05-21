import React from "react";
import logo from "../../images/motionarteffect-img2.png";
import styles from "./Header.module.css";
const header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
        <span>envato</span>market
      </div>
      <button>Buy now</button>
    </div>
  );
};

export default header;
