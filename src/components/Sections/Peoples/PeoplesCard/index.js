import React from "react";

import Card from "../../../UI/Card";
import Heading from "../../../UI/Heading";
import Icon from "../../../UI/Icon";

import profilPicture from "../../../../assets/images/4-people/gaetan-houssin.jpg";

const peoplesCard = (props) => {
  const { showDetailModalHandler, showEditModalHandler, people } = props;
  const { profile, name, title } = people;

  return (
    <Card>
      <div className="peoples-profile">
        <div
          className="peoples-profile__picture"
          onClick={showDetailModalHandler}
        >
          <img src={profile} alt="Profile Picture" />
        </div>
        <div className="card__body">
          <div className="peoples-profile__title">
            <Heading type="h6">{name}</Heading>
            <p>{title}</p>
          </div>
        </div>
        <Icon
          type="circle"
          variant="info"
          size="sm"
          clicked={showEditModalHandler}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path d="M14.9239 4.04412L19.8061 8.92622L7.44801 21.2843L2.56863 16.4022L14.9239 4.04412ZM23.5107 2.86667L21.3334 0.689423C20.492 -0.152008 19.1257 -0.152008 18.2814 0.689423L16.1958 2.77501L21.0779 7.65715L23.5107 5.22443C24.1633 4.57177 24.1633 3.51929 23.5107 2.86667ZM0.0137079 23.2644C-0.0751408 23.6642 0.285881 24.0225 0.685791 23.9253L6.12612 22.6062L1.24674 17.7241L0.0137079 23.2644Z" />
            </g>
            <defs>
              <clipPath>
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Icon>
      </div>
    </Card>
  );
};

export default peoplesCard;
