import '../styles/base.css';
import React from 'react';
import {render} from 'react-dom';
import { Router, Route, Link } from 'react-router'
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';


const navbarInstance = (
  <Navbar inverse>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">React-Boilerplate</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#/">Index</NavItem>
        <NavItem eventKey={2} href="#/page2">Page 2</NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={2} href="#/admin">Admin</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

class Menu extends React.Component {
  render () {
    return navbarInstance;
  }
}


class Index extends React.Component {
  render () {
    return (<h1>Index</h1>);
  }
}

class Page2 extends React.Component {
  render () {
    return (<h1>Page 2</h1>);
  }
}

class Admin extends React.Component {
  render () {
    return (<div><h1>Admin</h1></div>);
  }
}



render(<Menu/>, document.getElementById('menu'));

React.render((
  <Router>
    <Route path="/" component={Index} />
    <Route path="/page2" component={Page2} />
    <Route path="/admin" component={Admin} />
  </Router>
)
, document.getElementById('app'));
