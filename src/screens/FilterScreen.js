import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import CocktailListContainer from '../containers/DrinksListContainer';

const FilterScreen = ({navigation}) => {
  // prevents react navigation from adding a white bar on the top of the screen
  return (
    <SafeAreaView>
      <View style={styles.mainView}>
        <Text>Filter</Text>
          <CocktailListContainer />
        <Button onPress={() => navigation.goBack()} title="Dismiss" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
});

export default FilterScreen;
