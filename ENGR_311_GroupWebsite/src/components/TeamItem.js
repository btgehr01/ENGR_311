import React from "react";

export const TeamItem = ({ props }) => {
  return (
    <div className="teamItem">
      <div className="team-image-container">
        <img src={props.image} />
      </div>
      <div className="teamIteam-info">
        <p>{props.name}</p>
        <p className="team-respon">{props.team}</p>
      </div>
    </div>
  );
};
