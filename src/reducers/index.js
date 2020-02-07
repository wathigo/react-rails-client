import { combineReducers } from 'redux';
import propertyReducer from './properties';
import categoryReducer from './categories';

const rootReducer = combineReducers({
  categories: categoryReducer,
  properties: propertyReducer,
});

export default rootReducer;
