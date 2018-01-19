import React from 'react';
import { Nav, Navbar, NavItem, 
  NavDropdown, MenuItem, FormGroup, FormControl } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

const Header = () => (
  <header>

    <Navbar fluid collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href='#brand'>React-Bootstrap</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <FormGroup
            controlId='formBasicText'
          >
            <FormControl
              type='text'
              placeholder='Search'
            />
          </FormGroup>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href='#'>
            Home
          </NavItem>
          <NavItem eventKey={2} href='#'>
            Cities
          </NavItem>
          <NavItem eventKey={3} href='#'>
            Blog
          </NavItem>
          <NavDropdown eventKey={3} title='Dropdown' id='basic-nav-dropdown'>
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Separated link</MenuItem>
          </NavDropdown>
          <NavDropdown eventKey={3} title='Dropdown' id='basic-nav-dropdown'>
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Separated link</MenuItem>
          </NavDropdown>
          <NavItem eventKey={3}>
            <FontAwesome name='user-circle-o' size='2x' tag='i'/>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
);

export default Header;

