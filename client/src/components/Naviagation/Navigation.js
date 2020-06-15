import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, withRouter } from 'react-router-dom';
import { NavigationSpan } from '../../styles/styledComponents/Navigation/NavigationSpan';
import locationIcon from '../../images/location.svg';

const Navigation = (props) => {
  const { pathname } = props.location;
  return (
    <Navbar bg='dark' variant='dark'>
      <Navbar.Brand href='/'>
        <img
          src={locationIcon}
          width='30'
          height='30'
          alt='logo'
          style={{ fill: 'white' }}
        />
      </Navbar.Brand>

      <Nav className='mr-auto'>
        <Nav.Link as='span'>
          <Link to='/categories' style={{ textDecoration: 'none' }}>
            <NavigationSpan
              isActive={pathname === '/categories' || pathname === '/'}
            >
              Categories
            </NavigationSpan>
          </Link>
        </Nav.Link>
        <Nav.Link as='span'>
          <Link to='/locations' style={{ textDecoration: 'none' }}>
            <NavigationSpan isActive={pathname === '/locations'}>
              Locations
            </NavigationSpan>
          </Link>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default withRouter(Navigation);
