import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import * as actions from '../../../redux/actions';
import styled from 'styled-components';
import Spinner from 'react-bootstrap/Spinner';
import SelectCategory from './SelectCategory';
import { useDispatch } from 'react-redux';

const EditLocationModal = (props) => {
  const { focusedLocation, modalStatus, setModalStatus, categories } = props;
  const [nameInput, setNameInput] = useState('');
  const [addressInput, setAddressInput] = useState('');
  const [cordsInput, setCordeInput] = useState({ lat: '', lng: '' });
  const [categoryInput, setCategoryInput] = useState('');
  const [loading, setLoading] = useState(false);
  const { name, address, cordinate, category, _id } = focusedLocation;
  const dispatch = useDispatch();
  const submitLocation = (e) => {
    e.preventDefault();
    const locationData = {
      name: nameInput,
      address: addressInput,
      cordinate: cordsInput,
      category: categoryInput,
      _id,
    };
    setLoading(true);
    dispatch(actions.editLocation(locationData, setLoading, setModalStatus));
  };
  useEffect(() => {
    setNameInput(name);
    setAddressInput(address);
    setCordeInput(cordinate);
    setCategoryInput(category);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focusedLocation]);
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
              className='form-control'
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
              className='form-control'
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
                className='form-control'
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
                className='form-control'
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
            {loading ? (
              <Spinner animation='border' variant='light' size='sm' />
            ) : null}
          </button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

const CordsContainer = styled.div`
  display: flex;
`;

export default EditLocationModal;
