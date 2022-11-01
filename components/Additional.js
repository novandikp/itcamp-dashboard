import React from "react";
import parser from "react-html-parser";
const Additional = ({ data }) => {
  return (
    <>
      {data.additional.map((tambahan, index, array) => (
        <section
          key={index}
          style={{ "z-index": "1200" }}
          className={tambahan.judul + " py-5 my-5"}
        >
          <img
            src="/assets/images/background/faq-one-bg.png"
            alt="Awesome Image"
            className="faq-one__bg"
          />
          <div className="container">
            <div className="block-title text-center">
              <h2 className="block-title__title">
                <span>{tambahan.judul}</span> <br />
              </h2>
            </div>
            <div className="content">
              {parser(tambahan.isi)}
              {tambahan.list.length > 0 && (
                <ul className="list-unstyled">
                  {tambahan.list.map((data, index) => (
                    <li>
                      <p className="list-text d-flex align-items-center">
                        {" "}
                        <i className="fa fa-circle-o mr-3 text-primary"></i>{" "}
                        {data}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
              {parser(tambahan.footer)}
            </div>
          </div>
        </section>
      ))}
    </>
  );
};
export default Additional;
