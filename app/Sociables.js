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
      modalVisible: false
    };
  },

  setModalVisible: function(visible) {
    this.setState({modalVisible: visible});
  },

  render: function() {
    settingsModal = ( <Modal visible={this.state.modalVisible}>
                        <TouchableHighlight onPress={()=>this.setModalVisible(!this.state.modalVisible)}>
                          <Text style={Styles.backButton}><Emoji name="back"/></Text>
                        </TouchableHighlight>
                        <Settings/>
                      </Modal>
                    )
    //every render causes card to change...
    random = Math.floor(Math.random() * 52)
    return (
      <View style={Styles.container}>
        {settingsModal}
        <TouchableHighlight onPress={()=>this.forceUpdate()}>
          <View><CardImage random={random}/></View>
        </TouchableHighlight>
        <CardText random={random}/>
        <TouchableHighlight onPress={()=>this.setModalVisible(!this.state.modalVisible)}>
          <Text style={Styles.emoji}><Emoji name="gear"/></Text>
        </TouchableHighlight>
      </View>
    );
  }
});

module.exports = Sociables
