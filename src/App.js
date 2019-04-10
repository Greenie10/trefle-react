import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import PlantListItem from "./components/plant-list-item";

const PLANT = gql`
  {
    Plants {
      common_name
      link
      scientific_name
      slug
    }
  }
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Plants</h1>
        <ul>
          <Query query={PLANT}>
            {({ loading, error, data }) => {
              if (loading) return "Loading...";
              if (error) return `Error! ${error.message}`;
              console.log(data);
              return data.Plants.map(plant => (
                <PlantListItem
                  common_name={plant.common_name}
                  link={plant.link}
                  scientific_name={plant.scientific_name}
                  key={plant.slug}
                />
              ));
            }}
          </Query>
        </ul>
      </div>
    );
  }
}

export default App;
