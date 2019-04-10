import React from "react";

function PlantListItem({ common_name, scientific_name }) {
  return (
    <li>
      {common_name || <em>no common name</em>} (<em>{scientific_name}</em>)
    </li>
  );
}

export default PlantListItem;
