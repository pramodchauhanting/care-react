/* eslint-disable @next/next/no-img-element */
import styles from "../styles/sections/Video.module.scss";

//lightgallery import files
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";
// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-video.css";

import video_banner from "../public/home/video_banner.jpg";
import video_mobile_banner from "../public/home/video_mobile_banner.jpg";
import play_icon from "../public/home/play_icon.png";
import video_bg from "../public/home/video_bg.png";
const Video = () => {
  return (
    <section className={`${styles.unique_description}`} name="video">
      <div className="container">
        <div className={`${styles.unique_description_flex}`}>
          <div
            className={`${styles.unique_description_content} toTop`}
            data-scroll
          >
            <h2 className={`${styles.heading_section} heading_section`}>
              A sip of serenity
            </h2>
            <p className={`${styles.para} para para_opacity`}>
              The hustle and bustle of everyday life can leave you feeling
              stressed, so steal a moment to relax, unwind and sip the taste of
              heaven with a cup of Care tea.
            </p>
          </div>
        </div>

        <LightGallery speed={500} plugins={[lgThumbnail, lgZoom, lgVideo]}>
          <a href="https://www.youtube.com/watch?v=7zGwTxBJqHo">
            <div className={`${styles.video_main} pt_20 toTop`} data-scroll>
              <img
                src={video_banner.src}
                className={`${styles.video_banner} mobile_none img-responsive`}
                alt=""
              />
              <img
                src={video_mobile_banner.src}
                className={`${styles.video_banner} mobile_show img-responsive`}
                alt=""
              />
              <div className={`${styles.play_icon}`}>
                <img src={play_icon.src} alt="" />
              </div>
            </div>
          </a>
        </LightGallery>
      </div>
      <div className={`${styles.video_wave}`}>
        <img src={video_bg.src} alt="" />
      </div>
    </section>
  );
};

export default Video;
