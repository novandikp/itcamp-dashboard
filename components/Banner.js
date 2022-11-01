import React from "react";
import parser from "react-html-parser";
const BannerTwo = ({ header }) => {
    return ( <
        section className = "banner-one"
        id = "banner" >
        <
        span className = "banner-one__shape-1" > < /span>{" "} <
        span className = "banner-one__shape-2" > < /span>{" "} <
        span className = "banner-one__shape-3" > < /span>{" "} <
        span className = "banner-one__shape-4" > < /span> <
        div className = "container" >
        <
        div className = "row" >
        <
        div className = "col-xl-12" >
        <
        div className = "banner-one__content text-center" >
        <
        img src = "/assets/images/resources/logo.png"
        className = "img-fluid w-25"
        alt = "Awesome Image" /
        >
        <
        h3 className = "banner-one__title utama mt-1" > { " " } { parser(header.nama_lomba) } { " " } <
        /h3>{" "} <
        p className = "banner-one__text" > { " " } { parser(header.deskripsi_lomba) } { " " } <
        /p>{" "} <
        a href = "#features"
        className = "banner-one__btn thm-btn mb-5" >
        <
        span > Get Started < /span>{" "} < /
        a > { " " } <
        /div>{" "} <
        div className = "banner-one__moc mt-5" > < /div>{" "} < /
        div > { " " } <
        /div>{" "} < /
        div > { " " } <
        /section>
    );
};
export default BannerTwo;