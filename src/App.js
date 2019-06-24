import React, { Component } from 'react';
import Axios from 'axios';
import CowList from './CowList';
import CowForm from './CowForm';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cows: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    Axios.get('/api/cows')
      .then(response => {
        this.setState({ cows: response.data, isLoaded: true });
        console.log('this.state: ', this.state);
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    const { error, isLoaded, cows } = this.state;
    if (!isLoaded) {
      return <div>Loading Cows...</div>;
    } else {
      return (
        <div>
          <CowForm />
          <CowList cows={cows} />
        </div>
      );
    }
  }
}

export default App;
