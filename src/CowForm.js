import React from 'react';

class CowForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.props.value}
            onChange={this.props.handleChangeName}
          />
          Description:
          <input
            type="text"
            value={this.props.description}
            onChange={this.props.handleChangeDesc}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default CowForm;
