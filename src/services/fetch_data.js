import React from 'react';
import {
  allPropertiesRequests,
  allProperties,
  fetch_properties_error,
  allCategoriesRequests,
  allCategories,
  fetch_categories_error
} from '../actions';


const proxyUrl = 'https://cors-anywhere.herokuapp.com/'

const getProperties = (data, dispatch) => {
  let properties = [];
  dispatch(allPropertiesRequests())
  data.forEach(category => {
    console.log(category.id)
    let  targetUrl = `https://nameless-oasis-30857.herokuapp.com/categories/${category.id}/properties`
    fetch(proxyUrl + targetUrl)
    .then((response) => response.json())
    .then((data) => {
          properties = properties.concat(data);
          dispatch(allProperties(properties))
         })
      .catch(err => {
        dispatch(fetch_properties_error(err))
      })

       });

  }
const handleAsync = (dispatch) => {
  let  targetUrl = 'https://nameless-oasis-30857.herokuapp.com/categories'
  dispatch(allCategoriesRequests());
  fetch(proxyUrl + targetUrl)
  .then((response) => response.json())
  .then((data) => {
        dispatch(allCategories(data))
        getProperties(data, dispatch)
       })
  .catch(err => {
    dispatch(fetch_categories_error(err))
  })
       };

export default handleAsync;
