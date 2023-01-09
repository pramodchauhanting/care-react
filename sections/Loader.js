import logo from "../public/logo.png";
import { useState, useEffect, useRef } from "react";
const Loader = () => {
  useEffect(() => {
    let anim = document.querySelector(".loader_overlay");
    setTimeout(function () {
      anim.classList.add("start");
    }, 500);
    setTimeout(function () {
      anim.style.display = "none";
    }, 2500);
  }, []);
  return (
    <div className="loader_overlay dd" id="loader_ani">
      <div className="container">
        <img src={logo.src} alt="loader logo" />
      </div>
    </div>
  );
};

export default Loader;
