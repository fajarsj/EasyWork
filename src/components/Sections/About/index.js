import React from "react";

import AboutContent from "./AboutContent";
import thumbnail from "../../../assets/images/3-content/content-001.png";
import secondThumbnail from "../../../assets/images/3-content/content-002.png";

const about = () => {
  return (
    <div className="about">
      <div className="container">
        <AboutContent
          title="We can give you our best user experience to your system."
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
          image={thumbnail}
        />
        <AboutContent
          title="Easy access. Whenever, wherever you want"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
          image={secondThumbnail}
          reverse
        />
      </div>
    </div>
  );
};

export default about;
