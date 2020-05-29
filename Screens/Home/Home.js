import React, {Component} from 'react'
import {View, Text, TouchableHighlight, Button} from 'react-native'
import {createBottomTabNavigator, createAppContainer} from 'react-navigation'
import {Navigation} from 'react-native-navigation'
import PropTypes from 'prop-types'
import * as RootNavigation from '../../Navigation/RootNavigation'

class Home extends Component{


    render(){
        return(
            console.log(this.props),
            <View>
                <Text>Welcome in the Loup-Garou game</Text>
                <Button
                    // onPress={ () => Navigation.push("Home",{
                    //     component:{
                    //         name:"Library"
                    //     }
                    // })
                    // }
                    onPress={() => RootNavigation.navigate('Règles du jeu')}
                    title='Règles du jeu'
                /> 
                <Button
                    // onPress={ () => Navigation.push("Home",{
                    //     component:{
                    //         name:"Library"
                    //     }
                    // })
                    // }
                    onPress={() => RootNavigation.navigate('Les rôles')}
                    title='Les différents rôles du jeu'
                /> 
                <Button
                    // onPress={ () => Navigation.push("Home",{
                    //     component:{
                    //         name:"Library"
                    //     }
                    // })
                    // }
                    onPress={() => RootNavigation.navigate('Créer une partie')}
                    title='Créer une partie'
                /> 
            </View>
        )
    
    }
};



// goToLibrary(){
//     console.log('ello')
//     Navigation.push(this.props.componentId,{
//         component:{
//             name:"Library"
//         }
//     });
// };

export default Home 
