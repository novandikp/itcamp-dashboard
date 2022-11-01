import React from "react";

const SectionAcademic = () => {
  return (
    <section className="cta-one">
      <img
        src="/assets/images/background/cta-one-bg.png"
        className="cta-one__bg w-25"
        alt="Awesome Image"
      />
      <div className="container">
        <img
          src="/assets/images/resources/academics.png"
          className="cta-one__moc"
          alt="Awesome Image"
        />
        <div className="row justify-content-lg-end">
          <div className="col-lg-6">
            <div className="cta-one__content">
              <div className="block-title text-left">
                <h2 className="block-title__title">
                  Powerful <span>Tools</span> for Your Customers.
                </h2>
              </div>
              <div className="cta-two__text ">
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SectionAcademic;
