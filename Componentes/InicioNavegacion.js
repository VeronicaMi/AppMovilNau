import React, { Component } from 'react';
import {
    StyleSheet, Text, View, TextInput,
    TouchableOpacity, Button, Alert,
    Picker, AsyncStorage, ScrollView,
    CheckBox
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Slider from './Slider.js';
import RegistroUsuario from './RegistroUsuario.js';
import DrawerNav from '../Navegadores/DrawerNav.js';
import TerminosCondiciones from '../Navegadores/Navegacion/TerminosCondiciones.js';
import AvisoPrivacidad from '../Navegadores/Navegacion/AvisoPrivacidad.js';

const InicioNavegacion = createStackNavigator({
    Slider: Slider,
    RegistroUsuario: RegistroUsuario,
    TerminosCondiciones: TerminosCondiciones,
    AvisoPrivacidad: AvisoPrivacidad,
    DrawerNav: DrawerNav,
});

const InicioNav = createAppContainer(InicioNavegacion);

export default InicioNav;
