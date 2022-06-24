import React from "react";

class Estado extends React.Component {
  constructor(props) {
    super(props);

    this.state = { contador: 0 };

    setInterval(() => {
      this.setState({ contador: this.state.contador + 1 });
    }, 1000);
  }

  render() {
    return (
      <div>
        <div>Estado actual: {this.state.contador}</div>
      </div>
    );
  }
}

export default Estado;
