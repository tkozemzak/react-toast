import "./App.css";
import React from "react";
import Toast from "./components/toast/Toast";

const App = () => {
  return (
    <div className="app">
      <div className="app-header"></div>
      <Toast />
    </div>
  );
};

export default App;
