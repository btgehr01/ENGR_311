import React from "react";
import TopNav from "./TopNav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Team from "./Team";
import Game from "./Game";
import Main_Section from "./Main_Section";

const App = () => {
  return (
    <BrowserRouter>
      <TopNav />
      <Routes>
        <Route path="/" element={<Main_Section />} />
        <Route path="/team" element={<Team />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
