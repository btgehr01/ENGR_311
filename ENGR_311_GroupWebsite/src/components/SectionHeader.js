import React from "react";

const SectionHeader = ({ title, icon }) => {
  return (
    <div>
      <h1>{title}</h1>
      <icon></icon>
    </div>
  );
};

export default SectionHeader;
