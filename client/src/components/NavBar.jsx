import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import '../styles/NavBar.css';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="dark" className="shadow" dark expand="md">
          <NavbarBrand href="/">
            Mobility Check
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Menu
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <a
                      href="https://www.youtube.com/watch?v=9vmnmm7otao"
                      className="dropdown-item padding-left"
                      target="_blank"
                    >
                      OH Squat Tutorial
                    </a>
                  </DropdownItem>
                  <DropdownItem>
                    Past Assessments
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <a
                      href="/"
                      className="dropdown-item padding-left"
                    >
                      Home
                    </a>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

