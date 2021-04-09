import React from "react";

import "./LearningOptions.css";

const LearningOptions = (props) => {
  const options = [
    {
      text: "C",
      handler: props.actionProvider.handleCList,
      id: 1,
    },
    {
      text: "C++",
      handler: props.actionProvider.handleCppList,
      id: 2,
    },
    {
      text: "Java",
      handler: props.actionProvider.handleJavaList,
      id: 3,
    },

    {
      text: "Python",
      handler: props.actionProvider.handlePythonList,
      id: 4,
    },

    {
      text: "HTML/CSS/JavaScript",
      handler: props.actionProvider.handleJavascriptList,
      id: 5,
    },
    {
      text: "Bash",
      handler: props.actionProvider.handleBashList,
      id: 6,
    },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default LearningOptions;
