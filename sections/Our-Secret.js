/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import styles from "../styles/sections/Our-Secret.module.scss";
import { useState, useEffect, useRef } from "react";
import { request, gql } from "graphql-request";

import tea_ayurveda_new from "../public/home/tea_ayurveda_new.jpg";
import tea_ayurveda_Mobile from "../public/home/tea_ayurveda_Mobile.jpg";

const OurSecret = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const query = gql`
      {
        ayurvedas {
          title
          image {
            url
          }
        }
      }
    `;
    request(
      "https://api-ap-south-1.hygraph.com/v2/clcadjzpv2djk01tc4c16hhpw/master",
      query
    ).then((data) => setData(data.ayurvedas));
  }, []);

  return (
    <section className={`${styles.unique_features} pb_100`} name="our_secret">
      <div className={`${styles.full_img}`}>
        <img src={tea_ayurveda_new.src} className="mobile_none" alt="" />
        <img src={tea_ayurveda_Mobile.src} className="mobile_show" alt="" />
      </div>
      <div className={`${styles.tea_ayurveda_main}`}>
        <div className="container">
          <div className={`${styles.tea_ayurveda}`}>
            <div className={`${styles.tea_ayurveda_content} toTop`} data-scroll>
              <h2 className={`${styles.heading_section} heading_section `}>
                Tea & Ayurveda
              </h2>
              <h3 className={`${styles.sub_title}`}>
                A Herbal Heritage For Holistic Health
              </h3>
            </div>

            <div className={`${styles.tea_ayurveda_content}`}>
              <p className={`${styles.para} para toTop`} data-scroll>
                Herbal spices have been used for centuries in Ayurveda as
                India's 5,000-year-old natural healing system. Care Herbal tea
                is made from numerous edible dried flowers, spices, herbs, and
                foods, is a popular choice for those who want to enhance their
                health organically and are seeking ways to relax, decrease
                inflammation and discomfort, and help bodily systems such as the
                digestive and immune systems.
              </p>
              <p className={`${styles.para} para toTop`} data-scroll>
                Ashwagandha has been called the king of Ayurvedic herbs. In
                Sanskrit, ashva means “horse” and gandha means “smell.” Its root
                have a horsey smell and is said to confer the strength and
                virility of a horse. According to Ayurveda, Ashwagandha is
                considered a Rasayana i.e. tonic to strengthen the body, while
                modern medicine classifies the herb as an adaptogen, which means
                it helps the body adapt to stress. The herb is most well known
                for its rejuvenating and therapeutic attributes like to reduce
                anxiety, improve overall sleep and build stress resilience.
              </p>
              <p className={`${styles.para} para toTop`} data-scroll>
                Similarly, The term "turmeric" comes from the Latin word terra
                merita, which means "meritorious earth," and the Sanskrit name
                Haridra, which means "that worn/used by Lord Vishnu." In
                Sanskrit, this spice root has over 50 different names, each
                describing its unique properties.
              </p>
              <p className={`${styles.para} para toTop`} data-scroll>
                Care tea blends the healing properties of ashwagandha, turmeric,
                and a variety of other herbs and spices for your overall health
                and wellbeing.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={`${styles.unique_flex}`}>
          {data &&
            data.map((teaIconItem, ind) => (
              <div
                className={`${styles.unique_content} toTop`}
                key={ind}
                data-scroll
              >
                <div className={`${styles.unique_icon}`}>
                  <img src={teaIconItem.image.url} alt="" />
                </div>
                <p className={`${styles.para} para`} data-scroll>
                  {teaIconItem.title}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default OurSecret;
