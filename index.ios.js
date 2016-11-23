/**
 * Sociables
 * Author: Jonathan Murray
 **/
import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import Card from './app/Card';

var Sociables = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}></Text>
        <Card/>
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
