import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';

export default class OpcionEmergencia extends Component{

   
    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.contIcon}>
                    <TouchableOpacity onPress = {() => alert('Llamada al 911')}>
                        <Image
                            style = {styles.imagePhone}
                            source = {require('../ImageNav/call.png')}
            
                        />
                        <Text style = {styles.textPhone}>Llamar al 911</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress = {() => alert('Activaste el chat')}>
                        <Image
                            style = {styles.imageChat}
                            source = {require('../ImageNav/chat.png')}
                            
                        />
                        <Text style = {styles.textChat}>Chatear C4</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
};

const styles = StyleSheet.create({
    container:{
        flex: 1,

    },

    contIcon:{
        flexDirection: 'row',
    },

    imagePhone:{
        marginTop: 80,
        margin: 50,
        height: 100,
        width: 100,
    },

    textPhone:{
        marginLeft: 40,
        marginTop: -40,
        fontSize: 20,
    },

    imageChat:{
        marginTop: 80,
        margin: 50,
        height: 100,
        width: 100,
    },

    textChat:{
        marginLeft: 40,
        marginTop: -40,
        fontSize: 20,
    }
});