import {
  ADD_CATEGORY,
  DELETE_CATEGORY,
  FOCUS_CATEGORY,
  FOCUS_LOCATION,
  EDIT_CATEGORY,
  ADD_LOCATION,
  DELETE_LOCATION,
  EDIT_LOCATION,
  START_API_CALL,
  GET_CATEGORIES_SUCCESS,
  GET_LOCATIONS_SUCCESS,
  FAIL_API_CALL,
  SORT_LOCATION_ALPHABETICALLY,
  SORT_LOCATION_CATEGORY,
  FILTER_BY_CATEGORY,
  CLEAR_ALL_FILTERS,
} from '../actions/actionsTypes';

const initalState = {
  categories: [],
  locations: [],
  originalLocation: [],
  focusedCategory: {},
  filtered: '',
  loading: false,
  focusedLocation: {
    name: '',
    cordinate: { lat: '', lng: '' },
    address: '',
    category: '',
  },
};

const locations = (state = initalState, action) => {
  switch (action.type) {
    case START_API_CALL:
      return { ...state, loading: true };
    case FOCUS_CATEGORY:
      return { ...state, focusedCategory: action.payload };
    case FOCUS_LOCATION:
      return { ...state, focusedLocation: action.payload };
    case GET_CATEGORIES_SUCCESS:
      return { ...state, loading: false, categories: action.payload };
    case GET_LOCATIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        locations: action.payload,
        originalLocation: action.payload,
      };

    case FAIL_API_CALL:
      return { ...state, loading: false, errors: action.payload };
    case ADD_CATEGORY:
      return {
        ...state,
        loading: false,
        categories: [...state.categories, action.payload],
      };
    case DELETE_CATEGORY:
      const categories = state.categories.filter((category) => {
        return category._id !== action.payload;
      });
      return {
        ...state,
        loading: false,
        categories: categories,
      };
    case EDIT_CATEGORY:
      return {
        ...state,
        loading: false,
        focusedCategory: action.payload,
        categories: state.categories.map((category) => {
          if (action.payload._id === category._id) {
            category.name = action.payload.name;
          }
          return category;
        }),
      };
    case ADD_LOCATION:
      return {
        ...state,
        loading: false,
        filtered: '',
        locations: [...state.locations, action.payload],
        originalLocation: [...state.originalLocation, action.payload],
      };
    case DELETE_LOCATION:
      const locations = state.locations.filter((location) => {
        return location._id !== action.payload;
      });
      return {
        ...state,
        loading: false,
        focusedLocation: {
          name: '',
          cordinate: { lat: '', lng: '' },
          address: '',
          category: '',
        },
        locations: locations,
      };
    case EDIT_LOCATION:
      return {
        ...state,
        loading: false,
        focusedLocation: action.payload,
        locations: state.locations.map((location) => {
          if (action.payload._id === location._id) {
            location = action.payload;
          }
          return location;
        }),
      };
    case SORT_LOCATION_ALPHABETICALLY:
      let alphabeticallySorted = [...state.originalLocation];
      alphabeticallySorted = alphabeticallySorted.sort(function (a, b) {
        let nameA = a.name.toUpperCase();
        let nameB = b.name.toUpperCase();
        return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
      });
      return {
        ...state,
        filtered: 'alphabetically',
        locations: alphabeticallySorted,
      };
    case SORT_LOCATION_CATEGORY:
      let categorySorted = [...state.originalLocation];
      categorySorted = categorySorted.sort(function (a, b) {
        let categoryA = a.category.toUpperCase();
        let categoryB = b.category.toUpperCase();
        return categoryA < categoryB ? -1 : categoryA > categoryB ? 1 : 0;
      });
      return {
        ...state,
        filtered: 'category',
        locations: categorySorted,
      };
    case FILTER_BY_CATEGORY:
      let categoryFiltered = [...state.originalLocation];
      categoryFiltered = categoryFiltered.filter(function (location) {
        return action.payload === location.category;
      });
      return {
        ...state,
        filtered: 'categoryFiltered',
        locations: categoryFiltered,
      };
    case CLEAR_ALL_FILTERS:
      let backToOriginal = [...state.originalLocation];
      return {
        ...state,
        filtered: '',
        locations: backToOriginal,
      };

    default:
      return state;
  }
};

export default locations;
