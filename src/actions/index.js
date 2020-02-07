
const ALL_PROPERTIES = 'ALL_PROPERTIES';
const ALL_CATEGORIES = 'ALL_CATEGORIES';
const ALL_CATEGORIES_REQUESTS = 'ALL_CATEGORIES_REQUESTS';
const ALL_PROPERTIES_REQUESTS = 'ALL_PROPERTIES_REQUESTS';
const FETCH_CATEGORIES_ERROR = 'FETCH_CATEGORIES_ERROR';
const FETCH_PROPERTIES_ERROR = 'FETCH_PROPERTIES_ERROR';

export const allProperties = properties => {
  return {
    type: ALL_PROPERTIES,
    properties: properties
  }
}

export const allCategories = (categories) => {
  return {
    type: ALL_CATEGORIES,
    categories: categories
  }
}

export const allCategoriesRequests = () => {
  return {
    type: ALL_CATEGORIES_REQUESTS
  }
}

export const allPropertiesRequests = () => {
  return {
    type: ALL_PROPERTIES_REQUESTS
  }
}

export const fetch_categories_error = (err) => {
  return {
    type: FETCH_CATEGORIES_ERROR,
    error: err
  }
}

export const fetch_properties_error = (err) => {
    return {
      type: FETCH_PROPERTIES_ERROR,
      error: err
    }
  }
