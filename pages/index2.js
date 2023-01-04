/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState, useEffect, useRef } from "react";
import ScrollOut from "scroll-out";

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
import { request, gql } from "graphql-request";

import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Index.module.scss";

//image import
import bottom_wave from "../public/home/bottom_wave.png";
import tea_ayurveda_new from "../public/home/tea_ayurveda_new.jpg";
import tea_ayurveda_Mobile from "../public/home/tea_ayurveda_Mobile.jpg";

import video_banner from "../public/home/video_banner.jpg";
import video_mobile_banner from "../public/home/video_mobile_banner.jpg";
import play_icon from "../public/home/play_icon.png";
import video_bg from "../public/home/video_bg.png";

import call1 from "../public/home/call.png";
import mail1 from "../public/home/mail.png";
import location1 from "../public/home/location.png";
import contact_image from "../public/home/contact_image.jpg";
import amazon_logo from "../public/home/amazon_logo.png";
import arrow_slider from "../public/home/arrow_slider.png";

import coments_star from "../public/home/coments_star.png";
import Anuj_Kumar_Saroj from "../public/home/Anuj_Kumar_Saroj.jpg";

import Soundarya_Thakur from "../public/home/Soundarya_Thakur.jpg";
import Kiran_Mehra from "../public/home/Kiran_Mehra.jpg";
import Dia from "../public/home/Dia.jpg";
import Gazal_Rai from "../public/home/Gazal_Rai.jpg";
import Lakhan from "../public/home/Lakhan.jpg";
import Madalsa_Sharma from "../public/home/Madalsa_Sharma.jpg";

export default function Home() {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [items, setItems] = useState();
  const [itemsCat, setItemsCat] = useState();
  const [isActive, setIsActive] = useState("All");
  const [filteredItems, setFilterdItems] = useState();
  // useEffect(() => {
  //   ScrollOut({
  //     /* options */
  //   });
  //   const query = gql`
  //     {

  //     }
  //   `;
  //   request(
  //     "https://api-ap-south-1.hygraph.com/v2/clcadjzpv2djk01tc4c16hhpw/master",
  //     query
  //   ).then((data) => setData(data.ayurvedas));
  // }, []);

  useEffect(() => {
    ScrollOut({
      /* options */
    });
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
    const query2 = gql`
      {
        ayurvedas {
          title
          image {
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
      query2
    ).then((data) => setData2(data.ayurvedas));
    request(
      "https://api-ap-south-1.hygraph.com/v2/clcadjzpv2djk01tc4c16hhpw/master",
      query3
    ).then((data) => [
      setData1(data.prductcategories),
      setItemsCat(data.prductcategories),
    ]);
  }, []);
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
    <div className={styles.container}>
      <Head>
        <title>Care</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={`${styles.banner}`}>
          <div className={`${styles.banner_slider}`}>
            <div className={`${styles.banner_item}`}>
              <div className="container">
                <div className={`${styles.text_section}`}>
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
                  We have reimagined turmeric’s ancient healing properties to
                  create an impeccable tea that blends health with taste. With
                  its Ayurvedic herbs and spices, it rejuvenates, detoxifies,
                  boosts metabolism, and supports immunity.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className={`${styles.unique_features} pb_100`}
          name="our_secret"
        >
          <div className={`${styles.full_img}`}>
            <img src={tea_ayurveda_new.src} className="mobile_none" alt="" />
            <img src={tea_ayurveda_Mobile.src} className="mobile_show" alt="" />
          </div>
          <div className={`${styles.tea_ayurveda_main}`}>
            <div className="container">
              <div className={`${styles.tea_ayurveda}`}>
                <div
                  className={`${styles.tea_ayurveda_content} toTop`}
                  data-scroll
                >
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
                    India's 5,000-year-old natural healing system. Care Herbal
                    tea is made from numerous edible dried flowers, spices,
                    herbs, and foods, is a popular choice for those who want to
                    enhance their health organically and are seeking ways to
                    relax, decrease inflammation and discomfort, and help bodily
                    systems such as the digestive and immune systems.
                  </p>
                  <p className={`${styles.para} para toTop`} data-scroll>
                    Ashwagandha has been called the king of Ayurvedic herbs. In
                    Sanskrit, ashva means “horse” and gandha means “smell.” Its
                    root have a horsey smell and is said to confer the strength
                    and virility of a horse. According to Ayurveda, Ashwagandha
                    is considered a Rasayana i.e. tonic to strengthen the body,
                    while modern medicine classifies the herb as an adaptogen,
                    which means it helps the body adapt to stress. The herb is
                    most well known for its rejuvenating and therapeutic
                    attributes like to reduce anxiety, improve overall sleep and
                    build stress resilience.
                  </p>
                  <p className={`${styles.para} para toTop`} data-scroll>
                    Similarly, The term "turmeric" comes from the Latin word
                    terra merita, which means "meritorious earth," and the
                    Sanskrit name Haridra, which means "that worn/used by Lord
                    Vishnu." In Sanskrit, this spice root has over 50 different
                    names, each describing its unique properties.
                  </p>
                  <p className={`${styles.para} para toTop`} data-scroll>
                    Care tea blends the healing properties of ashwagandha,
                    turmeric, and a variety of other herbs and spices for your
                    overall health and wellbeing.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className={`${styles.unique_flex}`}>
              {data2 &&
                data2.map((teaIconItem, ind) => (
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
                  stressed, so steal a moment to relax, unwind and sip the taste
                  of heaven with a cup of Care tea.
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

        <section
          className={`${styles.best_sellers} ptb_100`}
          name="product_collection"
        >
          <div className={`${styles.container_main}`}>
            <div className="container">
              <div className={`${styles.popular_title} toTop`} data-scroll>
                <h2
                  className={`${styles.heading_section} heading_section f_w_b`}
                >
                  What’s in the cup?
                </h2>
                <p className={`${styles.para} para`}>
                  Care has a variety of herbal tea flavours to match your tastes
                  and moods. Feel free to choose from our sophisticated
                  selection of teas, or even better, enjoy them all!
                </p>
              </div>

              <Tabs className={`${styles.tab_custom_list}`}>
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

                {/* <TabPanel> */}

                {items && (
                  <Slider
                    {...product_slider}
                    className={`${
                      filteredItems.length < 4 && styles.itemsSlider
                    }`}
                  >
                    {isActive !== "All"
                      ? filteredItems.map((item, ind) => {
                          return (
                            <div
                              className={`${styles.best_sellers_flex}`}
                              key={ind}
                            >
                              <div className={`${styles.best_sellers_box}`}>
                                <div
                                  className={`${styles.best_sellers_content}`}
                                >
                                  <div
                                    className={`${styles.best_sellers_product}`}
                                  >
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
                                <div
                                  className={`${styles.best_sellers_content}`}
                                >
                                  <div
                                    className={`${styles.best_sellers_product}`}
                                  >
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
                    favourite out of these five is Ashwagandha Spiced Green Tea.
                    You let me know yours! Go and Buy Care Green Tea at India's
                    Best Online Shopping Portals.
                  </p>
                  <p className={` ${styles.person_name} para f_w_m`}>
                    Soundarya Thakur
                  </p>
                </div>
                <div className={`${styles.slider_content_item}`}>
                  <img src={coments_star.src} />
                  <p className={`${styles.para} para `}>
                    Made with 100% natural ayurvedic ingredients. Keeping myself
                    fit with Care green tea. What a good way to start your day.
                    It improves metabolism, detoxification, builds immunity, and
                    keeps you look youthful. Also, it has ashwagandha in it
                    which helps to manage desired sugar level and youthfulness.
                  </p>
                  <p className={` ${styles.person_name} para f_w_m`}>
                    Kiran Mehra
                  </p>
                </div>
                <div className={`${styles.slider_content_item}`}>
                  <img src={coments_star.src} />
                  <p className={`${styles.para} para `}>
                    Your daily fix of immunity boosting ingredients. Green tea
                    may help detox your body and it's important to do
                    detoxification and here comes Care, which helps me in
                    detoxification and helps in maintaining good health, fitness
                    with their 3 amazing ranges of green tea.
                  </p>
                  <p className={` ${styles.person_name} para f_w_m`}>Dia</p>
                </div>
                <div className={`${styles.slider_content_item}`}>
                  <img src={coments_star.src} />
                  <p className={`${styles.para} para `}>
                    Bringing together all the best ayurvedic ingredients to give
                    you a glass of Immunity. Since childhood my father has given
                    me only one remedy for everything -TURMERIC. Naturally
                    during these times when health became a priority I had to
                    choose a product which I could connect the most with.
                  </p>
                  <p className={` ${styles.person_name} para f_w_m`}>
                    Gazal Rai
                  </p>
                </div>
                <div className={`${styles.slider_content_item}`}>
                  <img src={coments_star.src} />
                  <p className={`${styles.para} para`}>
                    Tried Care green tea and loved it! Have you tried it yet? My
                    favorite ashwagandha green tea to boast my immunity and stay
                    fit and fresh!!
                  </p>
                  <p className={` ${styles.person_name} para f_w_m`}>Lakhan</p>
                </div>
                <div className={`${styles.slider_content_item}`}>
                  <img src={coments_star.src} />
                  <p className={`${styles.para} para`}>
                    Winters increase my love for tea, try the immunity boosting
                    tea only from Care Health Benefits : Builds Immunity Helps
                    Detoxification Keeps You Look Youthful Enhance Metabolism.
                    Go for it!
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
                    <img
                      className={`${styles.img_radius}`}
                      src={Kiran_Mehra.src}
                    />
                  </div>
                </div>
                <div className={`${styles.slider_img_item}`}>
                  <div className={`${styles.slider_img_item_content}`}>
                    <img className={`${styles.img_radius}`} src={Dia.src} />
                  </div>
                </div>
                <div className={`${styles.slider_img_item}`}>
                  <div className={`${styles.slider_img_item_content}`}>
                    <img
                      className={`${styles.img_radius}`}
                      src={Gazal_Rai.src}
                    />
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
                    <img
                      className={`${styles.img_radius}`}
                      src={Kiran_Mehra.src}
                    />
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
                    <img
                      className={`${styles.img_radius}`}
                      src={Gazal_Rai.src}
                    />
                    <p className={`para ${styles.person_name} f_w_m`}>
                      Gazal Rai
                    </p>
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

        <section className={`${styles.contact_us_main}`} name="contact_us">
          <div className="container">
            <div className={`${styles.contact_flex}`}>
              <div className={`${styles.contact_content} toTop`} data-scroll>
                <h2 className={`${styles.heading_section} heading_section`}>
                  How can we help?
                </h2>
                <p className={`${styles.para} para link_txt`}>
                  {/* <img src="img/home/call.png" alt="call">  */}
                  <img src={call1.src} alt="" />
                  <a
                    className={`${styles.para} para`}
                    href="tel:+91-7043991157"
                  >
                    +91-7043991157
                  </a>
                </p>
                <p className={`${styles.para} para link_txt`}>
                  {/* <img src="img/home/mail.png" alt="mail"> */}
                  <img src={mail1.src} alt="" />
                  <a
                    className={`${styles.para} para`}
                    href="mailto:customer.care@banlab.com   "
                  >
                    customer.care@banlab.com{" "}
                  </a>
                </p>
                <p className={`${styles.para} para link_txt flex_start`}>
                  {/* <img src="img/home/location.png" alt="mail"> */}
                  <img src={location1.src} alt="" />
                  <a className={`${styles.para} para`} href="">
                    Ban House, Opp. Swaminarayan Temple, Kalawad Road, Rajkot
                    360001. (Gujarat) INDIA
                  </a>
                </p>
              </div>
              <div className={`${styles.contact_img} toTOp`} data-scroll>
                <img
                  src={contact_image.src}
                  className="img-responsive"
                  alt=""
                />
                {/* <Image
                  src="/home/contact_image.jpg"
                  layout="intrinsic"
                  className="img-responsive"
                /> */}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
}
