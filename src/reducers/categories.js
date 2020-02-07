const initialState = {
    fetching: false,
    categories: [],
    error: null
}

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ALL_CATEGORIES':
      return {
        ...state,
        fetching: false,
        categories: action.categories
      }
      break;

    case 'ALL_CATEGORIES_REQUESTS':
      return {
        ...state,
        fetching: true
      }
      break;

    default:
      return state;
      break;
  }
};

export default categoryReducer;
