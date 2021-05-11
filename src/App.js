import React from "react";
import "./App.css";
import Navbar from "./components/Nav";
import TypeArea from "./components/TypeHere";
import Counter from "./components/Counter";

class App extends React.Component {
  state = {
    counts: {
      words: 0,
      letters: 0,
      spaces: 0,
      characters: 0,
    },
  };

  handleChange = ({ words, letters, spaces, characters }) => {
    this.setState({ counts: { words, letters, spaces, characters } });
  };

  render() {
    return (
      <div>
        <Navbar />
        <TypeArea handler={this.handleChange} />
        <Counter count={this.state.counts} />
        <footer className="footer">
          <p>Made by <a href="https://github.com/nimalansivakumar">Nimalan</a> with ❤️</p>
        </footer>
      </div>
    );
  }
}

export default App;
