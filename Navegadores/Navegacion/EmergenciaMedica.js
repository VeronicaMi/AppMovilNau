//This is an example of Tab inside Navigation Drawer in React Native//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, Alert } from 'react-native';
// import all basic components
//npm install --save react-native-phone-call

import OpcionEmergencia from './OpcionEmergencia.js'
import {createStackNavigator} from 'react-navigation';
import Chat from './Chat.js';
import call from 'react-native-phone-call';

class EmergenciaMedicaView extends Component {
    static navigationOptions = {
        header: null,
    }

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
                
                <OpcionEmergencia 
                onPressChat={() => this.props.navigation.navigate('Chat')}
                onPressCall={()=> this.onCall() }/>
                

            </View>
        );
    }
};


const EmergenciaMedica = createStackNavigator({
    EmergenciaMedicaView:EmergenciaMedicaView, 
    Chat: Chat,
},
{
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
   });


export default EmergenciaMedica;

const styles = StyleSheet.create({
    container:{
        flex: 1,

    },
});