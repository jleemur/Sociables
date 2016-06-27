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
    suit = this.getSuit();
    rank = this.getRank();

    return rank+suit;
  },

  getRank: function() {
    rankNum = Math.floor((Math.random() * 13) + 1); //1=A, ..., 13=K


  render: function() {
    var randomCard = this.generateRandomCard();
    var card = require();
    return (
      <View>
        <Text>{this.generateRandomCard()}</Text>
        <Image source={{ uri: './card_images/' + randomCard + '.png'}}/>
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
