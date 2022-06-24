import React, { Component } from "react";

import "./App.css";
import AjaxApis from "./components/AjaxApis";
import CicloDeVida, { CicloDeVidaPadre } from "./components/CicloDeVida";
import ComunicacionComponentes from "./components/ComunicacionComponentes";
import CuentaRegresiva from "./components/CuentaRegresiva";
import Estado from "./components/Estado";
import Eventos from "./components/Eventos";
import EventosConPropertyInicializers from "./components/EventosConPropertyInicializers";
import EventosSinteticos from "./components/EventosSinteticos";
import Propiedades from "./components/Propiedades";

class App extends Component {
  render() {
    return (
      <div>
        <AjaxApis />
        <hr />
        <CicloDeVidaPadre />
        <hr />
        <ComunicacionComponentes />
        <hr />
        <EventosSinteticos />
        {/* <EventosConPropertyInicializers /> */}
        {/* <Eventos /> */}
        {/*  <hr></hr>
        <CuentaRegresiva horas={13} min={1} seg={10} />
        <hr />
        <Estado /> */}
        <hr />
        {/* <Propiedades /> */}
      </div>
    );
  }
}

export default App;
