import React from "react";
import TopNav from "./TopNav";
import MainRouter from "./MainRouter";
import "./App.css";

const App = () => {
  return (
    <div className="main-background">
      <TopNav />
      <div className="main-body">
        <MainRouter />
      </div>
    </div>
  );
};

export default App;
