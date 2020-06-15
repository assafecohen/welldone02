import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../redux/actions';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CategoryCard } from '../../../styles/styledComponents/Categories/CategoryCard';

const Category = ({ name, _id }) => {
  const dispatch = useDispatch();

  const focusedCategory = useSelector(
    (state) => state.locations.focusedCategory
  );
  const handleFocusCategory = () => {
    dispatch(actions.focusCategory(_id, name));
  };
  return (
    <Col xl='3' xs='12' sm='6' md='3' lg='3' style={{ margin: '20px 0' }}>
      <CategoryCard isactive={_id === focusedCategory._id ? 1 : 0}>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Button variant='primary' onClick={() => handleFocusCategory()}>
            {_id === focusedCategory._id ? 'Managing...' : 'Click To Manange'}
          </Button>
        </Card.Body>
      </CategoryCard>
    </Col>
  );
};

export default Category;
