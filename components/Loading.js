import React from "react";
import Head from "next/head";
const Loading = () => {
  return (
    <div>
      <Head>
        <title>Redirect</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="../assets/images/resources/logo.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="../assets/images/resources/logo.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="../assets/images/resources/logo.png"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Rubik:300,400,500,700,900&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="../assets/css/animate.min.css" />
        <link rel="stylesheet" href="../assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="../assets/css/font-awesome.min.css" />
        <link rel="stylesheet" href="../assets/plugins/dimon-icons/style.css" />
        <link rel="stylesheet" href="../assets/css/style.css" />
        <link rel="stylesheet" href="../assets/css/responsive.css" />
      </Head>

      <div className="page-wrapper">
        <section className="banner-one" id="banner">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="banner-one__content text-center">
                  <img
                    src="../assets/images/resources/logo.png"
                    className="img-fluid w-25 mb-5"
                    alt="Awesome Image"
                  />

                  <div className="cssload-container">
                    <div className="cssload-circle-1">
                      <div className="cssload-circle-2">
                        <div className="cssload-circle-3">
                          <div className="cssload-circle-4">
                            <div className="cssload-circle-5">
                              <div className="cssload-circle-6">
                                <div className="cssload-circle-7">
                                  <div className="cssload-circle-8"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Loading;
