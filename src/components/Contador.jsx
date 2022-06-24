import React from "react";

class Contador extends React.Component {
  constructor(props) {
    super(props);
    this.state.contador = 0;
    this.sumar.bind(this);
  }

  sumar() {
    this.setState((this.contador = this.contador + 1));
  }

  render() {
    return (
      <div>
        <h1>{this.state.contador}</h1>
      </div>
    );
  }
}

export default Contador;
