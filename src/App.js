import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Notes from './Notes';
import Folders from './Folders';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Link to="/"> Noteful</Link>
        </header>
        <main>
          <Route exact path= "/" component={Folders}></Route>
          <Route exact path="/" component={Notes} />
          <Route path="/folder" component={Folders}></Route>
        </main>
      </div>
    );
  }
}

export default App;
