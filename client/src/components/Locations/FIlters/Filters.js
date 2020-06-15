import React from 'react';
import * as actions from '../../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import './Filters.css';
const Filters = ({ categories }) => {
  const filtered = useSelector((state) => state.locations.filtered);

  const dispatch = useDispatch();
  return (
    <div className='filtersContainer'>
      <Button
        className='filterChild'
        size='sm'
        variant={filtered === 'alphabetically' ? 'dark' : 'outline-dark'}
        onClick={() => dispatch(actions.sortLocationAlphabetically())}
      >
        A-Z
      </Button>
      <Button
        className='filterChild'
        size='sm'
        variant={filtered === 'category' ? 'dark' : 'outline-dark'}
        onClick={() => dispatch(actions.sortLocationCategory())}
      >
        By Category
      </Button>
      <Dropdown>
        <Dropdown.Toggle
          variant={filtered === 'categoryFiltered' ? 'dark' : 'outline-dark'}
          className='filterChild'
          size='sm'
          id='dropdown-basic'
        >
          Filter By Category
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {categories.map((category) => {
            return (
              <Dropdown.Item
                key={category._id}
                onClick={() =>
                  dispatch(actions.filterByCategory(category.name))
                }
              >
                {category.name}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
      <Button
        className='filterChild'
        size='sm'
        variant={'outline-dark'}
        onClick={() => dispatch(actions.clearAllFilters())}
      >
        Clear All
      </Button>
    </div>
  );
};

export default Filters;
