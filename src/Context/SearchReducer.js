export const initialState = {
  items: [],
  searchText : 'India'
};

 const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_PRODUCTS":
      return {
          ...state,
          items : action.payload
      };
    case 'SET_SEARCH_TEXT' :
        return {
            ...state,
            searchText : action.payload
        }  
    default:
        return { ...state };
  }
};
export default searchReducer;