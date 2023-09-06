import logo from './logo.svg';
import './App.css';
import ColoredBlock from './Components/ColoredBlock';
import HTMLRenderer from './Components/HTMLRenderer';

function App() {
  let htmlString = "<iframe src=\"https://www.lexaloffle.com/bbs/widget.php?pid=honks_of_the_southern_isles\" allowfullscreen width=\"621\" height=\"513\" style=\"border:none; overflow:hidden\"></iframe>";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ColoredBlock text="Hello, World!" color="#FF5733BB" height={850} contentComponent={<HTMLRenderer htmlString={htmlString} />} />
        <ColoredBlock text="Micah" color="#5733FFBB" height={750} />
        <ColoredBlock text="Erb" color="#57FF33BB" height={750} />
      </header>
    </div>
  );
}

export default App;
