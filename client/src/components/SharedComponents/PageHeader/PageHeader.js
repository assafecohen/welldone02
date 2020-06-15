import React from 'react';
import { PageTitle } from '../../../styles/styledComponents/Titles/PageTitle/PageTitle';
import { PageAction } from '../../../styles/styledComponents/Titles/PageTitle/PageAction/PageAction';
import Fade from 'react-bootstrap/Fade';

const PageHeader = ({
  focused,
  setAddModalStatus,
  setDeleteModalStatus,
  setEditModalStatus,
  pageTitle,
  addTitle,
}) => {
  const { _id } = focused;
  return (
    <div style={{ display: 'flex' }}>
      <PageTitle>{pageTitle}</PageTitle>
      <PageAction>
        <button
          onClick={() => setAddModalStatus(true)}
          className='btn btn-outline-primary'
        >
          {addTitle}
        </button>
      </PageAction>
      <Fade in={_id !== undefined}>
        <div style={{ display: 'flex' }}>
          <PageAction>
            <button
              onClick={() => setEditModalStatus(true)}
              className='btn btn-outline-warning'
            >
              Edit
            </button>
          </PageAction>
          <PageAction>
            <button
              onClick={() => setDeleteModalStatus(true)}
              className='btn btn-outline-danger'
            >
              Delete
            </button>
          </PageAction>
        </div>
      </Fade>
    </div>
  );
};

export default PageHeader;
