import React from 'react';
import Home from './Screens/Home/Home'
import Library from './Screens/Library/Library'
import Form from './Screens/Créer une partie/CreateGame'

import { createStackNavigator } from '@react-navigation/stack';

import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './Navigation/RootNavigation';
import RootStack from './Navigation/Navigation'

//const RootStack = createStackNavigator();

export default function App() {
  return (
    <RootStack/>
    // <NavigationContainer ref={navigationRef}>
    //   <RootStack.Navigator>
    //     <RootStack.Screen name="Home" component={Home} />
    //     <RootStack.Screen name="Library" component={Library} />
    //   </RootStack.Navigator>
    // </NavigationContainer>
  );
}