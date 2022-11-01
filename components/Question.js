import React from "react";

const Question = ({ data, index }) => {
  return (
    <section
      key={index}
      style={{ "z-index": "1200", position: "relative" }}
      className="box-timeline py-5 mb-5 px-1"
      id="banner"
    >
      <div className="block-title text-center" style={{ "z-index": "1200" }}>
        <h2 className="block-title__title question_title mb-5">
          <span>Kontak</span>
        </h2>
        <p className="banner-one__text">
          Untuk teknis dan informasi selengkapnya bisa hubungi kami melalui
          kontak dibawah ini :
        </p>
      </div>
      <div className="d-block d-md-flex">
        {data.kontak.map((item, index, arr) => (
          <div className="">
            <div className="mx-5 mb-5 text-center">
              <i className={"fab fa fa-" + item.icon + " fa-2x icon"}></i>
              <p className="font-weight-bold mb-1">{item.judul}</p>
              {item.list.map((list) => (
                <a href={list.link} className="detail-contact">
                  <p className="mb-0 banner-one__text">
                    {list.nama + (list.nama ? " :" : "")}
                  </p>
                  <p className="mt-0 mb-4 banner-one__text">{list.kontak}</p>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Question;
