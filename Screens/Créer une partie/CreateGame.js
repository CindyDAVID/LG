import React from 'react'
import { Navigation } from "react-native-navigation";
import * as RootNavigation from '../../Navigation/RootNavigation'
import NumericInput from 'react-native-numeric-input'
import {CheckBox} from 'react-native-elements'

import { Field, reduxForm, Provider, arrayRemoveAll } from 'redux-form'

import {Alert, View, TextInput, Text, Button, StyleSheet, ScrollView } from 'react-native';


class Form extends React.Component {

    constructor(props){
        super(props)
        this.state={
            checked1:false,
            checked2:false,
            checked3:false,
            checked4:false,
            checked5:false,
            checked6: false,
            textInput:[],
            inputData:[]
        }
    }

     //function to add TextInput dynamically
  addTextInput = (index) => {
    let textInput = this.state.textInput;
    textInput.push(<TextInput style={styles.textInput}
      onChangeText={(text) => this.addValues(text, index)} />);
    this.setState({ textInput });
  }

  //function to remove TextInput dynamically
  removeTextInput = () => {
    let textInput = this.state.textInput;
    let inputData = this.state.inputData;
    for (let i=0; i<this.state.inputData.length; i++){
        if (this.state.inputData[i].index==this.state.inputData.length-1){
            // console.log(this.state.inputData[i].index)
            // console.log(this.state.inputData.length-1)
                textInput.splice(i,1);
                inputData.splice(i,1);
                this.setState({ textInput,inputData });
                break;
        }
    }
  }

  //function to add text from TextInputs into single array
  addValues = (text, index) => {
    let dataArray = this.state.inputData;
    let checkBool = false;
    if (dataArray.length !== 0){
      dataArray.forEach(element => {
        if (element.index === index ){
          element.text = text;
          checkBool = true;
        }
      });
    }
    if (checkBool){
    this.setState({
      inputData: dataArray
    });
  }
  else {
    dataArray.push({'text':text,'index':index});
    this.setState({
      inputData: dataArray
    });
  }
  }

  //function to console the output
  getValues = () => {
    console.log('Data',this.state.inputData);
    if (this.state.inputData.length<3){
        alert('c 8 joueurs')
    }
  }


      NextScreen=()=>{
          if (this.state.inputData.length<3){
            alert('c 8 joueurs')
          }
          else{
            RootNavigation.navigate('Set Up', {
                nameInput:this.state.nameInput,
                checked1:this.state.checked1,
                checked2:this.state.checked2,
                checked3:this.state.checked3,
                checked4:this.state.checked4,
                checked5:this.state.checked5,
                checked6:this.state.checked6,
                })
          }

      }
    
    
    render(){
        return (
            <ScrollView 
            contentContainerStyle={styles.root}
            >
                <Text>Vous serez le maître de jeu.{"\n"}
                {"\n"}
                Veuillez entrer le nom de chaque joueur (8 joueurs minimum):
                </Text>
                {/* <TextInput 
                style={styles.textInput}
                id={0}
                onChangeText={(name) => this.addValues(name, 0)} /> */}

                <View>
                    <View style= {styles.row}>
                        <View style={{margin: 10}}>
                            <Button title='Ajouter un joueur' onPress={() => this.addTextInput(this.state.textInput.length)} />
                        </View>

                    </View>

                    {this.state.textInput.map((value) => {
                    return value
                    })}
                    <View style={{margin: 10}}>
                        <Button title='Supprimer dernier joueur' onPress={() => this.removeTextInput()} />
                    </View>
                </View>

{/*                 
                <TextInput 
                style={styles.textInput}
                onChangeText={(name) => this.addValues(name, 1)} />
                <TextInput 
                style={styles.textInput}
                onChangeText={(name) => this.addValues(name, 2)} /> */}

                {/* <TextInput 
                style={styles.textInput}
                onChangeText={(name) => this.addValues(name, 3)} />
                <TextInput 
                style={styles.textInput}
                onChangeText={(name) => this.addValues(name, 4)} />
                <TextInput 
                style={styles.textInput}
                onChangeText={(name) => this.addValues(name, 5)} />
                <TextInput 
                style={styles.textInput}
                onChangeText={(name) => this.addValues(name, 6)} />
                <TextInput 
                style={styles.textInput}
                onChangeText={(name) => this.addValues(name, 7)} />
                <TextInput 
                style={styles.textInput}
                onChangeText={(name) => this.addValues(name, 8)} /> */}

                {/* <Button 
                title='Valider les joueurs' 
                onPress={() => this.getValues()} /> */}
                {/* <Text>Nombre de joueurs :{"\n"}</Text>
                <NumericInput 
                input={this.state.input}
                minValue={8}
                maxValue={18}
                initValue={8}
                onChange={input=>this.setState({input})}
                /> */}
                <Text>{"\n"}Cochez les rôles que vous 
                souhaitez distribuer pour cette partie{"\n"}</Text>
                <CheckBox 
                title='Loup-garou'
                checked={this.state.checked1}
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                onPress={()=>this.setState({checked1:!this.state.checked1})}
                />

                <CheckBox 
                title='Villageois'
                checked={this.state.checked2}
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                onPress={()=>this.setState({checked2:!this.state.checked2})}
                />
                <CheckBox 
                title='Cupidon'
                checked={this.state.checked3}
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                onPress={()=>this.setState({checked3:!this.state.checked3})}
                />
                <CheckBox 
                title='Voyante'
                checked={this.state.checked4}
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                onPress={()=>this.setState({checked4:!this.state.checked4})}
                />
                <CheckBox 
                title='Chasseur'
                checked={this.state.checked5}
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                onPress={()=>this.setState({checked5:!this.state.checked5})}
                />
                <CheckBox 
                title='Petite fille'
                checked={this.state.checked6}
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                onPress={()=>this.setState({checked6:!this.state.checked6})}
                />
                <Button 
                title={'Submit'}
                onPress={()=>this.NextScreen()
                } />
            </ScrollView>

        );
    };
}

const styles = StyleSheet.create({
  root: {
    padding: 32,
    justifyContent: 'center'
  },
  input: {
    padding: 8,
    marginBottom: 8,
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 4
  },
  textInput: {
    borderColor: 'black', 
    borderWidth: 1,
    margin:5,
    //alignSelf:'flex-start'
    width : '90%'
  },
  row:{
    flex:1,
    flexDirection: 'row',
    //justifyContent: 'center',
    alignItems: 'center'
    },
  button:{
    margin:5,
    alignSelf:'flex-end'
  }

});

export default Form;

// const submit = values => {
//   console.log('submitting form', values)
// }

// const renderInput = ({ input: { onChange, ...restInput }}) => {
//   return <TextInput style={styles.input} onChangeText={onChange} {...restInput} />
// }

// const Form = props => {
//   const { handleSubmit } = props

//   return (
//     <View style={styles.container}>
//       <Text>Email:</Text>
//       <Field name="email" component={renderInput} />
//       <TouchableOpacity onPress={handleSubmit(submit)}>
//         <Text style={styles.button}>Submit</Text>
//       </TouchableOpacity>
//     </View>
//   )
// }

// export default reduxForm({
//   form: 'test'
// })(Form)

// class LoginForm extends React.Component {
// 	render() {
// 		return (
// 			<View>
// 				<Field
// 					name="login"
// 					label="Identifiant"
// 					textContentType="username"
// 					autoCorrect={false}
// 					autoCapitalize="none"
// 					component={TextInput}
// 					icon="person"
// 				/>
// 				<Field
// 					name="password"
// 					label="Mot de passe"
// 					textContentType="password"
// 					secureTextEntry={true}
// 					autoCorrect={false}
// 					autoCapitalize="none"
// 					component={TextInput}
// 					icon="key"
// 				/>
// 				<Button full warning rounded onPress={this.props.handleSubmit}>
// 					<Text>Log in</Text>
// 				</Button>
// 			</View>
// 		);
// 	}
// }

// export default reduxForm({
// 	form: "login",
// })(LoginForm);

{/* <TextInput
placeholder={'Email'}
style={styles.input}
/>
<TextInput
secureTextEntry
placeholder={'Password'}
style={styles.input}
/> */}