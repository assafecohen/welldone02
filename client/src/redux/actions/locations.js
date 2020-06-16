import {
  ADD_CATEGORY,
  DELETE_CATEGORY,
  EDIT_CATEGORY,
  ADD_LOCATION,
  DELETE_LOCATION,
  EDIT_LOCATION,
  START_API_CALL,
  GET_CATEGORIES_SUCCESS,
  GET_LOCATIONS_SUCCESS,
  FAIL_API_CALL,
  FOCUS_CATEGORY,
  FOCUS_LOCATION,
  SORT_LOCATION_ALPHABETICALLY,
  SORT_LOCATION_CATEGORY,
  FILTER_BY_CATEGORY,
  CLEAR_ALL_FILTERS,
} from './actionsTypes';

import instance from '../../utilities/axios/axios';

const startApiCall = (type) => {
  return {
    type,
  };
};
const successCall = (type, data) => {
  console.log('success');
  return {
    type,
    payload: data,
  };
};
const failApiCall = (type, errors) => {
  console.log('failed');
  return {
    type,
  };
};

export const initialGetCategories = () => {
  return (dispatch) => {
    dispatch(startApiCall(START_API_CALL));
    instance
      .get('/category')
      .then((res) => dispatch(successCall(GET_CATEGORIES_SUCCESS, res.data)))
      .catch((err) => dispatch(failApiCall(FAIL_API_CALL, err)));
  };
};
export const initialGetLocations = () => {
  return (dispatch) => {
    dispatch(startApiCall(START_API_CALL));
    instance
      .get('/location')
      .then((res) => dispatch(successCall(GET_LOCATIONS_SUCCESS, res.data)))
      .catch((err) => dispatch(failApiCall(FAIL_API_CALL, err)));
  };
};
export const addCategory = (name, setLoading, setModalStatus) => {
  return (dispatch) => {
    dispatch(startApiCall(START_API_CALL));
    instance
      .post('/category', { name })
      .then((res) => {
        dispatch(successCall(ADD_CATEGORY, res.data));
        setLoading(false);
        setModalStatus(false);
      })
      .catch((err) => {
        dispatch(failApiCall(FAIL_API_CALL, err));
      });
  };
};
export const focusCategory = (_id, name) => ({
  type: FOCUS_CATEGORY,
  payload: { _id, name },
});
export const focusLocation = (address, category, cordinate, name, _id) => ({
  type: FOCUS_LOCATION,
  payload: { address, category, cordinate, name, _id },
});
export const deleteCategory = (_id, setModalStatus) => {
  return (dispatch) => {
    dispatch(startApiCall(START_API_CALL));
    instance
      .delete(`/category/${_id}`)
      .then((res) => {
        dispatch(successCall(DELETE_CATEGORY, _id));
        setModalStatus(false);
      })
      .catch((err) => dispatch(failApiCall(FAIL_API_CALL, err)));
  };
};

export const editCategory = (_id, name, setLoading, setModalStatus) => {
  return (dispatch) => {
    dispatch(startApiCall(START_API_CALL));
    instance
      .put(`/category/${_id}`, { name })
      .then((res) => {
        dispatch(successCall(EDIT_CATEGORY, { _id, name }));
        setLoading(false);
        setModalStatus(false);
      })
      .catch((err) => dispatch(failApiCall(FAIL_API_CALL, err)));
  };
};
export const addLocation = (locationData, setLoading, setModalStatus) => {
  return (dispatch) => {
    dispatch(startApiCall(START_API_CALL));
    instance
      .post('/location', { ...locationData })
      .then((res) => {
        dispatch(successCall(ADD_LOCATION, res.data));
        setLoading(false);
        setModalStatus(false);
      })
      .catch((err) => {
        dispatch(failApiCall(FAIL_API_CALL, err));
      });
  };
};
export const deleteLocation = (_id, setModalStatus) => {
  return (dispatch) => {
    dispatch(startApiCall(START_API_CALL));
    instance
      .delete(`/location/${_id}`)
      .then((res) => {
        dispatch(successCall(DELETE_LOCATION, _id));
        setModalStatus(false);
      })
      .catch((err) => dispatch(failApiCall(FAIL_API_CALL, err)));
  };
};
export const editLocation = (locationData, setLoading, setModalStatus) => {
  return (dispatch) => {
    dispatch(startApiCall(START_API_CALL));
    instance
      .put(`/location/${locationData._id}`, { ...locationData })
      .then((res) => {
        dispatch(
          successCall(EDIT_LOCATION, { _id: locationData._id, ...locationData })
        );
        setLoading(false);
        setModalStatus(false);
      })
      .catch((err) => dispatch(failApiCall(FAIL_API_CALL, err)));
  };
};
export const sortLocationAlphabetically = () => ({
  type: SORT_LOCATION_ALPHABETICALLY,
});
export const sortLocationCategory = () => ({
  type: SORT_LOCATION_CATEGORY,
});
export const filterByCategory = (category) => ({
  type: FILTER_BY_CATEGORY,
  payload: category,
});
export const clearAllFilters = () => ({
  type: CLEAR_ALL_FILTERS,
});
