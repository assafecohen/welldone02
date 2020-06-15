import React from 'react';
import Row from 'react-bootstrap/Row';
import Location from './Location/Location';

const Locations = ({ locations }) => {
  return (
    <Row>
      {locations.map((location) => (
        <Location
          name={location.name}
          address={location.address}
          cordinate={location.cordinate}
          category={location.category}
          key={location._id}
          _id={location._id}
        />
      ))}
    </Row>
  );
};

export default Locations;
