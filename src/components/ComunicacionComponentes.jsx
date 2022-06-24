import { toHaveValue } from "@testing-library/jest-dom/dist/matchers";
import React, { Component } from "react";
import HolaMundo from "./HolaMundo";

export class ComunicacionComponentes extends Component {
  state = { contador: 0 };

  incrementarContador = (e) => {
    this.setState({ contador: this.state.contador + 1 });
  };
  render() {
    return (
      <>
        <h2>Comunicacion Entre Componentes</h2>
        <h5>{this.state.contador}</h5>
        <HolaMundo
          msg={`Soy el hijo 1, El condator es ${this.state.contador}`}
        />
        <HolaMundo
          msg={`Soy el hijo 2, El condator es ${this.state.contador}`}
        />
        <Hijo
          msg="Soy el hijo 3"
          incrementarContador={this.incrementarContador}
        />
      </>
    );
  }
}

export default ComunicacionComponentes;

function Hijo(props) {
  return (
    <>
      <h3>{props.msg}</h3>
      <button onClick={props.incrementarContador}>+</button>
    </>
  );
}

/* function Nieto(props) {
  return (
    <>
      <h3>{props.msg}</h3>
      <button onClick={props.incrementarContador}>+</button>
    </>
  );
}
 */
