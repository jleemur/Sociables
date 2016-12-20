import React from 'react';
import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'skyblue',

    //this is why the card/text move up and down sometimes (not happening anymore)
    alignItems: 'center',
    justifyContent: 'center',
  },

  cardText: {
    fontSize: 30,
    fontWeight: 'bold',
  },

  emoji: {
    fontSize: 50,
    alignSelf: 'flex-start',
  },

  backButton: {
    fontSize: 50,
    alignSelf:'flex-start'
  }
})

module.exports = Styles
