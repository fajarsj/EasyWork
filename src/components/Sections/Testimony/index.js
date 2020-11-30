import React from "react";

import Heading from "../../UI/Heading";
import Icon from "../../UI/Icon";
import Carousel from "../../UI/Carousel";

import TestimonyCard from "./TestimonyCard";

const testimony = (props) => {
  const { data } = props;

  return (
    <div className="testimony">
      <div className="container">
        <div className="testimony__header">
          <Icon type="circle" variant="danger">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 23.04L10.32 21.36C4.08 15.84 0 12.12 0 7.55996C0 3.83996 2.88 0.959961 6.6 0.959961C8.64 0.959961 10.68 1.91996 12 3.47996C13.32 1.91996 15.36 0.959961 17.4 0.959961C21.12 0.959961 24 3.83996 24 7.55996C24 12.12 19.92 15.84 13.68 21.36L12 23.04Z" />
            </svg>
          </Icon>
          <Heading type="h5">What other people say about our service</Heading>
        </div>
        <div className="testimony__carousel">
          <Carousel>
            {data.map((testimony) => (
              <TestimonyCard key={Math.random()} testimony={testimony} />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default testimony;
