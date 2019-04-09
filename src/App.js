import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import "./App.css";

const PLANT = gql`
  {
    Plants {
      link
      scientific_name
      slug
    }
  }
`;

function PlantListItem({ link, scientific_name }) {
  return (
    <li>
      <a href={link}>{scientific_name}</a>
    </li>
  );
}
class App extends Component {
  render() {
    return (
      <div className="App">
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
      </div>
    );
  }
}

export default App;
