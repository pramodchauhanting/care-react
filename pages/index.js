import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Index.module.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

//image import
import bottom_wave from "../public/home/bottom_wave.png";
import tea_ayurveda_new from "../public/home/tea_ayurveda_new.jpg";
import tea_ayurveda_Mobile from "../public/home/tea_ayurveda_Mobile.jpg";

import stapler_pin from "../public/home/stapler_pin.gif";
import plastic_free from "../public/home/plastic_free.gif";
import Non_GMO from "../public/home/Non_GMO.gif";
import caffeine_free from "../public/home/caffeine_free.gif";
import gluten_free from "../public/home/gluten_free.gif";
import authentic_spices from "../public/home/authentic_spices.gif";
import artificial_flavours from "../public/home/artificial_flavours.gif";
import preservatives from "../public/home/preservatives.gif";

import video_banner from "../public/home/video_banner.jpg";
import video_mobile_banner from "../public/home/video_mobile_banner.jpg";
import play_icon from "../public/home/play_icon.png";
import video_bg from "../public/home/video_bg.png";

import call1 from "../public/home/call.png";
import mail1 from "../public/home/mail.png";
import location1 from "../public/home/location.png";
import contact_image from "../public/home/contact_image.jpg";
import product_img from "../public/home/product/Product_Image_Japanese_Matcha_Green_Tea.jpg";
import product_img_hover from "../public/home/product_hover/Hover_Image_Japanese_Matcha_Green_Tea.jpg";
import amazon_logo from "../public/home/amazon_logo.png";

export default function Home() {
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
          id="about_us"
        >
          <div className="container">
            <div className={`${styles.about_signature_flex}`}>
              <div className={`${styles.about_signature_content}`}>
                <h2 className={`${styles.heading_section} heading_section`}>
                  With Care, you enjoy an array of herbal teas that refresh and
                  energize your mind, body, and soul.
                </h2>
                <p className={`${styles.para} para`}>
                  We have reimagined turmeric’s ancient healing properties to
                  create an impeccable tea that blends health with taste. With
                  its Ayurvedic herbs and spices, it rejuvenates, detoxifies,
                  boosts metabolism, and supports immunity.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.unique_features} pb_100`}>
          <div className={`${styles.full_img}`}>
            <img src={tea_ayurveda_new.src} className="mobile_none" alt="" />
            <img src={tea_ayurveda_Mobile.src} className="mobile_show" alt="" />
          </div>
          <div className={`${styles.tea_ayurveda_main}`} id="our_secret">
            <div className="container">
              <div className={`${styles.tea_ayurveda}`}>
                <div
                  className={`${styles.tea_ayurveda_content} toTop`}
                  data-scroll
                >
                  <h2 className={`${styles.heading_section} heading_section`}>
                    Tea & Ayurveda
                  </h2>
                  <h3 className={`${styles.sub_title}`}>
                    A Herbal Heritage For Holistic Health
                  </h3>
                </div>

                <div className={`${styles.tea_ayurveda_content}`}>
                  <p className={`${styles.para} para`} data-scroll>
                    Herbal spices have been used for centuries in Ayurveda as
                    India's 5,000-year-old natural healing system. Care Herbal
                    tea is made from numerous edible dried flowers, spices,
                    herbs, and foods, is a popular choice for those who want to
                    enhance their health organically and are seeking ways to
                    relax, decrease inflammation and discomfort, and help bodily
                    systems such as the digestive and immune systems.
                  </p>
                  <p className={`${styles.para} para`} data-scroll>
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
                  <p className={`${styles.para} para`} data-scroll>
                    Similarly, The term "turmeric" comes from the Latin word
                    terra merita, which means "meritorious earth," and the
                    Sanskrit name Haridra, which means "that worn/used by Lord
                    Vishnu." In Sanskrit, this spice root has over 50 different
                    names, each describing its unique properties.
                  </p>
                  <p className={`${styles.para} para`} data-scroll>
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
              <div className={`${styles.unique_content} toTop`} data-scroll>
                <div className={`${styles.unique_icon}`}>
                  <img src={stapler_pin.src} alt="" />
                </div>
                <p className={`${styles.para} para`} data-scroll>
                  Stapler pin free packing
                </p>
              </div>
              <div className={`${styles.unique_content} toTop`} data-scroll>
                <div className={`${styles.unique_icon}`}>
                  <img src={plastic_free.src} alt="" />
                </div>
                <p className={`${styles.para} para`} data-scroll>
                  Plastic free
                </p>
              </div>
              <div className={`${styles.unique_content} toTop`} data-scroll>
                <div className={`${styles.unique_icon}`}>
                  <img src={Non_GMO.src} alt="" />
                </div>
                <p className={`${styles.para} para`} data-scroll>
                  Non GMO
                </p>
              </div>
              <div className={`${styles.unique_content} toTop`} data-scroll>
                <div className={`${styles.unique_icon}`}>
                  <img src={caffeine_free.src} alt="" />
                </div>
                <p className={`${styles.para} para`} data-scroll>
                  Caffeine free
                </p>
              </div>
              <div className={`${styles.unique_content} toTop`} data-scroll>
                <div className={`${styles.unique_icon}`}>
                  <img src={gluten_free.src} alt="" />
                </div>
                <p className={`${styles.para} para`} data-scroll>
                  Gluten free
                </p>
              </div>
              <div className={`${styles.unique_content} toTop`} data-scroll>
                <div className={`${styles.unique_icon}`}>
                  <img src={authentic_spices.src} alt="" />
                </div>
                <p className={`${styles.para} para`} data-scroll>
                  Authentic spices
                </p>
              </div>
              <div className={`${styles.unique_content} toTop`} data-scroll>
                <div className={`${styles.unique_icon}`}>
                  <img src={artificial_flavours.src} alt="" />
                </div>
                <p className={`${styles.para} para`} data-scroll>
                  No artificial flavours
                </p>
              </div>
              <div className={`${styles.unique_content} toTop`} data-scroll>
                <div className={`${styles.unique_icon}`}>
                  <img src={preservatives.src} alt="" />
                </div>
                <p className={`${styles.para} para`} data-scroll>
                  No preservatives
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.unique_description}`} id="video">
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

            <div className={`${styles.video_main} pt_20`}>
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
                <a
                  data-fancybox
                  href="https://www.youtube.com/watch?v=7zGwTxBJqHo"
                >
                  <img src={play_icon.src} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className={`${styles.video_wave}`}>
            <img src={video_bg.src} alt="" />
          </div>
        </section>

        <section className={`${styles.best_sellers} ptb_100`}>
          <div className={`${styles.container_main}`}>
            <div className="container">
              <div className={`${styles.popular_title}`}>
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
                  <Tab>All</Tab>
                  <Tab>Organic Turmeric Tea</Tab>
                  <Tab>Herbal Green Tea</Tab>
                  <Tab>2 in 1 Hot & Iced Premix</Tab>
                </TabList>

                <TabPanel>
                  <div className={`${styles.best_sellers_flex}`}>
                    <div className={`${styles.best_sellers_box}`}>
                      <div className={`${styles.best_sellers_content}`}>
                        <div className={`${styles.best_sellers_product}`}>
                          <img
                            src={product_img.src}
                            className="img-responsive"
                            alt=""
                          />
                          <img
                            src={product_img_hover.src}
                            className={`${styles.hover_img}`}
                            alt=""
                          />
                        </div>
                        <div className={`${styles.box_new_content}`}>
                          <p className={`${styles.p_name} para`}>
                            Japanese Matcha Green Tea
                          </p>
                          <div className={`${styles.quantity}`}>
                            <p className={`${styles.txt_num} para`}>
                              10 Tea bags
                            </p>
                            <ul>
                              <li>14g</li>
                            </ul>
                          </div>
                          <p className={`${styles.price_txt} para`}>₹250.00</p>
                        </div>
                        <div className={`${styles.btn_section}`}>
                          <a
                            target="_blank"
                            href="https://www.amazon.in/stores/care/page/E034A3E9-05F2-4B04-82BC-5B1A6C6FE8D8?ref_=ast_bln"
                            className={`${styles.btn_txt_one} btn_txt`}
                          >
                            Shop Now on
                            <img src={amazon_logo.src} alt="" />
                            {/* <img src="img/home/amazon_logo.png" alt=""> */}
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className={`${styles.best_sellers_box}`}>
                      <div className={`${styles.best_sellers_content}`}>
                        <div className={`${styles.best_sellers_product}`}>
                          <img
                            src={product_img.src}
                            className="img-responsive"
                            alt=""
                          />
                          <img
                            src={product_img_hover.src}
                            className={`${styles.hover_img}`}
                            alt=""
                          />
                        </div>
                        <div className={`${styles.box_new_content}`}>
                          <p className={`${styles.p_name} para`}>
                            Japanese Matcha Green Tea
                          </p>
                          <div className={`${styles.quantity}`}>
                            <p className={`${styles.txt_num} para`}>
                              10 Tea bags
                            </p>
                            <ul>
                              <li>14g</li>
                            </ul>
                          </div>
                          <p className={`${styles.price_txt} para`}>₹250.00</p>
                        </div>
                        <div className={`${styles.btn_section}`}>
                          <a
                            target="_blank"
                            href="https://www.amazon.in/stores/care/page/E034A3E9-05F2-4B04-82BC-5B1A6C6FE8D8?ref_=ast_bln"
                            className={`${styles.btn_txt_one} btn_txt`}
                          >
                            Shop Now on
                            <img src={amazon_logo.src} alt="" />
                            {/* <img src="img/home/amazon_logo.png" alt=""> */}
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className={`${styles.best_sellers_box}`}>
                      <div className={`${styles.best_sellers_content}`}>
                        <div className={`${styles.best_sellers_product}`}>
                          <img
                            src={product_img.src}
                            className="img-responsive"
                            alt=""
                          />
                          <img
                            src={product_img_hover.src}
                            className={`${styles.hover_img}`}
                            alt=""
                          />
                        </div>
                        <div className={`${styles.box_new_content}`}>
                          <p className={`${styles.p_name} para`}>
                            Japanese Matcha Green Tea
                          </p>
                          <div className={`${styles.quantity}`}>
                            <p className={`${styles.txt_num} para`}>
                              10 Tea bags
                            </p>
                            <ul>
                              <li>14g</li>
                            </ul>
                          </div>
                          <p className={`${styles.price_txt} para`}>₹250.00</p>
                        </div>
                        <div className={`${styles.btn_section}`}>
                          <a
                            target="_blank"
                            href="https://www.amazon.in/stores/care/page/E034A3E9-05F2-4B04-82BC-5B1A6C6FE8D8?ref_=ast_bln"
                            className={`${styles.btn_txt_one} btn_txt`}
                          >
                            Shop Now on
                            <img src={amazon_logo.src} alt="" />
                            {/* <img src="img/home/amazon_logo.png" alt=""> */}
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className={`${styles.best_sellers_box}`}>
                      <div className={`${styles.best_sellers_content}`}>
                        <div className={`${styles.best_sellers_product}`}>
                          <img
                            src={product_img.src}
                            className="img-responsive"
                            alt=""
                          />
                          <img
                            src={product_img_hover.src}
                            className={`${styles.hover_img}`}
                            alt=""
                          />
                        </div>
                        <div className={`${styles.box_new_content}`}>
                          <p className={`${styles.p_name} para`}>
                            Japanese Matcha Green Tea
                          </p>
                          <div className={`${styles.quantity}`}>
                            <p className={`${styles.txt_num} para`}>
                              10 Tea bags
                            </p>
                            <ul>
                              <li>14g</li>
                            </ul>
                          </div>
                          <p className={`${styles.price_txt} para`}>₹250.00</p>
                        </div>
                        <div className={`${styles.btn_section}`}>
                          <a
                            target="_blank"
                            href="https://www.amazon.in/stores/care/page/E034A3E9-05F2-4B04-82BC-5B1A6C6FE8D8?ref_=ast_bln"
                            className={`${styles.btn_txt_one} btn_txt`}
                          >
                            Shop Now on
                            <img src={amazon_logo.src} alt="" />
                            {/* <img src="img/home/amazon_logo.png" alt=""> */}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>

                <TabPanel>
                  <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                  <h2>Any content 3</h2>
                </TabPanel>
                <TabPanel>
                  <h2>Any content 4</h2>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </section>

        <section className={`${styles.contact_us_main}`} id="contact_us">
          <div className="container">
            <div className={`${styles.contact_flex}`}>
              <div className={`${styles.contact_content}`}>
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
                  <a
                    className={`${styles.para} para`}
                    href="javascript:void(0)"
                  >
                    Ban House, Opp. Swaminarayan Temple, Kalawad Road, Rajkot
                    360001. (Gujarat) INDIA
                  </a>
                </p>
              </div>
              <div className={`${styles.contact_img} toTop`} data-scroll>
                <img
                  src={contact_image.src}
                  className="img-responsive"
                  alt=""
                />
                {/* <img src="img/home/contact_image.jpg" class="img-responsive" alt=" contact img"> */}
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
