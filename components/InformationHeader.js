import React from "react";
import parser from "react-html-parser";
const InformationHeader = ({ data }) => {
  return (
    <>
      <div
        style={{
          "z-index": "5200",
          "backdrop-filter": "blur(10px)",
        }}
        className="fixed-bottom text-center mx-2 pb-3 pt-1 d-block d-sm-none d-flex justify-content-center"
      >
        <a href={data.link_guidebook} className=" thm-btn mt-1 mr-2">
          <span style={{ "font-size": "12px" }}>
            Guidebook
            <i className="fa fa-download ml-1"></i>
          </span>
        </a>
        {data.link_pendaftaran != "close" && (
          <a href={data.link_pendaftaran} className=" thm-btn ml-2 mt-1">
            <span style={{ "font-size": "12px" }}>
              Daftar <i className="fa fa-sign-in ml-3"></i>
            </span>
          </a>
        )}
      </div>
      <section className="banner-one" id="banner">
        <span className="banner-one__shape-1"></span>
        <span className="banner-one__shape-2"></span>
        <span className="banner-one__shape-3"></span>
        <span className="banner-one__shape-4"></span>
        <div className="container">
          <div className="row flex-row-reverse">
            <div className="col-xl-6">
              <img
                className="img-fluid"
                src={data.gambar1}
                alt={data.nama_lomba}
              />
            </div>
            <div className="col-xl-6">
              <div className="banner-one__content">
                <h5 className="banner-one__title">{parser(data.nama_lomba)}</h5>
                <p className="banner-one__text">
                  {parser(data.deskripsi_lomba1)}
                </p>
                <div className="d-none d-sm-block ">
                  <div className="d-flex ">
                    <a
                      href={data.link_guidebook}
                      className="banner-one__btn thm-btn mt-1 "
                    >
                      <span>
                        Guidebook
                        <i className="fa fa-download ml-3"></i>
                      </span>
                    </a>
                    {data.link_pendaftaran != "close" && (
                      <a
                        href={data.link_pendaftaran}
                        className="banner-one__btn thm-btn ml-2 mt-1"
                      >
                        <span>
                          Daftar <i className="fa fa-sign-in ml-3"></i>
                        </span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default InformationHeader;
