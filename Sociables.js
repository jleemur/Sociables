/**
 * Sociables
 * Author: Jonathan Murray
 **/
import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import Styles from './app/Styles';
import CardImage from './app/CardImage';
import CardText from './app/CardText';

var Sociables = React.createClass({

  render: function() {
    random = Math.floor(Math.random() * 52)
    return (
      <View style={Styles.container}>
        <TouchableHighlight onPress={()=>this.forceUpdate()}>
          <View><CardImage random={random}/></View>
        </TouchableHighlight>
        <CardText random={random}/>
      </View>
    );
  }
});

module.exports = Sociables
