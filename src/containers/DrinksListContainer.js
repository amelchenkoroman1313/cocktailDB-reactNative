import {connect} from 'react-redux';
import {fetchData} from '../actions/fetch-data/fetch-data';
import DrinksList from '../components/drinks-conponent/DrinksList';
import {getDrinksSelector} from '../reducers/drink-reducer';

const mapStateToProps = (state) => getDrinksSelector(state);

const mapDispatchToProps = (dispatch) => {
  return {
    onfetchData: (data) => {
      dispatch(fetchData(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrinksList);
