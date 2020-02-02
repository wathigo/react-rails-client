import { combineReducers } from 'redux';
import propertyReducer from './categories';
import categoryReducer from './properties';

const rootReducer = combineReducers({
  categories: categoryReducer,
  properties: propertyReducer,
});

export default rootReducer;
