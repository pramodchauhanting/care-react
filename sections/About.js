/* eslint-disable @next/next/no-img-element */
import styles from "../styles/sections/About.module.scss";
import Image from "next/image";
const About = () => {
  return (
    <section
      className={`${styles.about_signature} pt_60 pb_100`}
      name="about_us"
    >
      <div className="container">
        <div className={`${styles.about_signature_flex}`}>
          <div className={`${styles.about_signature_content}`}>
            <h2
              className={`${styles.heading_section} heading_section toTop`}
              data-scroll
            >
              With Care, you enjoy an array of herbal teas that refresh and
              energize your mind, body, and soul.
            </h2>
            <p className={`${styles.para} para toTop`} data-scroll>
              We have reimagined turmeric’s ancient healing properties to create
              an impeccable tea that blends health with taste. With its
              Ayurvedic herbs and spices, it rejuvenates, detoxifies, boosts
              metabolism, and supports immunity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
