import "./App.css";
import React from "react";
import Toast from "./components/toast/Toast";

import checkIcon from "./assets/check.svg";
import errorIcon from "./assets/error.svg";
import infoIcon from "./assets/info.svg";
import warningIcon from "./assets/warning.svg";

const App = () => {
  const testList = [
    {
      id: 1,
      title: "Success",
      description: "This is a success toast component",
      backgroundColor: "#5cb85c",
      icon: checkIcon,
    },
    {
      id: 2,
      title: "Danger",
      description: "This is an error toast component",
      backgroundColor: "#d9534f",
      icon: errorIcon,
    },
    {
      id: 3,
      title: "Info",
      description: "This is an info toast component",
      backgroundColor: "#5bc0de",
      icon: infoIcon,
    },
    {
      id: 4,
      title: "Warning",
      description: "This is a warning toast component",
      backgroundColor: "#f0ad4e",
      icon: warningIcon,
    },
  ];

  return (
    <div className="app">
      <div className="app-header"></div>
      <Toast toastList={testList} position="bottom-left" />
    </div>
  );
};

export default App;
