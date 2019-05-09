import React from 'react';
import FootAnkleTable from './Tables/FootAnkleTable.jsx';
import ForwardLeanTable from './Tables/ForwardLeanTable.jsx';
import KneeTable from './Tables/KneeTable.jsx';
import LowBackTable from './Tables/LowBackTable.jsx';
import ShoulderTable from './Tables/ShoulderTable.jsx';
import WeightShiftTable from './Tables/WeightShiftTable.jsx';
import { Container, Row, Col, Button } from 'reactstrap';
import '../styles/Results.css';

export default class Results extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      date: ''
    }
    this.handleResultSubmit = this.handleResultSubmit.bind(this);
    this.handleResultSave = this.handleResultSave.bind(this);
  }

  handleResultSave(e) {
    this.setState({
      [e.target.id]: e.target.value.trim()
    })
  }

  handleResultSubmit() {
    const data = {
      name: this.state.name,
      email: this.state.email,
      date: this.state.date,
      result: [this.props.results]
    }
    this.props.onNewResult(data)
  }


  render() {
    if (this.props.display !== true) {
      return null;
    }
    return (
      <div id="resultsDisplay">
        <FootAnkleTable results = {this.props.results}/>
        <ForwardLeanTable results = {this.props.results} />
        <KneeTable results = {this.props.results} />
        <LowBackTable results = {this.props.results} />
        <ShoulderTable results = {this.props.results}/>
        <WeightShiftTable results = {this.props.results}/>
        <Container fluid>
          <Row>
            <Col md="3">
            <span>
              Name:
            </span>
            <span>
              <input
                type="text"
                id="name"
                className="form-elements"
                onChange={this.handleResultSave}
              ></input>
            </span>
            </Col>
            <Col md="3">
              <span>
                Email:
              </span>
              <span>
                <input
                  type="text"
                  id="email"
                  className="form-elements"
                  onChange={this.handleResultSave}
                ></input>
              </span>
            </Col>
            <Col md="3">
              <span>
                Date:
              </span>
              <span>
                <input
                  type="text"
                  id="date"
                  className="form-elements"
                  onChange={this.handleResultSave}
                ></input>
              </span>
            </Col>
            <Col md="3">
              <Button
                color="primary"
                onClick={this.handleResultSubmit}
              >Save</Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}