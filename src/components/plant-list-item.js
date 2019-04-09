import React from "react";

function PlantListItem({ link, scientific_name }) {
  return (
    <li>
      <a href={link}>{scientific_name}</a>
    </li>
  );
}

export default PlantListItem;
