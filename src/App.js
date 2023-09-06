import logo from './logo.svg';
import './App.css';
import ColoredBlock from './Components/ColoredBlock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ColoredBlock text="Hello, World!" color="#FF5733BB" height={750} />
      </header>
    </div>
  );
}

export default App;
