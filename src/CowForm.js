import React from 'react';

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
    console.log('A name was submitted: ' + this.state.name);
    console.log('a description was submited: ', this.state.description);
    event.preventDefault();
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
