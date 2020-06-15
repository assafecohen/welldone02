import React from 'react';
import Navigation from '../components/Naviagation/Navigation';
import BottomToolBar from '../components/BottomToolbar/BottomToolBar';
import Container from 'react-bootstrap/Container';
const Layout = (props) => {
  const { children } = props;
  return (
    <div>
      <Navigation />
      <Container fluid style={{ margin: '50px 0' }}>
        {children}
      </Container>
      <BottomToolBar />
    </div>
  );
};

export default Layout;
