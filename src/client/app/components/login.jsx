import React from 'react';
import {render} from 'react-dom';
import { Router, Route, Link } from 'react-router'
//import Button from 'react-bootstrap/lib/Button';

/*class App extends React.Component {
  render () {
    return  (
  	  <div>
		<Button>Default</Button>
      </div>
    );
  }
}*/

class Home extends React.Component {
  render() {
    return (<h1>Welcome to the Home Page</h1>);
  }
};

class Register extends React.Component {
  render() {
    return (<h1>Register</h1>);
  }
};


React.render((
  <Router>
    <Route path="/" component={Home} />
    <Route path="/signup" component={Register} />
  </Router>
)
, document.getElementById('app'));