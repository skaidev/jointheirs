import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render(): JSX.Element {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <h3 className="text-center">
              For God did not send his son into the world to condemn <br /> the
              world, but to save the world through Him
              <br />
              <br />
              <span className="text-muted">-John 3:17</span>
            </h3>
          </div>
          <div>
            <h3 className="text-center">
              For God did not send his son into the world to condemn <br /> the
              world, but to save the world through Him
              <br />
              <br />
              <span className="text-muted">-John 3:17</span>
            </h3>
          </div>
          <div>
            <h3 className="text-center">
              For God did not send his son into the world to condemn <br /> the
              world, but to save the world through Him
              <br />
              <br />
              <span className="text-muted">-John 3:17</span>
            </h3>
          </div>
        </Slider>
      </div>
    );
  }
}
