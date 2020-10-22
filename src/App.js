import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import Jokes from './components/jokes/jokes.component';

class App extends React.Component {
  // jokes api github // https://github.com/15Dkatz/official_joke_api
  // jokes random api url // https://official-joke-api.appspot.com/random_joke
  // programming random jokes // https://official-joke-api.appspot.com/jokes/programming/random

  render() {
    return(
      <div className="App">
        <Jokes></Jokes>
      </div>
    )
  }
}

export default App;
