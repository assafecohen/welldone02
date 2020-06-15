import React from 'react';
import Row from 'react-bootstrap/Row';
import Category from './Category/Category';

const Categories = ({ categories }) => {
  return (
    <Row>
      {categories.map((category) => (
        <Category name={category.name} key={category._id} _id={category._id} />
      ))}
    </Row>
  );
};

export default Categories;
