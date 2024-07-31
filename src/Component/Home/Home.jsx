import React from "react";
import style from "./Home.module.css";

export default function Home() {
  return (
    <>
      <section className="position-relative z-3 text-white text-center pt-5 mt-5">
        <h3 className={`${style.text}`}>
          You travel the world.
          <br /> WorldWise keeps track of your adventures.
        </h3>
        <p className={`${style.text2}`}>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </p>
        <button className={`${style.btn} text-black btn mt-3`}>
          Get Started
        </button>
      </section>
    </>
  );
}
