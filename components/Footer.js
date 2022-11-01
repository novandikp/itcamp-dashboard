import React, { Component } from "react";

export default class Blog extends Component {
    constructor() {
        super();
        this.state = {
            scrollBtn: false,
        };
        this.handleScroll = this.handleScroll.bind(this);
        this.scrollTop = this.scrollTop.bind(this);
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll() {
        if (window.scrollY > 70) {
            this.setState({
                scrollBtn: true,
            });
        } else if (window.scrollY < 70) {
            this.setState({
                scrollBtn: false,
            });
        }
    }

    scrollTop = () => {
        window.scrollTo(0, 0);
    };

    render() {
        return ( <
            div >
            <
            footer className = "site-footer" >
            <
            div className = "pt-5 mt-2" >
            <
            div className = "container justify-content-center" >
            <
            h5 className = "footer-title-sosmed"
            style = {
                { color: "black" }
            } >
            Kunjungi sosial media IT Camp <
            /h5> <
            div className = "footer-widget my-4" >
            <
            div className = "justify-content-center mt-2 d-flex pb-4" >
            <
            a href = "https://www.instagram.com/fasilkomfest/"
            className = "fa fa-instagram icon mr-3" >
            <
            /a> <
            a href = "https://www.youtube.com/channel/UCj6FDNuEMnfgcuWydW1ys9Q"
            style = {
                {
                    background: "linear-gradient(to right, #ed213a, #93291e)",
                }
            }
            className = "fa fa-youtube icon ml-3" >
            <
            /a> < /
            div > <
            /div> < /
            div > <
            /div> <
            div className = "site-footer__bottom  mt-4" >
            <
            div className = "container" >
            <
            div className = "inner-container text-center" >
            <
            div className = "d-md-flex d-sm-block w-100 align-items-center justify-content-between" >
            <
            img src = "/assets/images/resources/logo.png"
            width = "50"
            alt = ""
            className = "d-sm-none" /
            >
            <
            p className = "site-footer__copy mt-2" >
            &
            copy; Copyright 2021 by < a href = "#" > Fasilkomfest.com < /a> < /
            p > <
            /div> < /
            div > <
            /div> < /
            div > <
            /footer> < /
            div >
        );
    }
}