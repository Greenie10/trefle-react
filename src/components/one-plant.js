import React from "react";

function OnePlant({
  plant: {
    common_name,
    family_common_name,
    flower_color,
    id,
    native_status,
    propagated_by_bulbs,
    scientific_name,
    seedling_vigor,
    slug,
    temperature_minimum_deg_f,
    growth_form
  },
  plantId
}) {
  return (
    <p id={plantId}>
      {common_name} <em>{scientific_name}</em>
      <br />
      {family_common_name || <em>no family common name</em>}
      <br />
      id: {id}
      <br />
      Flower colour: {flower_color}
      <br />
      Min temp (F): {temperature_minimum_deg_f}
      <br />
      Propagated by bulb: {propagated_by_bulbs}
      <br />
      Seedling vigor: {seedling_vigor}
      <br />
      Growth form: {growth_form}
      <br />
      slug: {slug}
      <br />
      Native status: {native_status}
      <br />
    </p>
  );
}

export default OnePlant;
