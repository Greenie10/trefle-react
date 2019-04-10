import React from "react";

function OnePlant({ scientific_name, common_name }) {
  return (
    <p>
      {common_name} (<em>{scientific_name}</em>)
    </p>
  );
}

export default OnePlant;
