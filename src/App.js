console.log('Hello World from your main file!');
const React = require('react');

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <p>Hello world!</p>;
  }
}

export default App;
