import logo from './logo.svg';
import './App.css';
import FunctionalCompNickname from './components/DefaultFuncComp';
//imported from default export
//first functional comp imported here
//import ClassCompNickname from './components/ClassComp';
import {ClassComp, ClickCountButton} from './components/ClassComp';
//normal import
import { ButtonClickerFunction} from './components/FuncComp'
//normal import
import Profile from './components/ProfileFuncComp';
//normal import only one default export is allowed
// import { Component } from 'react';
import { TopRight } from './components/TopRight';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Profile className="Profile"></Profile>
        <a href ="https://github.com/madelinegit/newreact/tree/3dfa6f833f16beb6ea9e12f032cd52eeeeacd5b9"><img src={logo} className="App-logo" alt="logo" /></a>

      </header>

      <body>

      
        <TopRight className="TopRight"></TopRight>
        <div className = "buttoncont">
        <h2><ClassComp></ClassComp></h2>
          <ClickCountButton></ClickCountButton>
          <h2><FunctionalCompNickname></FunctionalCompNickname></h2>
          <ButtonClickerFunction>
          </ButtonClickerFunction>
      </div>

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
