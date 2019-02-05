import React, { Component } from 'react';
import Header from '../components/Header';
import Main from '../routes/Main';
import '../App.css';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Main />
      </>
    );
  }
}

export default App;
