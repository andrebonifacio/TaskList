import React from "react";
import { CgLoupe } from "react-icons/cg";
import { useHistory, useParams } from "react-router-dom";

import Button from "./Button";
import "./TaskDetails.css";

const TaskDetails = () => {
  const params = useParams();
  const history = useHistory();

  const handleBackButtonClick = () => {
    history.goBack();
  };
  return (
    <>
      <div className="back-button-container">
        <Button onClick={handleBackButtonClick}>Voltar</Button>
      </div>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum autem
          placeat cumque voluptatibus, recusandae eaque exercitationem expedita
          ut fugit, fugiat inventore. Molestiae architecto pariatur magni libero
          nemo, laborum maxime esse.
        </p>
      </div>
    </>
  );
};

export default TaskDetails;
