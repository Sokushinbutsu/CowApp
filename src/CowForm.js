import React from 'react';
import Axios from 'axios';

class CowForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', description: '' };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeDesc = this.handleChangeDesc.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }

  handleChangeDesc(event) {
    this.setState({ description: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    Axios.post('/api/cows', {
      name: this.state.name,
      description: this.state.description
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChangeName}
          />
          Description:
          <input
            type="text"
            value={this.state.description}
            onChange={this.handleChangeDesc}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default CowForm;
