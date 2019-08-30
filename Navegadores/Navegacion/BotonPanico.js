import React, { Component } from 'react';
import {
    StyleSheet, Text, View, TextInput,
    TouchableOpacity, Button, Alert,
    Picker, AsyncStorage, ScrollView,
    CheckBox
} from 'react-native';

export default class BotonPanico extends Component{
    state = {MedicalEmer: '' }
    updateMedicalEmer = (MedicalEmer) => {
        this.setState({MedicalEmer: MedicalEmer})
    }

    state = {PolicialEmer: '' }
    updatePolicialEmer = (PolicialEmer) => {
        this.setState({PolicialEmer: PolicialEmer})
    }

    state = {ProtecCivilEmer: '' }
    updateProtecCivilEmer = (ProtecCivilEmer) => {
        this.setState({ProtecCivilEmer: ProtecCivilEmer})
    }

    render(){
        return(
            <View style = {styles.container}>
                 <Text style = {styles.label}> Emergencia Medica </Text>

                    <Picker 
                            style = {styles.compañia}
                            selectedValue = {this.state.MedicalEmer} onValueChange = {this.updateMedicalEmer}>
                            <Picker.Item label = 'Paro Cardiaco' value = 'paro cardiaco'/>
                            <Picker.Item label = 'Desmayo' value = 'desmayo'/>
                            <Picker.Item label = 'Convulsiones' value = 'convulsiones'/>
                            <Picker.Item label = 'Ser Carlos' value = 'ser carlos'/>
                    </Picker>

                    <Text style = {styles.label}> Emergencia Policial </Text>

                    <Picker 
                            style = {styles.compañia}
                            selectedValue = {this.state.PolicialEmer} onValueChange = {this.updatePolicialEmer}>
                            <Picker.Item label = 'Robo' value = 'robo'/>
                            <Picker.Item label = 'Secuestro' value = 'secuestro'/>
                            <Picker.Item label = 'Accidente transito' value = 'accidente transito'/>
                            <Picker.Item label = 'Violencia fisica' value = 'violencia fisica'/>
                    </Picker>

                    <Text style = {styles.label}> Emergencia Protección Civil </Text>

                    <Picker 
                            style = {styles.compañia}
                            selectedValue = {this.state.ProtecCivilEmer} onValueChange = {this.updateProtecCivilEmer}>
                            <Picker.Item label = 'Incendio' value = 'incendio'/>
                            <Picker.Item label = 'Terremoto' value = 'terremoto'/>
                            <Picker.Item label = 'Tormenta' value = 'Tormenta'/>
                            <Picker.Item label = 'Inundacion' value = 'inundacion'/>
                    </Picker>

                    <View style = {styles.button}>
                        <TouchableOpacity style = {styles.buttonStyle}>
                            <Text style = {styles.buttonText}>GUARDAR</Text>
                        </TouchableOpacity>
                    </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        
    },

    compañia:{
        marginLeft: 36,
        fontSize: 18,
        
    },

    label:{
        fontSize: 18,
        paddingLeft: 40,
    },

    button:{
        flex: 1,
        marginTop: 40,
        marginRight: 100,
        marginLeft: 100,
        alignItems: 'center',
        borderColor: '#08ECD7',
        borderBottomWidth: 5,
        borderTopWidth: 5,
        backgroundColor: '#08ECD7',
    },

    buttonStyle:{
        width: '80%',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        
    },

    buttonText:{
        color: '#000000',
        fontSize: 24,
    },
});