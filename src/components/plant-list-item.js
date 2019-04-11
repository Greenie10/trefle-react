import React from "react";

class PlantListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: null };
  }

  handleClick = e => {
    this.setState({ id: e.target.id });
    this.props.setPlantId(this.state.id);
  };
  render() {
    const { common_name, scientific_name, id } = this.props;
    return (
      <li>
        {common_name || <em>- no common name -</em>} (
        <em>
          {scientific_name}
          <button onClick={this.handleClick} id={id}>
            ({id})
          </button>
        </em>
        )
      </li>
    );
  }
}

export default PlantListItem;
