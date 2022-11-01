import React from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";

const MediaPartner = () => {
  return (
    <div className="brand-one my-5 py-5">
      <div className="container">
        <div className="block-title text-center">
          <h2 className="block-title__title">
            <span>Media Partner</span>
          </h2>
        </div>
        <div className="row justify-content-center medpart">
          {[...Array(32)].map((item, index) => {
            return (
              <div className="item  col-md-2 col-3 text-center d-flex align-items-center ">
                <img
                  className="img-fluid w-100  my-1"
                  src={`/assets/images/medpart/medpart` + (index + 1) + `.webp`}
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default MediaPartner;
