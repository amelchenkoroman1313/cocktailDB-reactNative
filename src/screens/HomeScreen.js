import React from 'react';
import {View, Text, Button} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import DrinksListContainer from '../containers/DrinksListContainer';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <View>
        <Text>Hi i'm home</Text>
        <DrinksListContainer />
        <Button
          title="Go to Filter"
          onPress={() => navigation.navigate('FilterScreen')}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
