import React, { useState, useEffect } from 'react';
import * as actions from '../../../redux/actions';
import Modal from 'react-bootstrap/Modal';
import { setInputStyle } from '../../../utilities/sharedFunctions/sharedFunctions';
import ButtonSpinner from '../../SharedComponents/Spinners/ButtonSpinner';
import { useDispatch } from 'react-redux';

const AddCategoryModal = (props) => {
  const { modalStatus, setModalStatus } = props;
  const [category, setCategory] = useState({
    value: '',
    isValid: false,
    touched: false,
  });
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const submitCategory = () => {
    setLoading(true);
    dispatch(actions.addCategory(category.value, setLoading, setModalStatus));
  };
  useEffect(() => {
    setCategory({ value: '', isValid: false, touched: false });
  }, [modalStatus]);
  return (
    <Modal show={modalStatus} onHide={() => setModalStatus(false)}>
      <Modal.Header closeButton={true}>Add Category</Modal.Header>
      <Modal.Body>
        <label>Category</label>
        <input
          onChange={(event) => {
            const { value } = event.target;
            const isValid = value.trim() !== '';
            setCategory({ value, isValid, touched: true });
          }}
          value={category.value}
          placeholder='Enter Category...'
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
          onClick={submitCategory}
        >
          <span style={{ marginRight: loading ? '5px' : '0' }}>Submit</span>
          <ButtonSpinner loading={loading} />
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddCategoryModal;

// instance
// .post('/category', { name: category.value })
// .then(res => {
//   setLoading(false);
//   setModalStatus(false);
//   setCategory({ value: '', isValid: false, touched: false });
//   getCategories();
// })
// .catch(err => console.log(err));
