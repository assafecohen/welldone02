import { combineReducers } from 'redux';
import locations from './locations';
import theme from './theme';

const rootReducer = combineReducers({
  locations,
  theme,
});

export default rootReducer;
