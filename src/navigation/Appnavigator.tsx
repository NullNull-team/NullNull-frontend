import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from '../pages/Splash';
import HomeScreen from '../pages/Home';
import MapScreen from '../pages/Map';
import BuildingScreen from '../pages/Building';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const linking = {
    prefixes: ['http://localhost:8081'],
    config: {
      screens: {
        Splash: 'splash',
        Home: 'home',
        Map: 'map',
        Building: 'BuildingScreen', 
      },
    },
  };

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator
        id="AppStack"
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: '#EEF2F7',
          },
        }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="Building" component={BuildingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}