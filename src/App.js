import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import PlantListItem from "./components/plant-list-item";
import OnePlant from "./components/one-plant";

const PLANTS = gql`
  {
    Plants {
      common_name
      link
      scientific_name
      slug
    }
  }
`;

const PLANT = gql`
  {
    Plant(id: 191266) {
      scientific_name
      common_name
    }
  }
`;

class App extends Component {
  render() {
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
                />
              ));
            }}
          </Query>
        </ul>
        <Query query={PLANT}>
          {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;
            return (
              <OnePlant
                scientific_name={data.Plant.scientific_name}
                common_name={data.Plant.common_name}
              />
            );
          }}
        </Query>
      </div>
    );
  }
}

export default App;
