import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main_Section from "./Main_Section";
import Team from "./Team";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main_Section />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
