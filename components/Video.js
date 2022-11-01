import React, { Component } from "react";
import dynamic from "next/dynamic";
const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });

export default class Video extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
  }

  openModal = () => {
    this.setState({ isOpen: true });
  };

  render() {
    return (
      <section className="video-one mx-2 mb-5" id="video">
        <img
          src="/assets/images/background/video-one-bg.png"
          alt="Awesome Image"
          className="video-one__bg"
        />
        <div className="container wow fadeInUp" data-wow-duration="1500ms">
          <div className="video-one__box ">
            <img src={this.props.data.thumbnail} alt="" />
            <div className="video-one__content">
              <ModalVideo
                channel="youtube"
                isOpen={this.state.isOpen}
                videoId={this.props.data.videoId}
                onClose={() => this.setState({ isOpen: false })}
              />
              <div
                onClick={this.openModal}
                className="video-popup video-one__btn"
              >
                <i className="fa fa-play"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
