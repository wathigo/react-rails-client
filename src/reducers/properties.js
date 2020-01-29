import allProperties from '../services/all_properties';

const propertyReducer = (state = allProperties, action) => {
  switch (action.type) {
    case 'ALL_PROPERTIES':
      return {
        fetching: false,
        properties: action.properties
      };
      break;

    case 'ALL_CATEGORIES':
      return {
        fetching: false,
        categories: action.categories
      }
      break;

    case 'ALL_PROPERTIES_REQUESTS':
      return {
        fetching: true,
        properties: []
      }
      break;

    case 'ALL_CATEGORIES_REQUESTS':
      return {
        fetching: true,
        categories: []
      }
    default:
      return state;
  }
};

export default propertyReducer;
