import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import PlantListItem from "./components/plant-list-item";
import OnePlant from "./components/one-plant";

const PLANTS = gql`
  {
    Plants {
      common_name
      complete_data
      family_common_name
      id
      scientific_name
      slug
    }
  }
`;

const PLANT = gql`
  query OnePlant($id: Int) {
    Plant(id: $id) {
      common_name
      family_common_name
      flower_color
      id
      native_status
      propagated_by_bulbs
      scientific_name
      seedling_vigor
      slug
      temperature_minimum_deg_f
      growth_form
    }
  }
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { plantId: 103505 };
  }
  setPlantId = plantId => {
    this.setState({ plantId: plantId });
  };

  render() {
    let id = this.state.plantId;

    return (
      <div className="App">
        <h1>Plants</h1>
        <ul>
          <Query query={PLANTS}>
            {({ loading, error, data }) => {
              if (loading) return "Loading...";
              if (error) return `Error! ${error.message}`;
              return data.Plants.map(plants => (
                <PlantListItem
                  common_name={plants.common_name}
                  scientific_name={plants.scientific_name}
                  key={plants.slug}
                  id={plants.id}
                  setPlantId={this.setPlantId}
                />
              ));
            }}
          </Query>
        </ul>
        <Query query={PLANT} variables={{ id: id }}>
          {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;
            return <OnePlant plant={data.Plant} plantId={this.state.plantId} />;
          }}
        </Query>
      </div>
    );
  }
}

export default App;
