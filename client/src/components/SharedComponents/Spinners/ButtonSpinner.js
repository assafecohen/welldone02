import React, { Fragment } from 'react';
import Spinner from 'react-bootstrap/Spinner';

const ButtonSpinner = ({ loading = false }) => {
  return (
    <Fragment>
      {loading ? (
        <Spinner animation='border' variant='light' size='sm' />
      ) : null}
    </Fragment>
  );
};

export default ButtonSpinner;
