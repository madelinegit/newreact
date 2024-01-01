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
import { Component } from 'react';
import { TopRight } from './components/TopRight';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Profile className="Profile"></Profile>
        <img src={logo} className="App-logo" alt="logo" />
        <TopRight></TopRight>
      </header>

      <body>
        <h2><ClassComp></ClassComp></h2>
        <ClickCountButton></ClickCountButton>
        <h2><FunctionalCompNickname></FunctionalCompNickname></h2>
        <ButtonClickerFunction>
          {/* {({  ComponentFunc, count  }) => [ */}
          //Destructure using Render Prop
          //make sure the function is wrapped in parentheses after the =>
          //passes function as a child to a component (render prop)
          //But React doesn't render plain JavaScript objects as components in JSX.
          //functions are not valid as a react child
          {/* <div key = "ComponentFunc">
              {ComponentFunc}
            </div>, */}
            //the comma was important
            {/* <p key = "count"> */}
              {/* count: {count} lowercase because it is not a Component it is extracted from a component
            </p>
          ]}; */}
          //ALL THAT STUFF React really didn't like, bc components should return
          //JSX or React elements directly, not objects containing components or values.
          //if I want to do arithmetic I will have to call these integers while staying
          //on this App.js page not passing the values from doc to doc
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
