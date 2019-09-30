//This is an example of Tab inside Navigation Drawer in React Native//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, Alert } from 'react-native';
// import all basic components

import OpcionEmergencia from './OpcionEmergencia.js'
import {createStackNavigator} from 'react-navigation';
import Chat from './Chat.js';

class EmergenciaMedicaView extends Component {
   render(){
        return(
            <View style = {styles.container}>
                
                <Text>Hola cara de bola Medica</Text>
                <OpcionEmergencia 
                onPressChat={() => this.props.navigation.navigate('Chat')}
                onPressCall={()=> alert('Llamada al 911') }/>
                

            </View>
        );
    }
};

const EmergenciaMedica = createStackNavigator({
    EmergenciaMedicaView:EmergenciaMedicaView, 
    Chat: Chat,
});

export default EmergenciaMedica;

const styles = StyleSheet.create({
    container:{
        flex: 1,

    },
});