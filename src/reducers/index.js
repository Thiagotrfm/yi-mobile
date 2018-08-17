import { combineReducers } from 'redux';
import contactData from './contactDataReducer';

const rootReducer = combineReducers({
  contactData,
});

export default rootReducer;
