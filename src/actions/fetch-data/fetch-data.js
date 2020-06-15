import {fetchDrinksData} from '../../services/requests';
import {fetchDataError} from './fetch-data-error';
import {fetchDataRequest} from './fetch-data-request';
import {fetchDataSuccess} from './fetch-data-success';

export const fetchData = () => (dispatch: Function) => {
  dispatch(fetchDataRequest());
  return fetchDrinksData
    .getDrinks()
    .then((drinks) => dispatch(fetchDataSuccess(drinks)))
    .catch(() => dispatch(fetchDataError()));
};
