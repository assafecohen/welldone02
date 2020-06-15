import React, { useEffect, useState } from 'react';
import * as actions from '../../../redux/actions';
import Modal from 'react-bootstrap/Modal';
import { setInputStyle } from '../../../utilities/sharedFunctions/sharedFunctions';
import Spinner from 'react-bootstrap/Spinner';
import { useDispatch } from 'react-redux';

const EditCategoryModal = (props) => {
  const { focusedCategory, modalStatus, setModalStatus } = props;
  const { _id, name } = focusedCategory;
  const [category, setCategory] = useState({
    value: name,
    isValid: false,
    touched: false,
  });
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const submitEditedCategory = () => {
    setLoading(true);
    dispatch(
      actions.editCategory(_id, category.value, setLoading, setModalStatus)
    );
  };
  useEffect(() => {
    setCategory({ ...category, value: name });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);
  return (
    <Modal show={modalStatus} onHide={() => setModalStatus(false)}>
      <Modal.Header closeButton={true}>Add Category</Modal.Header>
      <Modal.Body>
        <label>Location</label>
        <input
          onChange={(event) => {
            const { value } = event.target;
            const isValid = value.trim() !== '';
            setCategory({ value, isValid, touched: true });
          }}
          value={category.value}
          placeholder='Enter Location...'
          className={setInputStyle(category)}
        />
      </Modal.Body>
      <Modal.Footer>
        <button
          className='btn btn-secondary'
          onClick={() => setModalStatus(false)}
        >
          Cancel
        </button>
        <button
          disabled={!category.isValid}
          className='btn btn-primary'
          onClick={submitEditedCategory}
        >
          <span style={{ marginRight: loading ? '5px' : '0' }}>Submit</span>
          {loading ? (
            <Spinner animation='border' variant='light' size='sm' />
          ) : null}
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditCategoryModal;
