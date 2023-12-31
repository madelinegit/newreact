import logo from './logo.svg';
import './App.css';
import FunctionalCompNickname from './components/DefaultFuncComp';
//first functional comp imported here
//import ClassCompNickname from './components/ClassComp';
import {ClassComp, ClickCountButton} from './components/ClassComp';
import { ButtonClickerFunction} from './components/FuncComp'
import { Component } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>src/App.js</code>...<br></br>
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
        </header>
        <body>
          <h2><ClassComp></ClassComp></h2>
          <ClickCountButton></ClickCountButton>
          <h2><FunctionalCompNickname></FunctionalCompNickname></h2>
          <ButtonClickerFunction>
            {({  ComponentFunc, count  }) =>
            //Destructure using Render Prop
              <div>
                {ComponentFunc}
                <p>count: {count} (lowercase because it is not a Component it is extracted from a component) </p>
              </div>
            };
          </ButtonClickerFunction>

        </body>
        <footer className ="App-footer" alt="logo">
          <img src="/board.jpeg" className="self" alt="pic of maddy" />
        </footer>

    </div>
  );
}
//first functional component displayed here with default import
//first class component displayed here with default import


export default App;
