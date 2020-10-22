import React from 'react';
import {Accordion, Card, Button} from 'react-bootstrap';

import './jokes.scss';

class Jokes extends React.Component {
  constructor() {
    super();

    this.state = {
      randomJoke:[],
      jokeLoaded:false
    }
  }

  componentDidMount() {
    this.loadRandomJoke();
  }

  loadRandomJoke = () => {
    this.setState({jokeLoaded:false});
    fetch('https://official-joke-api.appspot.com/random_joke', {
      method: 'GET',
      dataType: 'JSON'
    })
    .then((resp) => {
      return resp.json()
    })
    .then((data) => {
      //console.log(data);
      //console.log(this.state.randomJoke);
      this.setState({ randomJoke : data });
      this.setState({jokeLoaded:true});
    })
    .catch((error) => {
      console.log(error, "there is some error")
    });
  }

  render() {
    if (!this.state.jokeLoaded) {
      return (
        <div className="loading-joke"><span className="fa fa-circle-o-notch"></span> Loading Joke!</div>
      )
    } else {
      return (
        <div className="jokes-component">

          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <Accordion>
                  <Card className="joke-card">
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        {this.state.randomJoke.setup}
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        {this.state.randomJoke.punchline}
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
                <Button className="btn btn-light btn-sm" onClick={this.loadRandomJoke}>Load New Joke!</Button>
              </div>
            </div>
          </div>
          
        </div>
      )
    }

  }
}

export default Jokes;