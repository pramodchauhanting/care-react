/* eslint-disable @next/next/no-img-element */
import styles from "../styles/sections/Banner.module.scss";
import Image from "next/image";
import { useEffect } from "react";
import bottom_wave from "../public/home/bottom_wave.png";
const Banner = () => {
  useEffect(() => {
    let bannerItem = document.querySelector(".bannerAnim");
    let textSection = document.querySelector(".textAnim");
    bannerItem.classList.add("zoomin");
    textSection.classList.add("fadeUp");
  }, []);
  return (
    <div className={`${styles.banner}`}>
      <div className={`${styles.banner_slider}`}>
        <div className={`${styles.banner_item} bannerAnim`}>
          <div className="container">
            <div className={`${styles.text_section} textAnim`}>
              <h2 className={`${styles.banner_heading} banner_heading`}>
                The Taste Of Goodness and Care
              </h2>
            </div>
          </div>
          <div className={`${styles.bottom_wave}`}>
            <img src={bottom_wave.src} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
