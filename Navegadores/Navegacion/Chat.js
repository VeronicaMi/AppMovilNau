import React, { Component } from 'react';
import {
    StyleSheet, Text, View, TextInput,
    TouchableOpacity, Button, Alert,
    Picker, AsyncStorage, ScrollView,
    CheckBox
} from 'react-native';

export default class Chat extends Component{
    constructor(props){
        super(props);
        this.state = {
            Mensaje : '',
        };
    };

    render (){
        return(
            <View>
                <Text>
                Pagina chat
                </Text>

                <TextInput
                    placeholder = 'Mensaje'
                    onChangeText = {(text) => this.setState({Mensaje: text})}
                    value = {this.state.Mensaje}
                />

                <TouchableOpacity 
                            onPress ={()=> alert('Llamada al 911') }>
                            <Text >ENVIAR</Text>
                </TouchableOpacity>
                
            </View>
        );
    }
}
