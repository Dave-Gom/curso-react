import React from "react";

class HolaMundo extends React.Component {
  render() {
    return (
      <div>
        <h3>Hola Mundo</h3>
        <div> El mensaje es: {this.props.msg} </div>
        <br />
      </div>
    );
  }
}

export default HolaMundo;
