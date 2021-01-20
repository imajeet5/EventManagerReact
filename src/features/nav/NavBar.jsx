import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react';
import SignedInMenu from './SignedInMenu';
import SignedOutMenu from './SignedOutMenu';

export default function NavBar({ setFormOpen }) {
  const [authenticate, setAuthenticated] = useState(false);

  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} to="/" exact header>
          <img src="./assets/logo.png" alt="logo" style={{ marginRight: 15 }} />
          Re-vents
        </Menu.Item>
        <Menu.Item as={NavLink} to="/events" name="Events" />
        {authenticate && (
          <Menu.Item as={NavLink} to="/createEvent">
            <Button
              onClick={() => setFormOpen(true)}
              positive
              inverted
              content={'Create Event'}
            ></Button>
          </Menu.Item>
        )}
        {authenticate ? <SignedInMenu setAuthenticated={setAuthenticated} /> : <SignedOutMenu setAuthenticated={setAuthenticated}/>}
      </Container>
    </Menu>
  );
}
