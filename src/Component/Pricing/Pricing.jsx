import React from "react";
import img from "../../assets/img-2.jpg";
import style from "./Pricing.module.css";

export default function Pricing() {
  return (
    <>
      <section className="mt-5">
        <div className="row">
          <div className="col-md-6 text-white d-flex flex-wrap justify-content-center align-content-center">
            <h1 className="mb-4">
              Simple pricing.
              <br /> Just $9/month.
            </h1>
            <p className="ps-5 ms-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing <br /> elit.
              Vitae vel labore mollitia iusto. Recusandae quos <br /> provident,
              laboriosam fugit voluptatem iste.
            </p>
          </div>
          <div className="col-md-6">
            <img src={img} className={`${style.img}`} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
