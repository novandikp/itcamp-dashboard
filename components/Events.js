import React from "react";
import Link from "next/link";
import parser from "react-html-parser";
const Events = ({ title, competition }) => {
  return (
    <section className="service-one" id="features">
      <div className="container">
        {competition.map((lomba, index) => {
          return (
            <>
              <div className="block-title text-center mt-5 pt-5">
                <h2 className="block-title__title mt-5">
                  {parser(lomba.title)}
                </h2>
              </div>
              <div className="row">
                {lomba.lomba.map((item, index, arr) => {
                  const size =
                    arr.length - 1 == index && index % 2 == 0
                      ? "col-md-12"
                      : "col-md-6";
                  return (
                    <div
                      key={index}
                      className={size + " col-sm-12 wow fadeInDown"}
                      data-wow-duration="1500ms"
                    >
                      <Link href={item.link}>
                        <div className="service-one__single text-center h-100 my-2">
                          <div className="service-one__inner h-100">
                            <img
                              className="img-responsive py-5 w-50"
                              style={{
                                minHeight: "300px",
                                objectFit: "contain",
                              }}
                              src={"/assets/images/resources/" + item.img}
                            />
                            <h3>
                              <a href={item.event}>{item.sub}</a>
                            </h3>
                            <br />
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
};
export default Events;
