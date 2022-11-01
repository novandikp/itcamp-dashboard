import React from "react";

const SectionAcademic = () => {
  return (
    <section className="cta-two cta-academic">
      <div className="container">
        <img
          src="/assets/images/resources/academics.png"
          className="cta-two__moc"
          alt="Awesome Image"
        />
        <div className="row">
          <div className="col-lg-6">
            <div className="cta-two__content">
              <div className="block-title text-left">
                <h2 className="block-title__title">
                  Lomba <span>Akademik</span> <br /> Fasilkom Fest
                </h2>
              </div>
              <div className="cta-two__text">
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Lorem Ipsum is simply
                  dummy text of the printing laborum perspiciatis unde.
                </p>
                <p>
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                  qui officia deserunt mollit lorem ipsum anim id est.
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
