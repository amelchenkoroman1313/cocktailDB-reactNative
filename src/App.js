import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import FilterScreen from './screens/FilterScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import store from './reducers/root-reducer';
import {Provider} from 'react-redux';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="FilterScreen" component={FilterScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
