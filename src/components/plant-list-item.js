import React from "react";

import ListItem from "@material-ui/core/ListItem";

function PlantListItem({ link, scientific_name }) {
  return (
    <ListItem>
      <a href={link}>{scientific_name}</a>
    </ListItem>
  );
}

export default PlantListItem;
