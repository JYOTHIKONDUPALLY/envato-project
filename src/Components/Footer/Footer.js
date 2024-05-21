import React from "react";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>© 2023 Copywrite. All rights reserved by QodeMatrix</p>
      <div>
        <p>Documentation</p>
        <p>Support</p>
      </div>
    </div>
  );
};

export default Footer;
