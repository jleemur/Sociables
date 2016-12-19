import React from 'react';
import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'skyblue',

    //this is why the card/text move up and down sometimes
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontFamily: 'Damascus',
    fontSize: 36,
  },
})

module.exports = Styles
