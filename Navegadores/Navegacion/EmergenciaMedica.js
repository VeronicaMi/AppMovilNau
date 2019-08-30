//This is an example of Tab inside Navigation Drawer in React Native//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text } from 'react-native';
// import all basic components

import OpcionEmergencia from './OpcionEmergencia.js'

export default class EmergenciaMedica extends Component {
   render(){
        return(
            <View style = {styles.container}>
                
                <Text>Hola cara de bola Medica</Text>
                <OpcionEmergencia/>
                

            </View>
        );
    }
};

const styles = StyleSheet.create({
    container:{
        flex: 1,

    },
});