import React from 'react';
import logo from './logo.svg';
import './App.css';

import { IncrementChanger} from './timer';
import { TodoListItem, TodoList} from './todolist';

function App() {
  return (
    
    <div className="App">
      <IncrementChanger />
      <TodoList/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
}

export default App;
