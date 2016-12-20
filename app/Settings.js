import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import Styles from './Styles'
const Realm = require('realm');
const Emoji = require('react-native-emoji').default

var Settings = React.createClass({
  render: function() {
    return (
      <View style={Styles.container}>
        <TouchableHighlight onPress={this.props.closeModal}>
          <Text style={Styles.backButton}><Emoji name="back"/></Text>
        </TouchableHighlight>
        <Text>Hello World!</Text>
      </View>
    )
  }
})

module.exports = Settings
