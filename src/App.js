import React, { Component } from 'react';
import Axios from 'axios';
import CowList from './CowList';
import CowForm from './CowForm';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cows: [],
      isLoaded: false,
      name: '',
      description: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeDesc = this.handleChangeDesc.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    Axios.post('/api/cows', {
      name: this.state.name,
      description: this.state.description
    })
      .then(response => {
        console.log(response);
        console.log(this.state);
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleChangeName(event) {
    console.log(event.target.value);
    this.setState({ name: event.target.value });
  }

  handleChangeDesc(event) {
    this.setState({ description: event.target.value });
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
          <CowForm
            handleSubmit={this.handleSubmit}
            handleChangeDesc={this.handleChangeDesc}
            handleChangeName={this.handleChangeName}
            name={this.state.name}
            description={this.state.description}
          />
          <CowList cows={cows} />
        </div>
      );
    }
  }
}

export default App;
