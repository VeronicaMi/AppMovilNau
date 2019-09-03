import React, { Component } from 'react';
import {
    StyleSheet, Text, View, TextInput,
    TouchableOpacity, Button, Alert,
    Picker, AsyncStorage, ScrollView,
    CheckBox
} from 'react-native';
//npm i react-native-check-box --save
//npm install react-native-datepicker --save
import DatePicker from 'react-native-datepicker';
//install npm i react-native-simple-radio-button --save
import RadioForm, { RadioButton } from 'react-native-simple-radio-button';

var Sexo = [
    {label: 'Femenino', value: 0 },
    {label: 'Masculino', value: 1 }
  ];

export default class RegistroUsuario extends Component{
    static navigationOptions = {
        header: null,
    }

    constructor(props){
        super(props);
        this.state = {
            NumeroCelular: '',
            Nombre: '',
            ApellidoPaterno: '',
            ApellidoMaterno: '',
            Email: '',
            ConfirEmail: '',
            FechaNacimiento: new Date(),
            Calle: '',
            NoExterior: '',
            NoInterior: '',
            Colonia: '',
            CodigoPostal: '',
            check: false,
        };
    };

    state = { CompañiaCelular: '' }
    updateCompañia = (CompañiaCelular) => {
        this.setState({CompañiaCelular: CompañiaCelular})
    }

    checkBoxTest(){
        this.setState({
            check: !this.state.check
        })
    }

    render(){
        return(
            <ScrollView>
            <View style = {styles.container}>
                
                <Text style = {styles.heading}> Registro </Text>
                    
                    <Text style = {styles.titulo}> Datos telefónicos </Text>
                    <Text style = {styles.label}> Numero de Celular </Text>
                        <TextInput
                            style = {styles.input}
                            placeholder = '5528980930'
                            keyboardType = 'numeric'
                            onChangeText = {(text) => this.setState({NumeroCelular: text})}
                            value = {this.state.NumeroCelular}
                        />
                    
                    <Picker 
                        style = {styles.compañia}
                        selectedValue = {this.state.CompañiaCelular} onValueChange = {this.updateCompañia}>
                        <Picker.Item label = 'Telcel' value = 'telcel'/>
                        <Picker.Item label = 'Movistar' value = 'movistar'/>
                        <Picker.Item label = 'ATYT' value = 'aTYT'/>
                        <Picker.Item label = 'Unefon' value = 'unefon'/>
                    </Picker>

                    <Text style = {styles.titulo}> Datos personales </Text>
                    <Text style = {styles.label}> Nombre(s)</Text>
                        <TextInput
                            style = {styles.input}
                            placeholder = 'Veronica'
                            onChangeText = {(text) => this.setState({Nombre: text})}
                            value = {this.state.Nombre}
                        />
                    <Text style = {styles.label}> Apellido Paterno</Text>
                        <TextInput
                            style = {styles.input}
                            placeholder = 'Miranda'
                            onChangeText = {(text) => this.setState({ApellidoPaterno: text})}
                            value = {this.state.ApellidoPaterno}
                        />
                    <Text style = {styles.label}> Apellido Materno</Text>
                        <TextInput
                            style = {styles.input}
                            placeholder = 'Ramirez'
                            onChangeText = {(text) => this.setState({ApellidoMaterno: text})}
                            value = {this.state.ApellidoMaterno}
                        />
                    <Text style = {styles.label}> Correo electronico</Text>
                        <TextInput
                            style = {styles.input}
                            placeholder = 'veronica@escom.mx'
                            onChangeText = {(text) => this.setState({Email: text})}
                            value = {this.state.Email}
                        />
                    <Text style = {styles.label}> Confirma tu correo electronico</Text>
                        <TextInput
                            style = {styles.input}
                            placeholder = 'veronica@escom.mx'
                            onChangeText = {(text) => this.setState({ConfirEmail: text})}
                            value = {this.state.ConfirEmail}
                        />
                    
                    <Text style = {styles.label}> Ingresa tu fecha de nacimiento</Text>
                        <DatePicker
                            style={styles.calendario}
                            date={this.state.FechaNacimiento} //initial date from state
                            mode="date" //The enum of date, datetime and time
                            placeholder="Selecciona tu fecha"
                            format="DD-MM-YYYY"
                            minDate="01-01-1900"
                            maxDate="31-12-2021"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                //dateIcon: {
                                //position: 'absolute',
                                //left: 5,
                                //top: 4,
                                //marginLeft: 5
                                //},
                            }}
                            onDateChange={(date) => {this.setState({FechaNacimiento: date})}}
                        />

                    <Text style = {styles.label}> Sexo </Text>
                        <RadioForm
                            style={styles.sexo}
                            radio_props={Sexo}
                            initial={0}
                            formHorizontal={true}
                            labelHorizontal={true}
                            onPress={(value) => {this.setState({value:value})}}
                        />

                    <Text style = {styles.label}> Calle(s)</Text>
                        <TextInput
                            style = {styles.input}
                            placeholder = 'San Pedro'
                            onChangeText = {(text) => this.setState({Calle: text})}
                            value = {this.state.Calle}
                        />

                    <Text style = {styles.label}> No. Exterior</Text>
                        <TextInput
                            style = {styles.input}
                            placeholder = '36'
                            onChangeText = {(text) => this.setState({NoExterior: text})}
                            value = {this.state.NoExterior}
                        />

                    <Text style = {styles.label}> No. Interior</Text>
                        <TextInput
                            style = {styles.input}
                            placeholder = '4-A'
                            onChangeText = {(text) => this.setState({NoInterior: text})}
                            value = {this.state.NoInterior}
                        />

                    <Text style = {styles.label}> Colonia </Text>
                        <TextInput
                            style = {styles.input}
                            placeholder = 'Anzures'
                            onChangeText = {(text) => this.setState({Colonia: text})}
                            value = {this.state.Colonia}
                        />

                    <Text style = {styles.label}> Codigo Postal </Text>
                        <TextInput
                            style = {styles.input}
                            placeholder = '59874'
                            keyboardType = 'numeric'
                            onChangeText = {(text) => this.setState({CodigoPostal: text})}
                            value = {this.state.CodigoPostal}
                        />

                    <CheckBox
                            style = {styles.checkBox}
                            Size = {40}
                            value = {this.state.check}
                            onChange = {() => this.checkBoxTest()}       
                   />

                    <TouchableOpacity 
                            style = {styles.terminos}
                            onPress={() => this.props.navigation.navigate('TerminosCondiciones')}>
                            <Text>Terminos y condiciones</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                            style = {styles.privacidad}
                            onPress={() => this.props.navigation.navigate('AvisoPrivacidad')}>
                            <Text style = {styles.privacidadText}>
                                Aviso de privacidad
                            </Text>
                    </TouchableOpacity>

                    <View style = {styles.button}>
                        <TouchableOpacity style = {styles.buttonStyle} 
                            onPress={() => this.props.navigation.navigate('DrawerNav')}>
                            <Text style = {styles.buttonText}>ENVIAR</Text>
                        </TouchableOpacity>
                    </View>


            </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,

    },

    heading:{
        fontSize: 28,
        justifyContent: 'center',
        paddingTop: 10,
        paddingLeft: 130,
        margin: 5,
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

    buttonContainer: {
        margin: 20,
        paddingLeft:50,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },

    compañia:{
        marginLeft: 36,
        fontSize: 18,
        
    },

    calendario:{
        width: 300,
        marginLeft: 36,
        paddingTop: 20,
        paddingBottom: 20,
    },

    sexo:{
        marginLeft: 10,
        paddingTop: 20,
        paddingBottom: 20,
        justifyContent: 'space-evenly'
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

    checkBox:{
        flex: 1, 
        margin: 30,
        padding: 10
    },

    terminos:{
        margin: 70,
        //No mover marginTop
        marginTop: -57,
    },

    privacidad:{
        margin: 70,
        marginTop: -50,
    },

    privacidadText:{
        textDecorationLine: 'underline'
    }
});
