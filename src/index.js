import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import * as ReduxThunk from 'redux-thunk'
import rootReducer from './reducers/properties'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Action from './actions';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(ReduxThunk.default))
)

const getProperties = (data) => {
  let properties = [];
  store.dispatch(Action.allPropertiesRequests())
  data.forEach(category => {
    fetch(`https://nameless-oasis-30857.herokuapp.com/categories/${category.id}/properties`)
    .then((response) => response.json())
    .then((data) => {
          console.log(data)
          properties = properties + data;
         })
         store.dispatch(Action.allProperties(properties))
       });
  }
const handleAsync = () => {
  return function(dispatch) {
    // dispatch request action here
    store.dispatch(Action.allCategoriesRequests());
    fetch(`https://nameless-oasis-30857.herokuapp.com/categories`)
    .then((response) => response.json())
    .then((data) => {
          console.log(data)
          store.dispatch(Action.allCategories(data))
          getProperties(data)
         })
         }
       };

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
