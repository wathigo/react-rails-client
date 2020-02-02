const Actions = (() => {
  const ALL_PROPERTIES = 'ALL_PROPERTIES';
  const ALL_CATEGORIES = 'ALL_CATEGORIES';
  const ALL_CATEGORIES_REQUESTS = 'ALL_CATEGORIES_REQUESTS';
  const ALL_PROPERTIES_REQUESTS = 'ALL_PROPERTIES_REQUESTS';
  const FETCH_CATEGORIES_ERROR = 'FETCH_CATEGORIES_ERROR';
  const FETCH_PROPERTIES_ERROR = 'FETCH_PROPERTIES_ERROR';

  const allProperties = properties => {
    return {
      type: ALL_PROPERTIES,
      properties: properties
    }
  }

  const allCategories = (categories) => {
    return {
      type: ALL_CATEGORIES,
      categories: categories
    }
  }

  const allCategoriesRequests = () => {
    return {
      type: ALL_CATEGORIES_REQUESTS
    }
  }

  const allPropertiesRequests = () => {
    return {
      type: ALL_PROPERTIES_REQUESTS
    }
  }

  const fetch_categories_error = (err) => {
    return {
      type: FETCH_CATEGORIES_ERROR,
      error: err
    }
  }

    const fetch_properties_error = (err) => {
      return {
        type: FETCH_PROPERTIES_ERROR,
        error: err
      }
    }
})

export default Actions;
