/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import styles from "../styles/sections/Reviews.module.scss";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { useState, useEffect, useRef } from "react";

import coments_star from "../public/home/coments_star.png";
import Anuj_Kumar_Saroj from "../public/home/Anuj_Kumar_Saroj.jpg";

import Soundarya_Thakur from "../public/home/Soundarya_Thakur.jpg";
import Kiran_Mehra from "../public/home/Kiran_Mehra.jpg";
import Dia from "../public/home/Dia.jpg";
import Gazal_Rai from "../public/home/Gazal_Rai.jpg";
import Lakhan from "../public/home/Lakhan.jpg";
import Madalsa_Sharma from "../public/home/Madalsa_Sharma.jpg";
import arrow_slider from "../public/home/arrow_slider.png";

const Reviews = () => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [nav3, setNav3] = useState();
  const sliderRef = useRef();
  var settings1 = {
    prevArrow: (
      <img className="slickA ban_right_arrow" src={arrow_slider.src} />
    ),
    nextArrow: <img className="slickA ban_left_arrow" src={arrow_slider.src} />,
    dots: false,
  };
  var settings2 = {
    dots: false,
    infinite: true,
    arrows: false,
  };
  var settings3 = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    // asNavFor: `${nav1}, ${nav2}`,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
  };

  return (
    <section className={`${styles.testimonials} pb_100`} name="testimonial">
      <div className="container">
        <div className={`${styles.testimonials_title} toTop`} data-scroll>
          <h2 className={`${styles.heading_section1} heading_section`}>
            Don't believe us?
          </h2>
          <p className={`${styles.para} para`}>
            Hear it from the ones who love Care!
          </p>
        </div>
        <div className={`${styles.customers_say_main} d_flex`}>
          <Slider
            {...settings1}
            asNavFor={nav2 || nav3}
            ref={(slider1) => setNav1(slider1)}
            slidesToShow={1}
            dots={false}
            className={`${styles.slider} ${styles.slider_content} ${styles.customers_slider_1} custom_new_arrow`}
          >
            <div className={`${styles.slider_content_item}`}>
              <img src={coments_star.src} />
              <p className={`${styles.para} para`}>
                My mornings call for a cup of positivitea with Care. My
                favourite out of these five is Ashwagandha Spiced Green Tea. You
                let me know yours! Go and Buy Care Green Tea at India's Best
                Online Shopping Portals.
              </p>
              <p className={` ${styles.person_name} para f_w_m`}>
                Soundarya Thakur
              </p>
            </div>
            <div className={`${styles.slider_content_item}`}>
              <img src={coments_star.src} />
              <p className={`${styles.para} para `}>
                Made with 100% natural ayurvedic ingredients. Keeping myself fit
                with Care green tea. What a good way to start your day. It
                improves metabolism, detoxification, builds immunity, and keeps
                you look youthful. Also, it has ashwagandha in it which helps to
                manage desired sugar level and youthfulness.
              </p>
              <p className={` ${styles.person_name} para f_w_m`}>Kiran Mehra</p>
            </div>
            <div className={`${styles.slider_content_item}`}>
              <img src={coments_star.src} />
              <p className={`${styles.para} para `}>
                Your daily fix of immunity boosting ingredients. Green tea may
                help detox your body and it's important to do detoxification and
                here comes Care, which helps me in detoxification and helps in
                maintaining good health, fitness with their 3 amazing ranges of
                green tea.
              </p>
              <p className={` ${styles.person_name} para f_w_m`}>Dia</p>
            </div>
            <div className={`${styles.slider_content_item}`}>
              <img src={coments_star.src} />
              <p className={`${styles.para} para `}>
                Bringing together all the best ayurvedic ingredients to give you
                a glass of Immunity. Since childhood my father has given me only
                one remedy for everything -TURMERIC. Naturally during these
                times when health became a priority I had to choose a product
                which I could connect the most with.
              </p>
              <p className={` ${styles.person_name} para f_w_m`}>Gazal Rai</p>
            </div>
            <div className={`${styles.slider_content_item}`}>
              <img src={coments_star.src} />
              <p className={`${styles.para} para`}>
                Tried Care green tea and loved it! Have you tried it yet? My
                favorite ashwagandha green tea to boast my immunity and stay fit
                and fresh!!
              </p>
              <p className={` ${styles.person_name} para f_w_m`}>Lakhan</p>
            </div>
            <div className={`${styles.slider_content_item}`}>
              <img src={coments_star.src} />
              <p className={`${styles.para} para`}>
                Winters increase my love for tea, try the immunity boosting tea
                only from Care Health Benefits : Builds Immunity Helps
                Detoxification Keeps You Look Youthful Enhance Metabolism. Go
                for it!
              </p>
              <p className={` ${styles.person_name} para f_w_m`}>
                Madalsa Sharma
              </p>
            </div>
          </Slider>

          <Slider
            {...settings2}
            asNavFor={nav3}
            ref={(slider2) => setNav2(slider2)}
            slidesToShow={1}
            dots={false}
            className={`${styles.slider} ${styles.slider_img} ${styles.customers_slider_2}`}
          >
            <div className={`${styles.slider_img_item}`}>
              <div className={`${styles.slider_img_item_content}`}>
                <img
                  className={`${styles.img_radius}`}
                  src={Soundarya_Thakur.src}
                />
              </div>
            </div>
            <div className={`${styles.slider_img_item}`}>
              <div className={`${styles.slider_img_item_content}`}>
                <img className={`${styles.img_radius}`} src={Kiran_Mehra.src} />
              </div>
            </div>
            <div className={`${styles.slider_img_item}`}>
              <div className={`${styles.slider_img_item_content}`}>
                <img className={`${styles.img_radius}`} src={Dia.src} />
              </div>
            </div>
            <div className={`${styles.slider_img_item}`}>
              <div className={`${styles.slider_img_item_content}`}>
                <img className={`${styles.img_radius}`} src={Gazal_Rai.src} />
              </div>
            </div>
            <div className={`${styles.slider_img_item}`}>
              <div className={`${styles.slider_img_item_content}`}>
                <img className={`${styles.img_radius}`} src={Lakhan.src} />
              </div>
            </div>
            <div className={`${styles.slider_img_item}`}>
              <div className={`${styles.slider_img_item_content}`}>
                <img
                  className={`${styles.img_radius}`}
                  src={Madalsa_Sharma.src}
                />
              </div>
            </div>
          </Slider>
          <Slider
            {...settings3}
            asNavFor={nav2}
            ref={(slider3) => setNav3(slider3)}
            slidesToShow={2}
            dots={false}
            className={`${styles.slider} ${styles.slider_img} ${styles.customers_slider_3}`}
          >
            <div className={`${styles.slider_img_item}`}>
              <div className={`${styles.slider_img_item_content}`}>
                <img className={`${styles.img_radius}`} src={Kiran_Mehra.src} />
                <p className={`para ${styles.person_name} f_w_m`}>
                  Kiran Mehra
                </p>
              </div>
            </div>
            <div className={`${styles.slider_img_item}`}>
              <div className={`${styles.slider_img_item_content}`}>
                <img className={`${styles.img_radius}`} src={Dia.src} />
                <p className={`para ${styles.person_name} f_w_m`}>Dia</p>
              </div>
            </div>
            <div className={`${styles.slider_img_item}`}>
              <div className={`${styles.slider_img_item_content}`}>
                <img className={`${styles.img_radius}`} src={Gazal_Rai.src} />
                <p className={`para ${styles.person_name} f_w_m`}>Gazal Rai</p>
              </div>
            </div>
            <div className={`${styles.slider_img_item}`}>
              <div className={`${styles.slider_img_item_content}`}>
                <img className={`${styles.img_radius}`} src={Lakhan.src} />
                <p className={`para ${styles.person_name} f_w_m`}>Lakhan</p>
              </div>
            </div>
            <div className={`${styles.slider_img_item}`}>
              <div className={`${styles.slider_img_item_content}`}>
                <img
                  className={`${styles.img_radius}`}
                  src={Madalsa_Sharma.src}
                />
                <p className={`para ${styles.person_name} f_w_m`}>
                  Madalsa Sharma
                </p>
              </div>
            </div>
            <div className={`${styles.slider_img_item}`}>
              <div className={`${styles.slider_img_item_content}`}>
                <img
                  className={`${styles.img_radius}`}
                  src={Soundarya_Thakur.src}
                />
                <p className={`para ${styles.person_name} f_w_m`}>
                  Soundarya Thakur
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
