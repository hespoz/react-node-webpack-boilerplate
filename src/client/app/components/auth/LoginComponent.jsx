import React from 'react';
import Button from 'react-bootstrap/lib/Button';

class LoginComponent extends React.Component {

  render() {
    return (
      <ButtonGroup>
        <DropdownButton bsStyle="success" title="Dropdown">
          <MenuItem key="1">Dropdown link</MenuItem>
          <MenuItem key="2">Dropdown link</MenuItem>
        </DropdownButton>
        <Button bsStyle="info">Middle</Button>
        <Button bsStyle="info">Right</Button>
      </ButtonGroup>
    );
  }

}

export default LoginComponent;

