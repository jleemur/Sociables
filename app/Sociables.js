/**
 * Sociables
 * Author: Jonathan Murray
 **/
import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import Styles from './Styles';
import CardImage from './CardImage';
import CardText from './CardText';

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
