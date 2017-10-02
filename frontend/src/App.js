import React, { Component } from 'react';
//import Page from './noredux/MainPage';
import ReduxPage from './withRedux/MainPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ReduxPage />
      </div>
    );
  }
}

export default App;
