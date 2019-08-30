import React, { Component } from 'react';
import {
    StyleSheet, Text, View, TextInput,
    TouchableOpacity, Button, Alert,
    Picker, AsyncStorage, ScrollView,
    CheckBox
} from 'react-native';

export default class Home extends Component{
    render(){
        return(
            <View style = {styles.container}>
                 <Text style = {styles.texto}>
                     Pantalla principal
                      
                 </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,

    },

    texto:{
        flex: 1,
        fontSize: 30,
    },

});