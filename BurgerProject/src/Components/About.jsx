import React from "react";
import BannerImage from "../assets/banneryeni.jpg";
import "../styles/About.css";
const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>Hakkımızda</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          quaerat illum vero, et, quam quisquam natus, obcaecati vitae eos
          incidunt magni nam beatae debitis distinctio! Illo consequuntur
          eligendi accusamus Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Facilis commodi magnam modi ratione? Reprehenderit expedita
          quaerat fuga error, iure, explicabo soluta blanditiis dolores
          consectetur quod et asperiores, repudiandae beatae? Maiores. Lorem
          ipsum dolor, sit amet consectetur adipisicing elit. Alias maiores quae
          placeat, fugiat blanditiis aliquid beatae possimus? Placeat inventore,
          facilis odio, rerum obcaecati quidem similique error pariatur nulla,
          facere atque.
        </p>
      </div>
    </div>
  );
};

export default About;
