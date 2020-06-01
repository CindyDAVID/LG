import React from 'react';

import { createStackNavigator } from '@react-navigation/stack' //function used to implement a stack navigation pattern
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './RootNavigation';
import Library from '../Screens/Library/Library'
import Home from '../Screens/Home/Home'
import {Regle} from '../Screens/Règles du jeu/Regle'
import CreateGame from '../Screens/Créer une partie/CreateGame'
import SetUp from '../Screens/Game set up/SetUp'

const RootStack = createStackNavigator()

//test
export default function MyStack() {
//     return(
//         <Stack.Navigator>
//             <Stack.Screen name="Home" component={Home}/>
//             <Stack.Screen name="Library" component={Library}/>
//         </Stack.Navigator>
//     )
// }
    return(
        <NavigationContainer ref={navigationRef}>
        <RootStack.Navigator>
            <RootStack.Screen name="Loup-garou le jeu" component={Home} />
            <RootStack.Screen name="Les rôles" component={Library} />
            <RootStack.Screen name="Règles du jeu" component={Regle}/>
            <RootStack.Screen name='Créer une partie' component={CreateGame}/>
            <RootStack.Screen name='Set Up' component={SetUp}/>
        </RootStack.Navigator>
        </NavigationContainer>
    )
}

