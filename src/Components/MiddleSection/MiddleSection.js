import React from "react";
import styles from "./MiddleSection.module.css";
import pages from "../../images/motionarteffect-img10.png";
import section from "../../images/motionarteffect-img11.png";
import icon1 from "../../images/motionarteffect-img2.png";
import icon2 from "../../images/motionarteffect-img1.png";
import icon3 from "../../images/motionarteffect-img3.png";
import rating from "../../images/motionarteffect-img4.png";
import wand from "../../images/motionarteffect-img5.png";
import icon4 from "../../images/motionarteffect-img6.png";
import icon5 from "../../images/motionarteffect-img7.png";
import icon6 from "../../images/motionarteffect-img9.png";
import browser from "../../images/motionarteffect-img8.png";
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
          <h1 className={styles.font1} style={{ textAlign: "start" }}>
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

      <h1 className={styles.font1} style={{ padding: "10px" }}>
        Apply On Any Section Or Enable For <br />
        Whole Page
      </h1>
      <section>
        <div className={styles.card}>
          <h1 className={styles.font2}> Apply On Section</h1>
          <p className={styles.body}>
            {" "}
            Apply on section is a game-changer, offering an unparalleled way to
            manage applications directly from your website.
          </p>
          <img src={section} className={styles.img} alt="section" />
        </div>
        <div className={styles.card}>
          <h1 className={styles.font2}> Apply On Page</h1>
          <p className={styles.body}>
            Take your website to new heights with Motion Art for Elementor.
            Embrace the power of motion and animation.
          </p>
          <img className={styles.img} src={pages} alt="page" />
        </div>
      </section>

      <div className={styles.section2}>
        <h1 className={styles.font1}>Supported by All Popular Browsers</h1>

        <p className={styles.body}>
          Rest assured, Motion Art is designed to be compatible <br />
          with all major web browsers.
        </p>
        <div className={styles.icons}>
          <img src={browser} alt="browser" width="100%" height="100%" />
        </div>
      </div>
      <div className={styles.section3}>
        <div>
          <h1 className={styles.font1}>
            An All-Round Plugin With Powerful Features{" "}
          </h1>
          <p className={styles.body}>
            Whether you're a seasoned web designer or just starting out, Motion
            Art for Elementor seamlessly integrates with the Elementor platform,
            providing you with a seamless and intuitive experience.
          </p>
        </div>

        <div className={styles.cardsContainer}>
          <div
            className={styles.card}
            style={{ maxWidth: "400px", height: "400px" }}
          >
            <img src={icon6} alt="symbols" />
            <h1>Light Weight</h1>
            <p className={styles.body}>
              Motion Art for Elementor is designed to be lightweight.
            </p>
          </div>
          <div
            className={styles.card}
            style={{ maxWidth: "400px", height: "400px" }}
          >
            <img src={icon4} alt="symbols" />
            <h1>100% Responsive</h1>
            <p className={styles.body}>
              Create a consistent visual experience across all devices.
            </p>
          </div>
          <div
            className={styles.card}
            style={{ maxWidth: "400px", height: "400px" }}
          >
            <img src={icon5} alt="symbols" />
            <h1>User Friendly Interface</h1>
            <p className={styles.body}>
              Ensure a smooth experience for both applicants and administrators.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;
