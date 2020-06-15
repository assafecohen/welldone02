import React from 'react';
import Modal from 'react-bootstrap/Modal';
import * as actions from '../../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const DeleteModal = (props) => {
  const { modalStatus, setModalStatus } = props;

  const dispatch = useDispatch();
  const focusedCategory = useSelector(
    (state) => state.locations.focusedCategory
  );
  const deleteCategory = () => {
    dispatch(actions.deleteCategory(focusedCategory._id, setModalStatus));
  };

  return (
    <Modal show={modalStatus} onHide={() => setModalStatus(false)}>
      <Modal.Body>
        <div style={{ textAlign: 'center' }}>
          <span
            style={{ fontWeight: '500', fontSize: '20px', color: '#74788d' }}
          >
            Are you sure you want to delete ?
          </span>
        </div>
        <div
          style={{
            minHeight: '150px',
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}
        >
          <button
            className='btn btn-secondary'
            onClick={() => setModalStatus(false)}
          >
            Cancel
          </button>
          <button className='btn btn-danger' onClick={() => deleteCategory()}>
            Yes, delete!
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default DeleteModal;
