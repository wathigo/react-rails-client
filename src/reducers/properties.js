const initialState = {
    fetching: false,
    properties: [],
    error: null
}

const propertyReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ALL_PROPERTIES':
      return {
        ...state,
        fetching: false,
        properties: action.properties
      };
      break;

    case 'ALL_PROPERTIES_REQUESTS':
      return {
        ...state,
        fetching: true
      }
      break;

    default:
      return state;
  }
};

export default propertyReducer;
