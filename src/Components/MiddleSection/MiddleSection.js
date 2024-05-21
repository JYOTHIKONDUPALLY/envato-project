import React from "react";
import styles from "./MiddleSection.module.css";
import pages from "../../images/motionarteffect-img10.png";
import section from "../../images/motionarteffect-img11.png";
import icon1 from "../../images/motionarteffect-img2.png";
import icon2 from "../../images/motionarteffect-img1.png";
import icon3 from "../../images/motionarteffect-img3.png";
import rating from "../../images/motionarteffect-img4.png";
import wand from "../../images/motionarteffect-img5.png";
const MiddleSection = () => {
  const arr = [icon1, icon2, icon3];
  return (
    <div className={styles.MiddleSection}>
      <p
        style={{
          fontSize: "20px",
          textAlign: "center",
          fontWeight: 400,
          margin: "auto",
        }}
      >
        Trusted by thousands of users around the world
      </p>
      <div className={styles.rating}>
        {arr.map((item, index) => (
          <card key={index}>
            <img src={item} alt="icon" width={88} height={88} />
            <div>
              <img src={rating} alt={rating} />
              <p>4.5 score, 9 Reviews</p>
            </div>
          </card>
        ))}
      </div>
      <div className={styles.wand}>
        <div>
          <h1 className={styles.font1}>
            Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors
          </h1>
          <p
            style={{
              color: "#d2d0d8",
              fontSize: "18px",
              marginTop: "20px",
              lineHeight: "30px",
            }}
          >
            Motion Art for Elementor is a groundbreaking plugin that empowers
            you to effortlessly infuse your website with visually stunning
            motion art elements.
          </p>
          <button className={styles.btn}>
            <a href="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891">
              Purchase From Envato{" "}
              <ion-icon name="arrow-forward-outline"></ion-icon>{" "}
            </a>
          </button>
        </div>
        <div>
          <img src={wand} width={250} height={250} alt="wand" />
        </div>
      </div>
      <section>
        <h1 className={styles.font2}>
          Apply On Any Section Or Enable For Whole Page
        </h1>
        <card>
          <h1 className={styles.font2}> Apply On Section</h1>
          <p>
            {" "}
            Apply on section is a game-changer, offering an unparalleled way to
            manage applications directly from your website.
          </p>
          <img src={section} alt="section" />
        </card>
        <card>
          <h1 className={styles.font2}> Apply On Page</h1>
          <p>
            Take your website to new heights with Motion Art for Elementor.
            Embrace the power of motion and animation.
          </p>
          <img src={pages} alt="page" />
        </card>
      </section>
    </div>
  );
};

export default MiddleSection;
