import React, { Component } from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Divisoria from './Components/Divisoria';
import Galeria from './Components/Galeria';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Divisoria />
        <Galeria />
        <Footer />
      </div>
    );
  }
}

export default App;
