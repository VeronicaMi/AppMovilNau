import React, { Component } from 'react';
import {
    StyleSheet, Text, View, TextInput,
    TouchableOpacity, Button, Alert,
    Picker, AsyncStorage, ScrollView,
    CheckBox
} from 'react-native';
//expo install react-native-maps
import MapView, { Marker } from 'react-native-maps';
//expo install expo-location
import * as Location from 'expo-location';
//expo install expo-permissions
import * as Permissions from 'expo-permissions';
//expo install expo-constants
//import {Constants, MapView, Location, Permissions} from 'expo';

export default class Home extends Component{
    state = {
        locationResult: '',
        hasLocationPermissions: false,
        marker: {coords: { latitude: 37.78825, longitude: -122.4324}},
    }

    componentDidMount() {
        this._getLocationAsync();
      }

    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
          this.setState({
            locationResult: 'Permission to access location was denied',
          });
        } else {
          this.setState({ hasLocationPermissions: true });
        }
        
        let location = await Location.getCurrentPositionAsync({});
        this.setState({ locationResult: JSON.stringify(location) });
   
   // Center the map on the location we just fetched.
    this.setState({
        mapRegion: { latitude: location.coords.latitude, 
                    longitude: location.coords.longitude, 
                    latitudeDelta: 0.0022, longitudeDelta: 0.0041 },
        marker: location
    });
  };

    render(){
        return(
          
            
          <Text > aqui debe ir mapa </Text>   
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },

    texto:{
        flex: 1,
        fontSize: 30,
    },

});

/*
            <MapView style={{ alignSelf: 'stretch', height: 400 }}
            region={this.state.mapRegion}
            onRegionChange={this._handleMapRegionChange}>
                <MapView.Marker
                coordinate={this.state.marker.coords}
                title="My Marker"
                description="Some description"
                />
          </MapView>*/