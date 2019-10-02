//This is an example of Tab inside Navigation Drawer in React Native//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text } from 'react-native';
// import all basic components
import OpcionEmergencia from './OpcionEmergencia.js'
import {createStackNavigator} from 'react-navigation';
import Chat from './Chat.js';
import call from 'react-native-phone-call';

class EmergenciaProteccionCivilView extends Component{
    

    onCall(){
        const args = {
            number: '911', // String value with the number to call
            prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call 
          };

        call(args).catch(console.error);
    };

  render(){
        return(
            <View style = {styles.container}>
            <Text>Hola cara de bola Procteccion civil</Text>
            <OpcionEmergencia
            onPressChat={() => this.props.navigation.navigate('Chat')}
            onPressCall={() => this.onCall() }/>

            </View>
        );
    }
};

const EmergenciaProteccionCivil = createStackNavigator({
    EmergenciaProteccionCivilView:EmergenciaProteccionCivilView, 
    Chat: Chat,
},
{
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
   });

export default EmergenciaProteccionCivil;

const styles = StyleSheet.create({
    container:{
        flex: 1,

    },

});