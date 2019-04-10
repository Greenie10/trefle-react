import React from "react";

function PlantListItem({ common_name, link, scientific_name }) {
  return (
    <li>
      {common_name || "no common name"} -&nbsp;
      <a href={link}>{scientific_name}</a>
    </li>
  );
}

export default PlantListItem;
