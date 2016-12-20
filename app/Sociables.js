/**
 * Sociables
 * Author: Jonathan Murray
 **/
import React from 'react';
import { Modal, View, TouchableHighlight, Button, Text } from 'react-native';
import Styles from './Styles';
import CardImage from './CardImage';
import CardText from './CardText';
import Settings from './Settings';
const Emoji = require('react-native-emoji').default

var Sociables = React.createClass({
  getInitialState() {
    return {
      modalVisible: false,
      ruleVisible: true,
      random: Math.floor(Math.random() * 52)
    };
  },

  getRandomNumber: function() {
    this.setState({random: Math.floor(Math.random() * 52)})
  },

  render: function() {
    settingsModal = (
      <Modal visible={this.state.modalVisible}>
        <Settings closeModal={()=>this.setState({modalVisible:false})}/>
      </Modal>
    )

    //"rule" text below card
    cardText = (this.state.ruleVisible) ? (<CardText random={this.state.random}/>)
                                        : (<Text/>)
    return (
      <View style={Styles.container}>
        {settingsModal}
        <TouchableHighlight onPress={()=>this.getRandomNumber()}>
          <View><CardImage random={this.state.random}/></View>
        </TouchableHighlight>
        {cardText}
        <TouchableHighlight onPress={()=>this.setState({modalVisible:true})}>
          <Text style={Styles.settingsButton}><Emoji name="gear"/></Text>
        </TouchableHighlight>
      </View>
    );
  }
});

module.exports = Sociables
