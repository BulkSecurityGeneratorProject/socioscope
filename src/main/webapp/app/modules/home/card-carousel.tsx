import React from 'react';
import Slider from 'react-slick';

export class CardCarousel extends React.Component {
  render() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      useCSS: true
    };

    return (
      <div>
        <Slider {...settings} className="slider">
          {this.props.children}
        </Slider>
        <br />
        <br />
      </div>
    );
  }
}

export default CardCarousel;
