import logo from './logo.svg';
import './App.css';
import FunctionalCompNickname from './components/FunctionalComp';
//first functional comp imported here
//import ClassCompNickname from './components/ClassComp';
import {ClassComp, ClickCountButton} from './components/ClassComp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>src/App.js</code> seems to be in charge here...<br></br>
          *All HTML Tags must be enclosed within a DIV Tag
        </p>
        <a
          className="App-link"
          href="https://linkedin.com/in/madelinemarie"
          target="_blank"
          rel="noopener noreferrer"
        >
          Madeline's LinkedIn
        </a>
        <p><ClickCountButton></ClickCountButton></p>
        <h2><FunctionalCompNickname></FunctionalCompNickname></h2>
        <h2><ClassComp></ClassComp></h2>
      </header>
    </div>
  );
}
//first functional component displayed here with default import
//first class component displayed here with default import



export default App;
