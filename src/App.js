import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import PlantListItem from "./components/plant-list-item";

const PLANT = gql`
  {
    Plants {
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
        <ul>
          <Query query={PLANT}>
            {({ loading, error, data }) => {
              if (loading) return "Loading...";
              if (error) return `Error! ${error.message}`;
              console.log(data);
              return data.Plants.map(plant => (
                <PlantListItem
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
