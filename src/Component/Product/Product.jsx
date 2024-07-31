import React from "react";
import img from "../../assets/img-1.jpg";
import style from "./Product.module.css";

export default function Product() {
  return (
    <>
      <section className="mt-4">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center ms-5">
            <img src={img} className={`${style.img}`} alt="" />
          </div>
          <div className="col-md-5 text-white mt-5">
            <h1 className="mb-4">About WorldWide.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing
              <br /> elit. Illo est dicta illum vero culpa cum quaerat
              <br /> architecto sapiente eius non soluta, molestiae nihil <br />
              laborum, placeat debitis, laboriosam at fuga <br /> perspiciatis?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing <br /> elit.
              Corporis doloribus libero sunt expedita ratione
              <br /> iusto, magni, id sapiente sequi officiis et.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
