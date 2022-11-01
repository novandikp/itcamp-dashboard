import React from "react";
const Section = ({ competition }) => {
  return (
    <div>
      {competition.map((lomba, index) => {
        if (index % 2 != 0) {
          return (
            <section key={index} className="cta-two">
              <div className="container">
                <img
                  src={"/assets/images/resources/" + lomba.logo}
                  className="cta-one__moc"
                  alt="Awesome Image"
                />
                <div className="row justify-content-lg-end">
                  <div className="col-lg-6">
                    <div className="cta-one__content">
                      <div className="block-title text-left">
                        <h2 className="block-title__title font-weight-bold">
                          {lomba.nama}
                        </h2>
                      </div>
                      <div className="cta-two__text ">
                        <p>{lomba.deskripsi}</p>
                        <br />
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        } else {
          return (
            <section key={index} className="cta-two cta-academic">
              <div className="container">
                <img
                  src={"/assets/images/resources/" + lomba.logo}
                  className="cta-two__moc"
                  alt="Awesome Image"
                />
                <div className="row">
                  <div className="col-lg-6">
                    <div className="cta-two__content">
                      <div className="block-title text-left">
                        <h2 className="block-title__title font-weight-bold">
                          {lomba.nama}
                        </h2>
                      </div>
                      <div className="cta-two__text">
                        <p>{lomba.deskripsi}</p>
                        <br />

                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        }
      })}
    </div>
  );
};
export default Section;
