import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const loadingSpinner = () => {
  return (
    <div className='text-center'>
      <Spinner
        className='spinner-border'
        role='status'
        style={{ height: '5rem', width: '5rem' }}
      >
        <span className='sr-only'>Loading...</span>
      </Spinner>
    </div>
  );
};

export default loadingSpinner;
