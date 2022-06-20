const url = 'https://api.coingecko.com/api/v3/coins/';
// REDUCERS
const categoryReducer = (state = {}, action) => {
  switch (action.type) {
    case 'loadCategories':
      state = action.playload;
      return state;
    default:
      return state;
  }
};
// ACTIONS
export const fetchCategory = (id) => async (dispatch) => {
  const res = await fetch(url + id);
  const data = await res.json();

  dispatch({
    type: 'loadCategories',
    playload: data,
  });
};

export default categoryReducer;
