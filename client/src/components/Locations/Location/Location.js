import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../redux/actions';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { LocationCard } from '../../../styles/styledComponents/Locations/LocationCard';

const Location = ({ address, category, cordinate, name, _id }) => {
  const dispatch = useDispatch();
  const focusedLocation = useSelector(
    (state) => state.locations.focusedLocation
  );
  const handleFocusCategory = () => {
    dispatch(actions.focusLocation(address, category, cordinate, name, _id));
  };
  return (
    <Col xs='12' style={{ margin: '20px 0' }}>
      <LocationCard isactive={_id === focusedLocation._id ? 1 : 0}>
        <Card.Header>
          <strong>Name</strong> - {name}
        </Card.Header>
        <Card.Body>
          <Card.Title>Address:</Card.Title>
          <Card.Text>{address}</Card.Text>
          <Card.Title>Cordinate:</Card.Title>
          <Card.Text>
            lat: {cordinate.lat} lng: {cordinate.lng}
          </Card.Text>
          <Button variant='primary' onClick={() => handleFocusCategory()}>
            {_id === focusedLocation._id ? 'Managing...' : 'Click To Manange'}
          </Button>
        </Card.Body>
        <Card.Footer>
          <strong>Category</strong> -
          {category.map((item, index) => {
            return <span key={index}>{item.value} </span>;
          })}
        </Card.Footer>
      </LocationCard>
    </Col>
  );
};
export default Location;
