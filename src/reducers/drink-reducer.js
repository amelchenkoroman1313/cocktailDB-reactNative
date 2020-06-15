import {cocktailAPI} from '../actions/fetch-data/fetch-data';

const SET_DRINKS = 'SET_DRINKS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

const initialState = {
  drinks: [],
  isFetching: true,
};

const drinkReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DRINKS: {
      return {...state, drinks: action.drinks};
    }
    case TOGGLE_IS_FETCHING: {
      return {...state, isFetching: action.isFetching};
    }
    default:
      return state;
  }
}

export const setDrinks = (drinks) => ({type: SET_DRINKS, drinks});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export const requestDrinks = () => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));

    let data = await cocktailAPI.getDrinks();
    dispatch(setDrinks(data.items));
  };
};

export default drinkReducer;


