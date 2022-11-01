import React from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";

const Sponsor = ({ sponsors }) => {
  return (
    <div className="brand-one my-5 py-5">
      <div className="container">
        <div className="block-title text-center">
          <h2 className="block-title__title">
            <span>Sponsor</span>
          </h2>
        </div>
        <div className="row justify-content-center medpart">
          {sponsors.map((item, index) => {
            return (
              <div
                className={
                  item.ukuran + " item  text-center d-flex align-items-center "
                }
              >
                <a href={item.link}>
                  <img
                    className="img-fluid w-100  my-1"
                    src={`/assets/images/sponsor/` + item.logo_sponsor}
                    alt={item.nama_sponsor}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Sponsor;
