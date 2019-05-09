import React from 'react';
import {Jumbotron, Button} from 'reactstrap';
import '../styles/Welcome.css';

const Welcome = (props) => {
  if (props.display !== true) {
    return null;
  }
  return (
    <div id='welcomeDisplay'>
      <Jumbotron >
        <div className="container text-center">
          <Button id="getStarted" onClick={props.onTransition}>Click Here to Get Started</Button>
        </div>
      </Jumbotron>
    </div>
  )
}

export default Welcome;