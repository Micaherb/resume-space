import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import ColoredBlock from './Components/ColoredBlock';
import HTMLRenderer from './Components/HTMLRenderer';
import marathoner from './assets/marathoner.txt';
import honks from './assets/honks.txt';
import site from './assets/site.txt';

class App extends Component {
  constructor() {
    super();
    this.state = { 
      marathoner: '',
      honks: '',
      site: '',
    };
  }

  async componentDidMount() {
    await fetch(marathoner)
      .then(res => res.text())
      .then(text => this.setState({ marathoner: text }));

    await fetch(honks)
      .then(res => res.text())
      .then(text => this.setState({ honks: text }));

    await fetch(site)
      .then(res => res.text())
      .then(text => this.setState({ site: text }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ColoredBlock text="Micah" color="#5733FFBB" height={750} contentComponent={<HTMLRenderer htmlString={this.state.honks} />} />
          <ColoredBlock text="Hello, World!" color="#FF5733BB" height={850} contentComponent={<HTMLRenderer htmlString={this.state.marathoner} />} />
          <ColoredBlock text="Erb" color="#57FF33BB" height={750} contentComponent={<HTMLRenderer htmlString={this.state.site} />} />
        </header>
      </div>
    );
  }
}

export default App;
