import React from 'react';
import {
    StyleSheet,
} from 'react-native';

import AppIntroSlider from 'react-native-app-intro-slider';
//npm i react-native-app-intro-slider --save
//import { View } from 'react-native-animatable';
import DrawerNav from '../Navegadores/DrawerNav.js';

export default class Portada extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          showRealApp: false,
          //To show the main page of the app
        };
      }

      _onDone = () => {
        // After user finished the intro slides. Show real app through
        // navigation or simply by controlling state
        this.setState({ showRealApp: true });
      };
      _onSkip = () => {
        // After user skip the intro slides. Show real app through
        // navigation or simply by controlling state
        this.setState({ showRealApp: true });

      };
    render(){
        //const { navigate } = this.props.navigation;
         //If false show the Intro Slides
            if (this.state.showRealApp) {
            //Real Application
        return(
          <DrawerNav/>
      );
    }
    else {
        //Intro slides
        return (
          <AppIntroSlider
            slides={slides}
            //comming from the JsonArray below
            onDone={this._onDone}
            //Handler for the done On last slide
            showSkipButton={true}
            onSkip={this._onSkip}
          />
        );
      }
    }
};

const styles = StyleSheet.create({
    image: {
      width: 200,
      height: 200,
    },
    text: {
      color: '#FFFFFF',
      fontSize: 20,
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: 'white',
      backgroundColor: 'transparent',
      textAlign: 'center',
      marginTop: 16,
    },
  });
   
  const slides = [
    {
      key: 's1',
      text: 'Best Recharge offers',
      title: 'Mobile Recharge',
      titleStyle: styles.title,
      textStyle: styles.text,
      image: {
        uri:
          'https://aboutreact.com/wp-content/uploads/2018/08/mobile_recharge.png',
      },
      imageStyle: styles.image,
      backgroundColor: '#20d2bb',
    },
    {
      key: 's2',
      title: 'Flight Booking',
      titleStyle: styles.title,
      text: 'Upto 25% off on Domestic Flights',
      image: {
        uri:
          'https://aboutreact.com/wp-content/uploads/2018/08/flight_ticket_booking.png',
      },
      imageStyle: styles.image,
      backgroundColor: '#febe29',
    },
    {
      key: 's3',
      title: 'Great Offers',
      titleStyle: styles.title,
      text: 'Enjoy Great offers on our all services',
      image: {
        uri: 'https://aboutreact.com/wp-content/uploads/2018/08/discount1.png',
      },
      imageStyle: styles.image,
      backgroundColor: '#22bcb5',
    },
    {
      key: 's4',
      title: 'Best Deals',
      titleStyle: styles.title,
      text: ' Best Deals on all our services',
      image: {
        uri: 'https://aboutreact.com/wp-content/uploads/2018/08/best_deals1.png',
      },
      imageStyle: styles.image,
      backgroundColor: '#3395ff',
    },
    {
      key: 's5',
      title: 'Bus Booking',
      titleStyle: styles.title,
      text: 'Enjoy Travelling on Bus with flat 100% off',
      image: {
        uri:
          'https://aboutreact.com/wp-content/uploads/2018/08/bus_ticket_booking.png',
      },
      imageStyle: styles.image,
      backgroundColor: '#f6437b',
    },
    {
      key: 's6',
      title: 'Train Booking',
      titleStyle: styles.title,
      text: ' 10% off on first Train booking',
      image: {
        uri:
          'https://aboutreact.com/wp-content/uploads/2018/08/train_ticket_booking.png',
      },
      imageStyle: styles.image,
      backgroundColor: '#febe29',
    },
  ];