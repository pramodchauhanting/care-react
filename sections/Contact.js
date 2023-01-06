/* eslint-disable @next/next/no-img-element */
import styles from "../styles/sections/Contact.module.scss";
import Image from "next/image";

import call1 from "../public/home/call.png";
import mail1 from "../public/home/mail.png";
import location1 from "../public/home/location.png";
import contact_image from "../public/home/contact_image.jpg";
const Contact = () => {
  return (
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
              <a className={`${styles.para} para`} href="tel:+91-7043991157">
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
            <img src={contact_image.src} className="img-responsive" alt="" />
            {/* <Image
                  src="/home/contact_image.jpg"
                  layout="intrinsic"
                  className="img-responsive"
                /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
