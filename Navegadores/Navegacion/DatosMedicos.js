import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
    TextInput
} from 'react-native';
//import Encabezado from '../Secciones/Encabezado.js'

export default class DatosMedicos extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            GrupoSanguineo: '',
            Alergias: '',
            EnfermedadCronica: '',
            Padecimiento: '',
            SuministroMedico: '',
            Peso: '',
            Talla: '',
            DonanteOrganos: '',
        };
    };
    
   
    render(){
        return(
            <ScrollView>
                <View style = {styles.container}>
                    <Text>Hola cara de bola Datos Medicos</Text>
                    
                    <Text style = {styles.titulo}> Datos Medicos </Text>
                    <Text style = {styles.label}> Grupo Sanguineo </Text>
                        <TextInput
                            style = {styles.input}
                            placeholder = 'O +'
                            onChangeText = {(text) => this.setState({GrupoSanguineo: text})}
                            value = {this.state.GrupoSanguineo}
                        />

                    <Text style = {styles.label}> Alergias </Text>
                        <TextInput
                            style = {styles.input}
                            placeholder = 'Penicilina'
                            onChangeText = {(text) => this.setState({Alergias: text})}
                            value = {this.state.Alergias}
                        />

                    <Text style = {styles.label}> Enfermedad Cronica </Text>
                        <TextInput
                            style = {styles.input}
                            placeholder = 'Diabetes'
                            onChangeText = {(text) => this.setState({EnfermedadCronica: text})}
                            value = {this.state.EnfermedadCronica}
                        />

                    <Text style = {styles.label}> Padecimientos </Text>
                        <TextInput
                            style = {styles.input}
                            placeholder = 'No se'
                            onChangeText = {(text) => this.setState({Padecimiento: text})}
                            value = {this.state.Padecimiento}
                        />

                    <Text style = {styles.label}> Suministro de Medicamentos </Text>
                        <TextInput
                            style = {styles.input}
                            placeholder = 'Niinguno'
                            onChangeText = {(text) => this.setState({SuministroMedico: text})}
                            value = {this.state.SuministroMedico}
                        />

                    <Text style = {styles.label}> Peso </Text>
                        <TextInput
                            style = {styles.input}
                            placeholder = '50' 
                            keyboardType = 'numeric'
                            onChangeText = {(text) => this.setState({Peso: text})}
                            value = {this.state.Peso}
                        />

                    <Text style = {styles.label}> Talla </Text>
                        <TextInput
                            style = {styles.input}
                            placeholder = '150'
                            keyboardType = 'numeric'
                            onChangeText = {(text) => this.setState({Talla: text})}
                            value = {this.state.Talla}
                        />

                    <Text style = {styles.label}> Donante de Organos </Text>
                        <TextInput
                            style = {styles.input}
                            placeholder = 'Si'
                            onChangeText = {(text) => this.setState({DonanteOrganos: text})}
                            value = {this.state.DonanteOrganos}
                        />

                    <View style = {styles.button}>
                        <TouchableOpacity style = {styles.buttonStyle} 
                            onPress={() => alert('Hola')}>
                            <Text style = {styles.buttonText}>GUARDAR</Text>
                        </TouchableOpacity>
                    </View>
                    

                </View>
            </ScrollView>
        );
    }
};

const styles = StyleSheet.create({
    container:{
        flex: 1,

    },

    titulo:{
        fontSize: 28,
        justifyContent: 'center',
        paddingLeft: 30,
        margin: 5,
    },

    label:{
        fontSize: 18,
        paddingLeft: 40,
    },

    input:{
        margin:15,
        marginLeft: 40,
        borderBottomWidth: 3,
        borderBottomColor: 'green',
        width: 290,
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