/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable @next/next/no-img-element */
import styles from "../styles/sections/Product.module.scss";

import React from "react";
import Slider from "react-slick";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState, useEffect, useRef } from "react";
import { request, gql } from "graphql-request";
import Image from "next/image";
import amazon_logo from "../public/home/amazon_logo.png";
import arrow_slider from "../public/home/arrow_slider.png";
const About = () => {
  const [data1, setData1] = useState([]);

  const [items, setItems] = useState();
  const [itemsCat, setItemsCat] = useState();
  const [isActive, setIsActive] = useState("All");
  const [filteredItems, setFilterdItems] = useState();

  useEffect(() => {
    const query1 = gql`
      {
        products {
          productGram
          productLink
          productPrice
          productBags
          title
          prductcategory {
            title
          }
          productImg {
            url
          }
          productHoverimg {
            url
          }
        }
      }
    `;

    const query3 = gql`
      {
        prductcategories {
          title
        }
      }
    `;
    request(
      "https://api-ap-south-1.hygraph.com/v2/clcadjzpv2djk01tc4c16hhpw/master",
      query1
    ).then((data) => [setItems(data.products), setFilterdItems(data.products)]);
    request(
      "https://api-ap-south-1.hygraph.com/v2/clcadjzpv2djk01tc4c16hhpw/master",
      query3
    ).then((data) => [
      setData1(data.prductcategories),
      setItemsCat(data.prductcategories),
    ]);
  }, []);
  const sliderRef = useRef();
  var product_slider = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: filteredItems?.length <= 4 ? filteredItems?.length : 4,
    // slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: (
      <button className={`${styles.prevarrow} about_prevarrow`}>
        <img src={arrow_slider.src} alt="" />
      </button>
    ),
    nextArrow: (
      <button className={`${styles.nextarrow} about_nextarrow`}>
        <img src={arrow_slider.src} alt="" />
      </button>
    ),
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: filteredItems?.length <= 3 ? filteredItems?.length : 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: filteredItems?.length <= 2 ? filteredItems?.length : 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleChangeCat = ({ cat }) => {
    setIsActive(cat);
    console.log(cat);
    if (cat === "All") {
      setFilterdItems(items);
    } else {
      setFilterdItems(
        items.filter((data) => data.prductcategory.title === cat)
      );
    }
  };

  useEffect(() => {
    // console.log(filteredItems?.length);
  });
  return (
    <section
      className={`${styles.best_sellers} ptb_100`}
      name="product_collection"
    >
      <div className={`${styles.container_main}`}>
        <div className="container">
          <div className={`${styles.popular_title} toTop`} data-scroll>
            <h2 className={`${styles.heading_section} heading_section f_w_b`}>
              What’s in the cup?
            </h2>
            <p className={`${styles.para} para`}>
              Care has a variety of herbal tea flavours to match your tastes and
              moods. Feel free to choose from our sophisticated selection of
              teas, or even better, enjoy them all!
            </p>
          </div>

          <Tabs className={`${styles.tab_custom_list}`}>
            <div className={`${styles.tab_custom_scroll} tab_custom_scroll`}>
              <TabList>
                <Tab onClick={() => handleChangeCat({ cat: "All" })}>All</Tab>
                {data1 &&
                  data1.map((productItem, ind) => (
                    <Tab
                      onClick={() => [
                        handleChangeCat({ cat: `${productItem.title}` }),
                      ]}
                    >
                      {productItem.title}
                    </Tab>
                  ))}
              </TabList>
            </div>

            {/* <TabPanel> */}

            {items && (
              <Slider
                {...product_slider}
                className={`${filteredItems.length < 4 && styles.itemsSlider}`}
              >
                {isActive !== "All"
                  ? filteredItems.map((item, ind) => {
                      return (
                        <div
                          className={`${styles.best_sellers_flex}`}
                          key={ind}
                        >
                          <div className={`${styles.best_sellers_box}`}>
                            <div className={`${styles.best_sellers_content}`}>
                              <div className={`${styles.best_sellers_product}`}>
                                <img
                                  src={item.productImg.url}
                                  className="img-responsive"
                                  alt=""
                                />
                                <img
                                  src={item.productHoverimg.url}
                                  className={`${styles.hover_img}`}
                                  alt=""
                                />
                              </div>
                              <div className={`${styles.box_new_content}`}>
                                <p className={`${styles.p_name} para`}>
                                  {item.title}
                                </p>
                                <div className={`${styles.quantity}`}>
                                  <p className={`${styles.txt_num} para`}>
                                    {item.productBags}
                                  </p>
                                  <ul>
                                    <li>{item.productGram}</li>
                                  </ul>
                                </div>
                                <p className={`${styles.price_txt} para`}>
                                  {item.productPrice}
                                </p>
                              </div>
                              <div className={`${styles.btn_section}`}>
                                <a
                                  target="_blank"
                                  href={item.productLink}
                                  className={`${styles.btn_txt_one} btn_txt`}
                                >
                                  Shop Now on
                                  <img src={amazon_logo.src} alt="" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  : items.map((item, ind) => {
                      return (
                        <div
                          className={`${styles.best_sellers_flex}`}
                          key={ind}
                        >
                          <div className={`${styles.best_sellers_box}`}>
                            <div className={`${styles.best_sellers_content}`}>
                              <div className={`${styles.best_sellers_product}`}>
                                <img
                                  src={item.productImg.url}
                                  className="img-responsive"
                                  alt=""
                                />
                                <img
                                  src={item.productHoverimg.url}
                                  className={`${styles.hover_img}`}
                                  alt=""
                                />
                              </div>
                              <div className={`${styles.box_new_content}`}>
                                <p className={`${styles.p_name} para`}>
                                  {item.title}
                                </p>
                                <div className={`${styles.quantity}`}>
                                  <p className={`${styles.txt_num} para`}>
                                    {item.productBags}
                                  </p>
                                  <ul>
                                    <li>{item.productGram}</li>
                                  </ul>
                                </div>
                                <p className={`${styles.price_txt} para`}>
                                  {item.productPrice}
                                </p>
                              </div>
                              <div className={`${styles.btn_section}`}>
                                <a
                                  target="_blank"
                                  href={item.productLink}
                                  className={`${styles.btn_txt_one} btn_txt`}
                                >
                                  Shop Now on
                                  <img src={amazon_logo.src} alt="" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
              </Slider>
            )}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default About;
