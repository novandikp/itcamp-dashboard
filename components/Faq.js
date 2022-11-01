import React from "react";

const Faq = ({ data }) => {
  return (
    <section className="faq-one">
      <img
        src="/assets/images/background/faq-one-bg.png"
        alt="Awesome Image"
        className="faq-one__bg"
      />
      <div className="container">
        <div className="block-title text-center">
          <h2 className="block-title__title">
            <span>FAQ</span> <br />
          </h2>
        </div>
        <div className="accrodion-grp faq-accrodion">
          {data.faq.map((faq) => (
            <div className="accrodion active">
              <div className="accrodion-inner">
                <div className="accrodion-title">
                  <h4>{faq.pertanyaan}</h4>
                </div>
                <div className="accrodion-content">
                  <div className="inner">
                    <p>{faq.jawaban}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Faq;
