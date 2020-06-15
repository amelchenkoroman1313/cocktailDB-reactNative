import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import CocktailListContainer from '../containers/DrinksListContainer';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.homeScreen}>
        <Text>Hi i'm home</Text>
        <CocktailListContainer />
        <Button
          title="Go to Filter"
          onPress={() => navigation.navigate('FilterScreen')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  homeScreen: {
    backgroundColor: '#333',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 15,
  },
});

export default HomeScreen;
