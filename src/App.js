import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import ColoredBlock from './Components/ColoredBlock';
import HTMLRenderer from './Components/HTMLRenderer';
import raw from './assets/marathoner.txt';

class App extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  async componentDidMount() {
    await fetch(raw)
      .then(res => res.text())
      .then(text => this.setState({ data: text }));
  }

  render() {
    let htmlString = "<iframe src=\"https://www.lexaloffle.com/bbs/widget.php?pid=honks_of_the_southern_isles\" allowfullscreen width=\"621\" height=\"513\" style=\"border:none; overflow:hidden\"></iframe>";
    console.log(this.state.data)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ColoredBlock text="Hello, World!" color="#FF5733BB" height={850} contentComponent={<HTMLRenderer htmlString={this.state.data} />} />
          <ColoredBlock text="Micah" color="#5733FFBB" height={750} />
          <ColoredBlock text="Erb" color="#57FF33BB" height={750} />
        </header>
      </div>
    );
  }
}

export default App;
