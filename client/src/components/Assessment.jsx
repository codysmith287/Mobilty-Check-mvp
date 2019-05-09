import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import '../styles/Assessment.css';
import Results from './Results.jsx';



export default class Assessment extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      feetTurnOut: false,
      feetFlatten1: false,
      kneesMoveIn: false,
      kneesMoveOut: false,
      lowBackArches: false,
      lowBackRounds: false,
      forwardLean: false,
      armsFallForward: false,
      feetFlatten2: false,
      heelsRise: false,
      weightShiftLeft: false,
      weightShiftRight: false
    }
    this.handleCompensationChecks = this.handleCompensationChecks.bind(this);
  }

  handleCompensationChecks() {
    this.setState({
      feetTurnOut: document.getElementById('feetTurnOut').checked,
      feetFlatten1: document.getElementById('feetFlatten1').checked,
      kneesMoveIn: document.getElementById('kneesMoveIn').checked,
      kneesMoveOut: document.getElementById('kneesMoveOut').checked,
      lowBackArches: document.getElementById('lowBackArches').checked,
      lowBackRounds: document.getElementById('lowBackRounds').checked,
      forwardLean: document.getElementById('forwardLean').checked,
      armsFallForward: document.getElementById('armsFallForward').checked,
      feetFlatten2: document.getElementById('feetFlatten2').checked,
      heelsRise: document.getElementById('heelsRiseModal').checked,
      weightShiftLeft: document.getElementById('weightShiftLeft').checked,
      weightShiftRight: document.getElementById('weightShiftRight').checked
    })
  }

  render () {
    if (this.props.display.assessmentDisplay !== true) {
      return null;
    }
    return (
      <div className='assessment'>
        <Container fluid onChange={this.handleCompensationChecks}>
          <h2 className="title text-center">Overhead Squat Assessment Checklist</h2>
          <h3 className="heading">
            Anterior View Compensations: (Check all that apply)
          </h3>
          <Row className="rows">
            <Col md="3">
              <input className="checkbox" type="checkbox" id="feetTurnOut"></input>
              Feet Turn Out
            </Col>
            <Col md="3">
              <input className="checkbox" type="checkbox" id="feetFlatten1"></input>
              Feet Flatten
            </Col>
            <Col md="3">
              <input className="checkbox" type="checkbox" id="kneesMoveIn"></input>
              Knees Move Inward
            </Col>
            <Col md="3">
              <input className="checkbox" type="checkbox" id="kneesMoveOut"></input>
              Knees Move Outward
            </Col>
          </Row>
          <h3 className="heading">
            Lateral View Compensations: (Check all that apply)
          </h3>
          <Row className="rows">
            <Col md="3">
              <input className="checkbox" type="checkbox" id="lowBackArches"></input>
              Low Back Arches
            </Col>
            <Col md="3">
              <input className="checkbox" type="checkbox" id="lowBackRounds"></input>
              Low Back Rounds</Col>
            <Col md="3">
              <input className="checkbox" type="checkbox" id="forwardLean"></input>
              Excessive Forward Lean
            </Col>
            <Col md="3">
              <input className="checkbox" type="checkbox" id="armsFallForward"></input>
              Arms Fall Forward
            </Col>
          </Row>
          <h3 className="heading">
            Posterior View Compensations: (Check all that apply)
          </h3>
          <Row className="rows">
            <Col md="3">
              <input className="checkbox" type="checkbox" id="feetFlatten2"></input>
              Feet Flatten
            </Col>
            <Col md="3">
              <input className="checkbox" type="checkbox" id="heelsRiseModal"></input>
              Heels Rise Off Floor
            </Col>
            <Col md="3">
              <input className="checkbox" type="checkbox" id="weightShiftLeft"></input>
              Weight Shift - Left
            </Col>
            <Col md="3">
              <input className="checkbox" type="checkbox" id="weightShiftRight"></input>
              Weight Shift - Right
            </Col>
          </Row>
          <Row>
            <Col md="12" className="text-center">
              <Button
                color="primary"
                className="submitButton"
                id="submitAssessment"
                size="lg"
                onClick={this.props.onCompensationsChecks}
              >Submit</Button>
            </Col>
          </Row>
          <Results
          results={this.state}
          display={this.props.display.resultsDisplay}
          onNewResult = {this.props.onNewResult}
        />
        </Container>
      </div>
    )
  }

}