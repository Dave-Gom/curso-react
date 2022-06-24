import React, { Component } from "react";

export default class EventosSinteticos extends Component {
  handleClick = (e, msg) => {
    console.log(e);
    console.log(e.nativeEvent);

    console.log(e.target);
    console.log(msg, "Muy Buenas");
  };

  render() {
    return (
      <div>
        <h3>Eventos Sinteticos</h3>

        <button onClick={(e) => this.handleClick(e, "Saludos")}>Saludar</button>
        <Boton
          onClick={(e) => this.handleClick(e, "Saludos")}
          btnText="Boton personalizado"
        />
      </div>
    );
  }
}

function Boton(props) {
  return <button>{props.btnText}</button>;
}
