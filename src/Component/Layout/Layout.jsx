import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import style from "./Layout.module.css";
import bgImage from "../../assets/bg.eced8263.jpg";

export default function Layout() {
  const location = useLocation();

  // تحديد الخلفية بناءً على المسار الحالي
  const getBackgroundStyle = () => {
    return location.pathname === "/"
      ? {
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          height: "100vh",
        }
      : {
          backgroundColor: "#2D3439",
        };
  };
  return (
    <>
      <div
        className={`container-fluid ${style.bg} pt-3`}
        style={getBackgroundStyle()}
      >
        {location.pathname === "/" && <div className={style.overlay}></div>}
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}
