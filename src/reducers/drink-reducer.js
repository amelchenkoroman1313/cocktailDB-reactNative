import {
  FETCH_DATA_ERROR,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
} from '../constants/action-types';

const initialState = {
  drinksInfo: [],
  isFetching: true,
  error: null,
};

export const getDrinksSelector = (state) => ({...state.drinksPage});


const drinksReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: null,
        drinksInfo: [...state.drinksInfo, action.payload],
      };
    }
    case FETCH_DATA_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case FETCH_DATA_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    }
    default: {
      return state;
    }
  }
};

export default drinksReducer;
