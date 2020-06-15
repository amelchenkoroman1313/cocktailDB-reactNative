import React from 'react';
import {
  View,
  Button,
  Text,
  ActivityIndicator,
  FlatList,
  StyleSheet, Image
} from 'react-native';

type Props = {
  error: boolean,
  isLoading: boolean,
  drinksInfo: Object,
  fetchData: Function,
};

const getErrorMessage = () => (
  <Text style={styles.errorText}>An Error occured when fetching data</Text>
);

const getDrinksInfo = (drinksInfo) => {
  const {strDrink, strDrinkThumb, idDrink} = drinksInfo;
  const info = (
    <View>
      <Text>{strDrink}</Text>
      <Image source={require(`${strDrinkThumb}`)} />
    </View>
  );

  return <Text>{info}</Text>;
};

const DrinksList = (props: Props) => {
  const {isLoading, error, fetchData, drinksInfo} = props;
  const hasDrinksData = Object.keys(drinksInfo).length;

  return (
    <View style={styles.container}>
      {isLoading ? <ActivityIndicator /> : null}
      {error ? getErrorMessage() : null}
      {hasDrinksData ? getDrinksInfo(drinksInfo) : null}
      <Button onPress={fetchData} title="Load Data" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  errorText: {
    textAlign: 'center',
    color: 'red',
    fontWeight: 'bold',
  },
});

export default DrinksList;
