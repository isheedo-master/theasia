import React from 'react';
import { Nav, Navbar, NavItem, 
  NavDropdown, MenuItem, FormGroup, FormControl,
  Image, Button } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import './style.scss';

const Header = () => (
  <header id='appHeader'>
    <Navbar fixedTop fluid collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href='#brand'>
            <Image src='../../../../images/logo_v2.0.svg' />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <FormGroup
            id='header-search-form'
          >
            <FormControl
              type='text'
              placeholder='Search'
            />
            <Button>
              <FontAwesome name='search' />
            </Button>
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
          <NavDropdown noCaret 
            eventKey={3} title='Language' 
            id='basic-nav-dropdown'
          >
            <MenuItem eventKey={3.1}>English</MenuItem>
            <MenuItem eventKey={3.2}>Chinese</MenuItem>
            <MenuItem eventKey={3.3}>Espanol</MenuItem>
          </NavDropdown>
          <NavDropdown noCaret 
            eventKey={3} title='Currency' 
            id='basic-nav-dropdown'
          >
            <MenuItem eventKey={3.1}>USD</MenuItem>
            <MenuItem eventKey={3.2}>BTC</MenuItem>
            <MenuItem eventKey={3.3}>EUR</MenuItem>
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

