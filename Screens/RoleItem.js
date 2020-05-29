import React from 'react'
import {StyleSheet, View, Text, Image} from 'react-native'

class RoleItem extends React.Component{
    render(){
        const role =this.props.role
        return(
            <View style={styles.main_container}>
                <Image
                style={styles.image}
                /> 
                <View style={styles.content_container}>
                    <View style={styles.header_container}>
                        <Text style={styles.title_text}>{role.title}</Text>
                    </View>
                    <View style={styles.description_container}>
                        <Text style={styles.description_text} numberOfLines={6}>{role.explanation}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex :1,
        height: 190,
        flexDirection:'row'
      },
      content_container: {
        flex: 1,
        margin: 5
      },
      title_text: {
        fontWeight: 'bold',
        fontSize: 20,
        flex: 1,
        flexWrap: 'wrap',
        paddingRight: 5
      },
      header_container:{
        flex: 3,
        flexDirection: 'row'
      },
      description_container:{
        flex:7
      },
      description_text:{
        fontStyle: 'italic',
        color: '#666666'
      },
      image:{
        width: 120,
        height: 180,
        margin: 5,
      }
})

export default RoleItem