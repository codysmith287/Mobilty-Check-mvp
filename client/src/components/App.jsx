import React from 'react';
import NavBar from './NavBar.jsx';
import Welcome from './Welcome.jsx';
import Assessment from './Assessment.jsx';



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      welcomeDisplay: true,
      assessmentDisplay: false,
      resultsDisplay: false,
      pastAssessments: []
    }
    this.handleTransitions = this.handleTransitions.bind(this);
    this.handleCompensationsChecks = this.handleCompensationsChecks.bind(this);
    this.handleNewResult = this.handleNewResult.bind(this);
  }

  handleTransitions(e) {
    if (e.target.id === "getStarted") {
      this.setState({
        welcomeDisplay: false,
        assessmentDisplay: true,
        resultsDisplay: false
      })
    }
  }

  handleCompensationsChecks() {
    this.setState({
      welcomeDisplay: false,
      assessmentDisplay: true,
      resultsDisplay: true,
    })
  }

  handleNewResult(data) {
    return fetch('/newResult', {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
    })
    .then(reponse => console.log(reponse))
    .then(
      console.log('result post successful')
    )
    .catch(error => console.error(error))


  }



  render () {
    return (
      <div>
        <NavBar />
        <Welcome
          onTransition={this.handleTransitions}
          display={this.state.welcomeDisplay}
        />
        <Assessment
          onTransition={this.handleTransitions}
          onCompensationsChecks={this.handleCompensationsChecks}
          onNewResult = {this.handleNewResult}
          display={this.state}
        />
      </div>
    )
  }
}