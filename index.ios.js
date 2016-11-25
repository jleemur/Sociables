/**
 * Sociables
 * Author: Jonathan Murray
 **/
import React from 'react';
import { AppRegistry, Image } from 'react-native';
import Styles from './app/Styles';
import Card from './app/Card';

var Sociables = React.createClass({
  render: function() {
    return (
      <Image source={require('./images/bg_blue.png')} style={Styles.container}>
        <Card/>
      </Image>
    );
  }
});

// App registration and rendering
AppRegistry.registerComponent('Sociables', () => Sociables);