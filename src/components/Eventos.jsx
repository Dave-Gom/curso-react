import React, { Component } from "react";

export class Eventos extends Component {
  constructor(props) {
    super(props);
    this.state = { contador: 0 };

    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }

  sumar() {
    console.log("sumando");
    this.setState({ contador: this.state.contador + 1 });
  }

  restar() {
    console.log("restando");
    this.setState({ contador: this.state.contador - 1 });
  }

  render() {
    return (
      <div>
        <h1>Eventos Nartivos</h1>
        <h3>Contador</h3>
        <h3>{this.state.contador}</h3>
        <button onClick={this.sumar}>+</button>
        <button onClick={this.restar}>-</button>
      </div>
    );
  }
}

export default Eventos;
