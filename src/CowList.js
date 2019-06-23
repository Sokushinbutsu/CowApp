import React, { Component } from 'react';

class CowList extends React.Component {
  constructor(props) {
    super(props);
  }

  getItems() {
    return this.props.cows.map(cow => {
      <li key={cow.name}>{cow.name}</li>;
    });
  }

  render() {
    return (
      <ul>
        {this.props.cows.map(cow => (
          <li key={cow.name}>{cow.name}</li>
        ))}
      </ul>
    );
  }
}
export default CowList;
