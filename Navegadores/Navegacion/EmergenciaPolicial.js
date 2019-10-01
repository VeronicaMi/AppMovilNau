import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import OpcionEmergencia from './OpcionEmergencia.js'
import {createStackNavigator} from 'react-navigation';
import Chat from './Chat.js';

class EmergenciaPolicialView extends Component{ 
    static navigationOptions = {
        header: null,
    }
      
    render(){
        return(
            <View style = {styles.container}>
                
                <Text>Hola cara de bola Policial</Text>
                <OpcionEmergencia
                onPressChat={() => this.props.navigation.navigate('Chat')}
                onPressCall={()=> alert('Llamada al 911') }/>

            </View>
        );
    }
};

const EmergenciaPolicial = createStackNavigator({
    EmergenciaPolicialView:EmergenciaPolicialView, 
    Chat: Chat,
});

export default EmergenciaPolicial;

const styles = StyleSheet.create({
    container:{
        flex: 1,

    },

});