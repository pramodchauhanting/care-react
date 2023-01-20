/* eslint-disable @next/next/no-img-element */
import styles from "../styles/sections/About.module.scss";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { request, gql } from "graphql-request";
const About = () => {
  // const aboutDesc = {
  //   title:
  //     "With Care, you enjoy an array of herbal teas that refresh and energize your mind, body, and soul.",
  //   description: `We have reimagined turmeric’s ancient healing properties to create
  //   an impeccable tea that blends health with taste. With its
  //   Ayurvedic herbs and spices, it rejuvenates, detoxifies, boosts
  //   metabolism, and supports immunity.`,
  // };

  const [data, setData] = useState([]);
  useEffect(() => {
    const query = gql`
      {
        aboutcares {
          title
          description
        }
      }
    `;
    request(
      "https://api-ap-south-1.hygraph.com/v2/clcadjzpv2djk01tc4c16hhpw/master",
      query
    ).then((data) => setData(data.aboutcares));
  }, []);

  return (
    <section
      className={`${styles.about_signature} pt_60 pb_100`}
      name="about_us"
    >
      <div className="container">
        <div className={`${styles.about_signature_flex}`}>
          <div
            className={`${styles.about_signature_content} toTop`}
            data-scroll
          >
            {data &&
              data.map((aboutContent, ind) => (
                <div key={ind}>
                  <h2
                    className={`${styles.heading_section} heading_section toTop`}
                    data-scroll
                  >
                    {aboutContent.title}
                  </h2>
                  <p className={`${styles.para} para toTop`} data-scroll>
                    {aboutContent.description}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
