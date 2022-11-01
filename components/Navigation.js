import React, { Component } from "react";
import Link from "next/link";
export default class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      sticky: false,
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);

    //Mobile Menu
    this.mobileMenu();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 70) {
      this.setState({
        sticky: true,
      });
    } else if (window.scrollY < 70) {
      this.setState({
        sticky: false,
      });
    }
  };

  mobileMenu = () => {
    //Mobile Menu Toggle
    let mainNavToggler = document.querySelector(".menu-toggler");
    let mainNav = document.querySelector(".main-navigation");

    mainNavToggler.addEventListener("click", function () {
      mainNav.style.display =
        mainNav.style.display != "block" ? "block" : "none";
    });
  };

  render() {
    return (
      <header
        className="site-header site-header__header-one"
        style={{ "z-index": "10200" }}
      >
        <nav
          className={`navbar navbar-expand-lg navbar-light header-navigation stricky ${
            this.state.sticky ? "stricked-menu stricky-fixed" : ""
          }`}
        >
          <div className="container clearfix">
            <div className="logo-box clearfix">
              <a className="navbar-brand" href="/">
                <img
                  src="/assets/images/resources/logo.png"
                  className="main-logo"
                  width="50"
                  alt="Awesome Image"
                />
              </a>
              <button className="menu-toggler">
                <span className="fa fa-bars"></span>
              </button>
            </div>
            <div className="main-navigation">
              <ul className=" one-page-scroll-menu navigation-box">
                <li className="scrollToLink">
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                {this.props.competition.map((e, index) => (
                  <li className="scrollToLink">
                    <a key={e.nama + index} href="#">
                      {e.nama}
                    </a>
                    <ul className="sub-menu p-2">
                      {e.lomba.map((lomba) => (
                        <li key={lomba.sub + e.nama + index}>
                          <Link href={lomba.link}>
                            <a>{lomba.sub}</a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
