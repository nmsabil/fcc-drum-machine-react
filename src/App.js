import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Q from "./Laser-Shot-1.mp3";
import W from "./ISD-Laser2.wav";

const drumKit = [
  {
    name: "Heater-1",
    key: "Q",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },

  {
    name: "Heater-2",
    key: "W",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },

  {
    name: "Heater-3",
    key: "E",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },

  {
    name: "Heater-4",
    key: "A",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },

  {
    name: "Clap",
    key: "S",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },

  {
    name: "Open-HH",
    key: "D",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },

  {
    name: "Kick-'n-Hat",
    key: "Z",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },

  {
    name: "Kick",
    key: "X",
    src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },

  {
    name: "Closed-HH",
    key: "C",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      soundName: "",
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleClick = (e) => {
    this.setState({
      soundName: e.target.id,
    });
    const id = e.target.innerText.trim();
    const audio = this.refs[id];
    audio.play();
  };

  handleKeyPress = (e) => {
    if (e.key) {
      const name = drumKit.find((el) => el.key == e.key.toUpperCase()).name;
      this.setState({
        soundName: name,
      });
      const audio = document.getElementById(e.key.toUpperCase());
      audio.play();
    }
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  render() {
    let drumpad = drumKit.map((item) => (
      <div className='drum-pad' onClick={this.handleClick} id={item.name}>
        <button>
          {item.key}

          <audio
            className='clip'
            ref={item.key}
            id={item.key}
            src={item.src}
          ></audio>
        </button>
      </div>
    ));
    return (
      <div id='drum-machine'>
        <div id='display'>{this.state.soundName}</div>
        {drumpad}
      </div>
    );
  }
}

export default App;
