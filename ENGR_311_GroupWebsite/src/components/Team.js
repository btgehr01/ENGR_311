import React from "react";
import "./Team.css";
import { TeamItem } from "./TeamItem";
import sample from "../assets/sample.png";
import sample4 from "../assets/sample4.png";

const Team = () => {
  const teamMember = [
    { name: "Nathan Zabloudil", team: "Video Team", image: sample },
    { name: "Kassidy McDowell ", team: "Video Team", image: sample4 },
    { name: " Hoang Chau", team: "Video Team", image: sample },
    { name: "Brady Gehrman", team: "Website Team", image: sample },
    { name: " Tahereh Alamdari", team: "Website Team", image: sample4 },
    { name: "Phanit Phou", team: "Website Team", image: sample },
    { name: "Nathan Cecil", team: "Game Design Team", image: sample },
    { name: "Bryan Greenwood", team: "Game Design Team", image: sample },
    { name: "Zachary Waring", team: "Game Design Team", image: sample },
  ];
  return (
    <div className="team-section">
      <div className="team-container">
        <div className="team-title-container">
          <h1>MEET THE TEAM</h1>
          <div></div>
        </div>
        <div className="team-member-outerContainer">
          <div className="team-member-container">
            {teamMember.map((value, index) => (
              <TeamItem key={index} props={value} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
