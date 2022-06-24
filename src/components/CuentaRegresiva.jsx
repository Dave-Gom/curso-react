import React, { Component } from "react";

export default class CuentaRegresiva extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      hora: this.props.horas,
      minutos: this.props.min,
      segundos: this.props.seg,
    };

    setInterval(() => {
      if (this.state.segundos >= 0)
        this.setState({ ...this.state, segundos: this.state.segundos - 1 });

      if (this.state.segundos <= 0) {
        this.setState({
          ...this.state,
          segundos: 59,
          minutos: this.state.minutos - 1,
        });
      }

      if (this.state.segundos <= 0 && this.state.minutos <= 0) {
        this.setState({
          segundos: 59,
          minutos: 59,
          hora: this.state.hora - 1,
        });
      }
    }, 1000);
  }

  render() {
    return (
      <div>
        <b>
          Cuenta Regresiva:{" "}
          <span>
            {this.state.hora.toLocaleString({
              minimumIntegerDigits: 2,
              useGrouping: false,
            })}
            :
            {this.state.minutos.toLocaleString("en-US", {
              minimumIntegerDigits: 2,
              useGrouping: false,
            })}
            :
            {this.state.segundos.toLocaleString("en-US", {
              minimumIntegerDigits: 2,
              useGrouping: false,
            })}
          </span>
        </b>
      </div>
    );
  }
}
