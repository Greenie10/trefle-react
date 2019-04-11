import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import PlantListItem from "./components/plant-list-item";
import OnePlant from "./components/one-plant";

const PLANTS = gql`
  {
    Plants {
      common_name
      id
      link
      scientific_name
      slug
    }
  }
`;

const PLANT = gql`
  query OnePlant($id: Int) {
    Plant(id: $id) {
      scientific_name
      common_name
      family_common_name
    }
  }
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { plantId: "" };
  }
  setPlantId = plantId => {
    this.setState({ plantId: plantId });
  };

  render() {
    console.log("THIS.PROPS", this.props);
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
                  link={plants.link}
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
            return (
              <OnePlant
                scientific_name={data.Plant.scientific_name}
                common_name={data.Plant.common_name}
                family_common_name={data.Plant.family_common_name}
                plantId={this.state.plantId}
              />
            );
          }}
        </Query>
      </div>
    );
  }
}

export default App;
