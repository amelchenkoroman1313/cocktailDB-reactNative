// @flow

import {FETCH_DATA_SUCCESS} from '../../constants/action-types';

export const fetchDataSuccess = (drinksInfo) => ({
  type: FETCH_DATA_SUCCESS,
  payload: {
    ...drinksInfo,
  },
});
