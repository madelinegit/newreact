
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import About from './about'
import logo from './logo.svg';
import './App.css';
// import FunctionalCompNickname from './components/DefaultFuncComp';
//imported from default export
//first functional comp imported here
//import ClassCompNickname from './components/ClassComp';
import {ClassComp, ClickCountButton} from './components/ClassComp';
//normal import
import { ButtonClickerFunction} from './components/FuncComp'
//normal import
import Profile from './components/ProfileFuncComp';
//normal import only one default export is allowed
import { Component } from 'react';
import { TopRight } from './components/TopRight';
import About from './about'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Profile className="Profile"></Profile>
        <a href = "https://github.com/madelinegit/newreact"><img src={logo} className="App-logo" alt="logo" /></a>

      </header>

      <body>
      {/* <Link to="/about">About</Link> */}
        <TopRight className=""></TopRight>
        <h2><ClassComp></ClassComp></h2>
        <ClickCountButton></ClickCountButton>
        {/* <h2><FunctionalCompNickname></FunctionalCompNickname></h2> */}
        <ButtonClickerFunction>
        </ButtonClickerFunction>
        {Component}

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
