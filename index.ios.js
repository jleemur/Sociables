/**
 * Sociables
 * Author: Jonathan Murray
 **/

import React from 'react';
import {AppRegistry, StyleSheet, Text, View, Image} from 'react-native';

// Main class
var Sociables = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Sociables
        </Text>
        <Card/>
      </View>
    );
  }
});

// Card class - randomly generate and show a card
var Card = React.createClass({
  
  generateRandomCard: function() {
    randomCardIndex = Math.floor(Math.random() * 52); //generate random card number (0-51)

    //array of card images
    this.cardImages = [require('./card_images/AC.png'), require('./card_images/AD.png'), require('./card_images/AH.png'), require('./card_images/AS.png'),
                       require('./card_images/2C.png'), require('./card_images/2D.png'), require('./card_images/2H.png'), require('./card_images/2S.png'),
                       require('./card_images/3C.png'), require('./card_images/3D.png'), require('./card_images/3H.png'), require('./card_images/3S.png'),
                       require('./card_images/4C.png'), require('./card_images/4D.png'), require('./card_images/4H.png'), require('./card_images/4S.png'),
                       require('./card_images/5C.png'), require('./card_images/5D.png'), require('./card_images/5H.png'), require('./card_images/5S.png'),
                       require('./card_images/6C.png'), require('./card_images/6D.png'), require('./card_images/6H.png'), require('./card_images/6S.png'),
                       require('./card_images/7C.png'), require('./card_images/7D.png'), require('./card_images/7H.png'), require('./card_images/7S.png'),
                       require('./card_images/8C.png'), require('./card_images/8D.png'), require('./card_images/8H.png'), require('./card_images/8S.png'),
                       require('./card_images/9C.png'), require('./card_images/9D.png'), require('./card_images/9H.png'), require('./card_images/9S.png'),
                       require('./card_images/TC.png'), require('./card_images/TD.png'), require('./card_images/TH.png'), require('./card_images/TS.png'),
                       require('./card_images/JC.png'), require('./card_images/JD.png'), require('./card_images/JH.png'), require('./card_images/JS.png'),
                       require('./card_images/QC.png'), require('./card_images/QD.png'), require('./card_images/QH.png'), require('./card_images/QS.png'),
                       require('./card_images/KC.png'), require('./card_images/KD.png'), require('./card_images/KH.png'), require('./card_images/KS.png')]

    return this.cardImages[randomCardIndex];
  },

  render: function() {
    var randomCard = this.generateRandomCard();
    return (
      <View>
        <Image source={randomCard}/>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

// App registration and rendering
AppRegistry.registerComponent('Sociables', () => Sociables);
