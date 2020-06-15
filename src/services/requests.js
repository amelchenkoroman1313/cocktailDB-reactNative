import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://www.thecocktaildb.com/api/json/v1/1/',
});

export const fetchDrinksData = {
  getDrinks(key = 'c', value = 'Ordinary Drink') {
    return instance
      .get(`filter.php?${key}=${value}`)
      .then((response) => {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  getCategories(key = 'c', value = 'list') {
    return instance
      .get(`list.php?${key}=${value}`)
      .then((response) => {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
