import React, { useState } from 'react';
import * as actions from '../../../redux/actions';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal';
import { setInputStyle } from '../../../utilities/sharedFunctions/sharedFunctions';
import ButtonSpinner from '../../SharedComponents/Spinners/ButtonSpinner';
import SelectCategory from './SelectCategory';

const AddLocationModal = ({ modalStatus, setModalStatus, categories }) => {
  const [nameInput, setNameInput] = useState('');
  const [addressInput, setAddressInput] = useState('');
  const [cordsInput, setCordeInput] = useState({ lat: '', lng: '' });
  const [categoryInput, setCategoryInput] = useState('');
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const submitLocation = (e) => {
    e.preventDefault();
    const locationData = {
      name: nameInput,
      address: addressInput,
      cordinate: cordsInput,
      category: categoryInput,
    };
    setLoading(true);
    dispatch(actions.addLocation(locationData, setLoading, setModalStatus));
  };
  return (
    <Modal show={modalStatus} onHide={() => setModalStatus(false)}>
      <Modal.Header closeButton={true}>Add Location</Modal.Header>
      <form onSubmit={(e) => submitLocation(e)}>
        <Modal.Body>
          <div className='form-group'>
            <label>Name</label>
            <input
              required
              onChange={(event) => setNameInput(event.target.value)}
              value={nameInput}
              placeholder='Enter Location Name...'
              className={setInputStyle(categoryInput)}
            />
          </div>
          <div className='form-group'>
            <label>Category</label>
            <SelectCategory
              categories={categories}
              setCategoryInput={setCategoryInput}
              categoryInput={categoryInput}
            />
          </div>
          <div className='form-group'>
            <label>Address</label>
            <input
              required
              onChange={(event) => setAddressInput(event.target.value)}
              value={addressInput}
              placeholder='Enter Location Address...'
              className={setInputStyle(categoryInput)}
            />
          </div>
          <div className='form-group'>
            <label>Cords</label>
            <CordsContainer>
              <input
                required
                type='number'
                onChange={(event) =>
                  setCordeInput({ ...cordsInput, lat: event.target.value })
                }
                value={cordsInput.lat}
                placeholder='Latitude...'
                className={setInputStyle(categoryInput)}
              />
              <input
                required
                type='number'
                style={{ marginLeft: '4px' }}
                onChange={(event) =>
                  setCordeInput({ ...cordsInput, lng: event.target.value })
                }
                value={cordsInput.lng}
                placeholder='Longitude...'
                className={setInputStyle(categoryInput)}
              />
            </CordsContainer>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className='btn btn-secondary'
            onClick={() => setModalStatus(false)}
            type='button'
          >
            Cancel
          </button>
          <button type='submit' className='btn btn-primary'>
            <span style={{ marginRight: loading ? '5px' : '0' }}>Submit</span>
            <ButtonSpinner loading={loading} />
          </button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

const CordsContainer = styled.div`
  display: flex;
`;

export default AddLocationModal;
