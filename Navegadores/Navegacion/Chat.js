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
Meteor.connect("ws://10.0.0.29:3000/websocket");

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
            <ScrollView>
            <View style = {styles.container} >
                <Text>
                Pagina chat
                </Text>
                <Text>aqui recibe los mensajes</Text>
                <View>
                    {list}
                </View>
                {/*comentario*/}
                <Text>aqui envia los mensajes</Text>
                <TextInput style = {styles.input}
                    placeholder = 'Mensaje'
                    onChangeText = {(text) => this.setState({mensaje: text})}
                    value = {this.state.mensaje}
                />

                <TouchableOpacity style = {styles.button}
                            onPress ={() => this.insert()  }>
                            <Text style = {styles.buttonText} >ENVIAR</Text>
                </TouchableOpacity>
                
            </View>
            </ScrollView>
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
  

  const styles = StyleSheet.create({
    container:{
        flex: 1,

    },

    lista:{

    },

    input:{
        margin:15,
        marginLeft: 40,
        borderBottomWidth: 3,
        borderBottomColor: 'green',
        width: 290,
    },

    button:{
        flex: 3,
        marginRight: 100,
        marginLeft: 100,
        alignItems: 'center',
        borderColor: '#08ECD7',
        borderBottomWidth: 5,
        borderTopWidth: 5,
        backgroundColor: '#08ECD7',
    },

    buttonText:{
        color: '#000000',
        fontSize: 24,
    },
});
