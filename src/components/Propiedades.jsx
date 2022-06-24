import React, { Component } from "react";
import ChauMundo from "./ChauMundo";

import HolaMundo from "./HolaMundo";

const arreglo = [1, 2, 3, 4, 5, 6];

class Propiedades extends Component {
  render() {
    return (
      <div>
        {arreglo.map((e) => (
          <HolaMundo msg={<ChauMundo />} />
        ))}
      </div>
    );
  }
}

export default Propiedades;
