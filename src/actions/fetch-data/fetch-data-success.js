// @flow

import {FETCH_DATA_SUCCESS} from '../../constants/action-types';

export const fetchDataSuccess = (drinks: Object) => ({
  type: FETCH_DATA_SUCCESS,
  payload: {drinks},
});
