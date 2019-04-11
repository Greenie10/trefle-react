import React from "react";

function OnePlant({
  scientific_name,
  common_name,
  family_common_name,
  plantId
}) {
  return (
    <p>
      {common_name} (<em>{scientific_name}</em> {plantId}) -{" "}
      {family_common_name || <em>no family common name</em>}
    </p>
  );
}

export default OnePlant;
