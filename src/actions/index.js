const Actions = (() => {
  const ALL_PROPERTIES = 'ALL_PROPERTIES';
  const ALL_CATEGORIES = 'ALL_CATEGORIES';
  const ALL_CATEGORIES_REQUESTS = 'ALL_CATEGORIES_REQUESTS';
  const ALL_PROPERTIES_REQUESTS = 'ALL_PROPERTIES_REQUESTS';

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
})

export default Actions;
