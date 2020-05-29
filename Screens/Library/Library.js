import React from 'react'
import {StyleSheet, View, FlatList, Text, Button, TouchableOpacity} from 'react-native'
import role from '../../Helpers/Role'
import RoleItem from '../RoleItem'
import { Navigation } from "react-native-navigation";
import * as RootNavigation from '../../Navigation/RootNavigation'

//const{Navigation}=require('react-native-navigation');

class Library extends React.Component{
    _onPressButton() {
        alert('You tapped the button!')
    }
    render(){
        console.log(this.props)
        //const{navigate}=this.props.navigation;

        //const{navigation}=props
        return(
            <View style={styles.main_container}>
                {/* <Button
                    style={styles.buttonContainer}
                    onPress={() =>RootNavigation.navigate('Retour')}//navigation.navigate('Home')}
                    title="Press me"
                /> */}
                <Text style={styles.header}>Les différents rôles</Text>
                <FlatList 
                    data={role}
                    keyExtractor={(item)=> item.id.toString()}
                    renderItem={({item}) => <RoleItem role={item}/>}
                />

                
            </View>
        )
    }
}

const styles= StyleSheet.create({
    main_container:{
        flex:1,
        marginTop: 30,

    },
    header:{
        fontWeight: 'bold',
        fontSize: 30,
        marginTop : 10,
        flexWrap: 'wrap',
        paddingRight: 5
    },

    buttonContainer:{
        backgroundColor: '#222',
        borderRadius: 5,
        padding: 10,
        margin: 20
    },
    buttonText:{
        fontSize: 20,
        color: '#fff'
    }

})

export default Library 
