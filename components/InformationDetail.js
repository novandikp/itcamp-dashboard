import React from "react";
import parser from "react-html-parser";
const InformationHeader = ({ data }) => {
  return (
    <section
      className="pb-5 mb-5 display-relative"
      style={{ "z-index": "1200" }}
      id="banner"
    >
      <div className="container">
        <div className="row ">
          <div className="col-xl-6 m-auto">
            <img
              className="img-fluid"
              src={data.gambar2}
              alt={data.nama_lomba}
            />
          </div>
          <div className="col-xl-6">
            <div className="banner-one__content justify-content-center align-items-center">
              <p className="banner-one__text">
                {parser(data.deskripsi_lomba2)}
              </p>

              <ul className="list-unstyled">
                {data.benefit.map((data, index) => (
                  <li>
                    <p className="list-text">
                      {" "}
                      <i className="fa fa-check mr-2 text-success"></i> {data}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default InformationHeader;
