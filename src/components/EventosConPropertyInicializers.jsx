import React, { Component } from "react";

export class EventosConPropertyInicializers extends Component {
  state = { contador: 0 };

  sumar = () => {
    console.log("sumando");
    this.setState({ contador: this.state.contador + 1 });
  };

  restar = () => {
    console.log("restando");
    this.setState({ contador: this.state.contador - 1 });
  };

  render() {
    return (
      <div>
        <h1>Eventos Nartivos Usando Property inicializers</h1>
        <h3>Contador</h3>
        <h3>{this.state.contador}</h3>
        <button onClick={this.sumar}>+</button>
        <button onClick={this.restar}>-</button>
      </div>
    );
  }
}

export default EventosConPropertyInicializers;
