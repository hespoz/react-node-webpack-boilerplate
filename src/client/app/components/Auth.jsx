import React from 'react';
import {render} from 'react-dom';
import { Router, Route, Link } from 'react-router'
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Input from 'react-bootstrap/lib/Input';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import AuthAction from '../actions/AuthAction';
import AuthStore from '../stores/AuthStore';


const signUpInstance = (
<div class="text-center">
	<Grid mdOffset={4}>
		<Row>
			<Col mdOffset={4} md={12}>
				<Row>
					<Col md={4}>
						<h1>Login</h1>
					</Col>
				</Row>
			    <Row>
					<Col md={4}>
						<Input type="text" label="Name" placeholder="Name" />
					</Col>
				</Row>
				<Row>
					<Col md={4}>
						<Input type="text" label="Lastname" placeholder="Last name" />
					</Col>
				</Row>
				<Row>
					<Col md={4}>
						<Input type="text" label="Email" placeholder="Email" />
					</Col>
				</Row>
				<Row>
					<Col md={4}>
						<Input type="password" label="Password" />
					</Col>
				</Row>
				<Row>
					<Col md={4}>
						<Input type="password" label="Repeat password" />
					</Col>
				</Row>
				<Row>
					<Col md={4}>
						Already have an account? Please <Link to={`/`}>Login</Link>
					</Col>
				</Row>
				<Row>
					<Col md={4}>
						<Button bsSize="large" block>Sign Up</Button>
					</Col>
				</Row>
			</Col>
		</Row>
	</Grid>
 </div>
);


/**
 * Retrieve the current TODO data from the TodoStore
 */
function getAuthStoreState() {
  return {
    message: AuthStore.getMessage()
  };
}

class Login extends React.Component {

  constructor(props) {
  	super(props);
  	this.state = {message: ''};
  }

  componentDidMount () {
    AuthStore.addChangeListener(this.onChange.bind(this));
  }

  componentWillUnmount () {
    AuthStore.removeChangeListener(this.onChange.bind(this));
  }

  onChange () {
    this.setState(getAuthStoreState());
  }

  render() {
    return (
<div class="text-center">
	<Grid mdOffset={4}>
		<Row>
			<Col mdOffset={4} md={12}>
				<Row>
					<Col md={4}>
						<h1>Login</h1>
					</Col>
				</Row>
				<Row>
					<Col md={4}>
					{ this.state.message ? 

						<ListGroup>
    						<ListGroupItem bsStyle="danger">{this.state.message}</ListGroupItem>
  						</ListGroup>

					: null }


					</Col>
				</Row>
				

				<Row>
					<Col md={4}>
						<Input type="text" label="Email" placeholder="Email" />
					</Col>
				</Row>
				<Row>
					<Col md={4}>
						<Input type="password" label="Password" />
					</Col>
				</Row>
				<Row>
					<Col md={4}>
						Dont have an account? Please <Link to={`/signup`}>Signup</Link>
					</Col>
				</Row>
				<Row>
					<Col md={4}>
						<Button onClick={this.onLogin} bsSize="large" block>Login</Button>
					</Col>
				</Row>
			</Col>
		</Row>
	</Grid>
 </div>
    	);
  }

  onLogin () {
  	AuthAction.login();
  }

};

class SignUp extends React.Component {
  render() {
    return signUpInstance;
  }
};

React.render((
  <Router>
    <Route path="/" component={Login} />
    <Route path="/signup" component={SignUp} />
  </Router>
)
, document.getElementById('app'));