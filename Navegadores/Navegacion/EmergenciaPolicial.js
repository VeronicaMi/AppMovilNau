import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import OpcionEmergencia from './OpcionEmergencia.js'

export default class EmergenciaPolicial extends Component{   
    render(){
        return(
            <View style = {styles.container}>
                
                <Text>Hola cara de bola Policial</Text>
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