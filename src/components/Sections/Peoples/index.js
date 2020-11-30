import React, { useState, Fragment } from "react";

import Modal from "../../UI/Modal";

import PeoplesCard from "./PeoplesCard";
import PeoplesHeader from "./PeoplesHeader";
import PeoplesDetail from "./PeoplesDetail";
import PeoplesAdd from "./PeoplesAdd";
import PeoplesEdit from "./PeoplesEdit";

const peoples = (props) => {
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [peopleDetail, setPeopleDetail] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const { data } = props;

  const closeDetailModalHandler = () => {
    setShowDetailModal(false);
  };

  const showDetailModalHandler = (people) => {
    setPeopleDetail(people);
    setShowDetailModal(true);
  };

  const closeAddModalHandler = () => {
    setShowAddModal(false);
  };

  const showAddModalHandler = () => {
    setShowAddModal(true);
  };

  const closeEditModalHandler = () => {
    setShowEditModal(false);
  };

  const showEditModalHandler = (people) => {
    setPeopleDetail(people);
    setShowEditModal(true);
  };

  return (
    <Fragment>
      <div className="peoples">
        <div className="container">
          <PeoplesHeader showAddModalHandler={showAddModalHandler} />
          <div className="peoples__cards">
            {data.map((people) => (
              <PeoplesCard
                key={Math.random()}
                showDetailModalHandler={() => showDetailModalHandler(people)}
                showEditModalHandler={() => showEditModalHandler(people)}
                people={people}
              />
            ))}
          </div>
        </div>
      </div>
      <Modal show={showDetailModal} modalClosed={closeDetailModalHandler}>
        <PeoplesDetail people={peopleDetail} />
      </Modal>
      <Modal show={showAddModal} modalClosed={closeAddModalHandler}>
        <PeoplesAdd />
      </Modal>
      <Modal show={showEditModal} modalClosed={closeEditModalHandler}>
        <PeoplesEdit people={peopleDetail} />
      </Modal>
    </Fragment>
  );
};

export default peoples;
