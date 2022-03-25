import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main_Section from "./Main_Section";
import Team from "./Team";
import Game from "./Game";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main_Section />} />
        <Route path="/team" element={<Team />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
