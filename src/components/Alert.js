import { Component } from 'react';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
    this.bgColor = null;
  }

  getStyle = () => {
    return {
      color: this.color,
      backgroundColor: this.bgColor,
      borderWidth: "1px",
      borderStyle: "solid",
      fontWeight: "bolder",
      borderRadius: "7px",
      borderColor: this.color,
      // textAlign: "center",
      fontSize: "11px",
      margin: "10px 0",
      padding: "10px"
    };
  }

  render() {
    return (
      <div className="Alert">
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'rgb(0, 0, 255)'; // blue
    // this.bgColor = 'rgb(220, 220, 255)'; // light blue
    this.bgColor = 'white'
  }
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'rgb(255, 0, 0)'; // red
    // this.bgColor = 'rgb(255, 150, 150)'; // light red
    this.bgColor = 'white'
  }
}

class WarningAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'rgb(255, 100, 0)'; // orange
    // this.bgColor = 'rgb(255, 200, 100)'; // light orange
    this.bgColor = 'white'
  }
}

export { InfoAlert, ErrorAlert, WarningAlert };