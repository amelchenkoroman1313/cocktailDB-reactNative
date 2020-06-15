import {connect} from 'react-redux';
import {getDrinksSelector} from '../reducers/getDrinksSelector';
import {fetchData} from '../actions/fetch-data/fetch-data';
import DrinksList from '../components/drinks-conponent/DrinksList';

const mapStateToProps = (state: Object) => getDrinksSelector(state);

const mapDispatchToProps = (dispatch: Function) => ({
  fetchData: () => dispatch(fetchData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DrinksList);
