import React, { Component } from 'react';
import { Preloader, Placeholder } from 'react-preloading-screen';
import logo from './logo.svg';
import './App.css';
import './spinner.css';

class App extends Component {
  render() {
    return (
      <Preloader>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to react-preloading-screen</h1>
          </header>
          <p className="App-intro">
            Just now you saw the preloader in action :)
          </p>
          <img src="https://picsum.photos/1000/600/?123" />
          <br />
          <br />
          <img src="https://picsum.photos/1000/600/?457" />
          <br />
          <br />
          <img src="https://picsum.photos/1000/600/?1234" />
          <br />
          <br />
          <img src="https://picsum.photos/1000/600/?143" />
          <br />
          <br />
          <img src="https://picsum.photos/1000/600/?193" />
          </div>
        <Placeholder>
          <div class="lds-hourglass" />
        </Placeholder>
      </Preloader>
    );
  }
}

export default App;
