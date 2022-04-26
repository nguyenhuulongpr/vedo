import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from './HomePage';
import ResultPage from './ResultPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: () => null
        }}
      >
        <Stack.Screen
          name="HomePage"
          component={HomePage}
        />
        <Stack.Screen
          name="ResultPage"
          component={ResultPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;