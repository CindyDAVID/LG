import React from 'react'
import { Navigation } from "react-native-navigation";
import * as RootNavigation from '../../Navigation/RootNavigation'
import {Text} from 'react-native'

class SetUp extends React.Component {

    constructor(props){
        super(props)
    }

    render(){
        console.log(this.props.route.params.checked1)        
        return(
            <Text>olà
                {this.props.route.params.checked1} </Text> 
        )
    }
}

export default SetUp

