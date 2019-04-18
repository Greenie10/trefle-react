import React from "react";

const PlantListItem = props => {
  const { common_name, scientific_name, id, setPlantId, complete_data } = props;
  return (
    <li>
      {common_name || <em> no common name </em>}&nbsp;
      <em>
        {scientific_name}&nbsp;Complete_data: {complete_data}
        <button onClick={() => setPlantId(id)} id={id}>
          {id}
        </button>
      </em>
    </li>
  );
};

export default PlantListItem;
