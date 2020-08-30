import React from 'react';
import logo from './logo.svg';
import './App.css';

function FullName(){
  return(
  <p>I am Anahit Khechumyan.</p>
  );
  }

 
function Student(){
  return(
<div>
  <h2>Hello!</h2>
  <p>My name is Nana. </p>
</div>
  );
}
 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Student/>
        <FullName/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};
export default App;
