import React, { Component } from 'react';
import {
    StyleSheet, Text, View, TextInput,
    TouchableOpacity, Button, Alert,
    Picker, AsyncStorage, ScrollView,
    CheckBox
} from 'react-native';
//npm i --save react-native-meteor
//https://www.npmjs.com/package/react-native-meteor

import Meteor, {
    withTracker,
    ReactiveDict,
    Accounts,
    MeteorListView,
  } from "react-native-meteor";


/** Connect to server.*/
Meteor.connect("ws://10.0.0.9:3000/websocket");

class Chat extends Component{
    constructor(props){
        super(props);
        this.state = {
            messages: props.messages,
            mensaje : '',
        };
    };

    insert () {
        const mssg = {
          usuario: this.props.messages[0].usuario,
          mensaje: this.state.mensaje,
          createdAt: new Date().getTime()
        };
    
        Meteor.call('messages.insert', { mssg }, (err, res) => {
          // Do whatever you want with the response
          console.log('messages.insert', err, res);
        });
    }

    render (){

        const list = this.props.messages.map(function ({usuario,mensaje,createdAt},index){
            const d = new Date(createdAt);
            const dformat = [d.getMonth()+1,
                       d.getDate(),
                       d.getFullYear()].join('/')+' '+
                      [d.getHours(),
                       d.getMinutes(),
                       d.getSeconds()].join(':');

            return (<Text key={index}>{mensaje} {dformat}</Text>);
          });


        return(
            <View>
                <Text>
                Pagina chat
                </Text>
                <View>
                    {list}
                </View>
                {/*comentario*/}
                <TextInput
                    placeholder = 'Mensaje'
                    onChangeText = {(text) => this.setState({mensaje: text})}
                    value = {this.state.mensaje}
                />

                <TouchableOpacity 
                            onPress ={() => this.insert()  }>
                            <Text >ENVIAR</Text>
                </TouchableOpacity>
                
            </View>
        );
    }
}


export default withTracker(params => {
    Meteor.subscribe('messages');
   
    return {
      messages: Meteor.collection('messages').find(),
      //incompleteCount: Tasks.find({ checked: { $ne: true } }).count(),
    };
  })(Chat);
  