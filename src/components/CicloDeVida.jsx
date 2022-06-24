import React, { Component } from "react";

/* El ciclo de vida tiene 3 partes
  *Montaje
  *Actualizacion
  *Desmontaje

*/

export class CicloDeVida extends Component {
  constructor(props) {
    super(props);
    console.log(0, "Contructor");
    this.state = { hora: new Date().toLocaleTimeString() };
    this.temporizador = null;
  }

  componentDidMount() {
    console.log(1, " - El Componente Ya se encuenta en el DOM");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      2,
      "- EL estado o las Porps se han Actualizado de",
      prevProps,
      prevState,
      " a ",
      this.props,
      this.state
    );
  }

  componentWillUnmount() {
    console.log(3, " - el componnente ha sido elimminado del DOM");
  }

  iniciar = () => {
    this.temporizador = setInterval(() => {
      this.setState({ hora: new Date().toLocaleTimeString() });
    }, 1000);
  };

  detener = () => {
    clearInterval(this.temporizador);
  };
  render() {
    console.log(4, " - El Componente Se Dibuja");
    return (
      <div>
        <h3>Ciclo de Vida</h3>
        <h4>{this.state.hora}</h4>
        <button onClick={this.iniciar}>inicar</button>
        <button onClick={this.detener}>detener</button>
      </div>
    );
  }
}

export default CicloDeVida;

export class CicloDeVidaPadre extends Component {
  state = { oculto: true };

  ocultar = () => this.setState({ oculto: !this.state.oculto });
  render() {
    return (
      <>
        {this.state.oculto ? <h3>Componente Desmontado</h3> : <CicloDeVida />}
        <button onClick={this.ocultar}>
          {this.state.oculto ? "mostrar" : "Ocultar"}
        </button>
      </>
    );
  }
}
