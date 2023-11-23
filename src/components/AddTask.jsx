import React, { useState } from "react";
import "./AddTask.css";
import Button from "./Button";
import Tasks from "./Tasks";

const AddTask = ({handleTaskAddition}) => {
  const [inputData, setInputData] = useState("");
  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleAddTaskClick = () => {
    
    if(inputData == ""){
      alert("Não é possível adicionar uma tarefa vazia!!")
      return
    }
    
    handleTaskAddition(inputData);
    setInputData("");

  }

  return (
    <div className="add-task-container">
      <input
        onChange={handleInputChange}
        value={inputData}
        className="add-task-input"
        type="text"
      />

      <div className="add-task-button-container">
        <Button onClick={handleAddTaskClick}>Adicionar</Button>
      </div>
    </div>
  );
};

export default AddTask;
