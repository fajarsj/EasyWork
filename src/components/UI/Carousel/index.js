import React from "react";
import Slider from "react-slick";

import CarouselPrevArrow from "./CarouselPrevArrow";
import CarouselNextArrow from "./CarouselNextArrow";
import CarouselDots from "./CarouselDots";

const slider = (props) => {
  const { children } = props;

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CarouselPrevArrow />,
    nextArrow: <CarouselNextArrow />,
    customPaging: (i) => <CarouselDots />,
    responsive: [
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return <Slider {...settings}>{children}</Slider>;
};

export default slider;
