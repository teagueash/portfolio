import React, { Component } from 'react';
import Header from '../components/Header';
import Main from '../routes/Main';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../App.css';

library.add(faGithub, faLinkedin);

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
