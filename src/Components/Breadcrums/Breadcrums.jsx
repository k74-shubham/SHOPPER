import React from "react";
import "./Breadcrums.css";
import arrow_icon from "../Assests/breadcrum_arrow.png";
import { Link } from "react-router-dom";

export const Breadcrums = (props) => {
  const { product } = props;
  return (
    <div className="breadcrums">
      <Link style={{ textDecoration: "none", color: "#5e5e5e" }} to={"/"}>
        HOME
      </Link>
      <img src={arrow_icon} alt="" />{" "}
      <Link style={{ textDecoration: "none", color: "#5e5e5e" }} to={"/"}>
        SHOP
      </Link>{" "}
      <img src={arrow_icon} alt="" />
      <Link style={{ textDecoration: "none", color: "#5e5e5e" }} to={`/${product.category}`}>
        {product.category}
      </Link>{" "}
      <img src={arrow_icon} alt="" /> {product.name}
    </div>
  );
};
