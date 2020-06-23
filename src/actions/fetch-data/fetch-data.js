import {fetchDataError} from './fetch-data-error';
import {fetchDataRequest} from './fetch-data-request';
import {fetchDataSuccess} from './fetch-data-success';
import axios from 'axios';
import config from '../../lib/config';

export const fetchData = ({drinks}) => {
  return (dispatch) => {
    dispatch(fetchDataRequest());
    axios
      .get(config.API_URL, {})
      .then((res) => {
        dispatch(fetchDataSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchDataError(err.message));
      });
  };
};
