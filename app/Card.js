import React from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native';
import Styles from './Styles'

var Card = React.createClass({
  getInitialState() {
    return {
      cardsLeft: 52
    }
  },

  handleClick: function() {
    this.forceUpdate()
  },

  getCard: function(random) {
    //array of card images
    randomCardImage = [require('../images/AC.png'), require('../images/2C.png'), require('../images/3C.png'), require('../images/4C.png'),
                       require('../images/5C.png'), require('../images/6C.png'), require('../images/7C.png'), require('../images/8C.png'),
                       require('../images/9C.png'), require('../images/TC.png'), require('../images/JC.png'), require('../images/QC.png'),
                       require('../images/KC.png'),
                       require('../images/AD.png'), require('../images/2D.png'), require('../images/3D.png'), require('../images/4D.png'),
                       require('../images/5D.png'), require('../images/6D.png'), require('../images/7D.png'), require('../images/8D.png'),
                       require('../images/9D.png'), require('../images/TD.png'), require('../images/JD.png'), require('../images/QD.png'),
                       require('../images/KD.png'),
                       require('../images/AH.png'), require('../images/2H.png'), require('../images/3H.png'), require('../images/4H.png'),
                       require('../images/5H.png'), require('../images/6H.png'), require('../images/7H.png'), require('../images/8H.png'),
                       require('../images/9H.png'), require('../images/TH.png'), require('../images/JH.png'), require('../images/QH.png'),
                       require('../images/KH.png'),
                       require('../images/AS.png'), require('../images/2S.png'), require('../images/3S.png'), require('../images/4S.png'),
                       require('../images/5S.png'), require('../images/6S.png'), require('../images/7S.png'), require('../images/8S.png'),
                       require('../images/9S.png'), require('../images/TS.png'), require('../images/JS.png'), require('../images/QS.png'),
                       require('../images/KS.png')]

    // incase I need to know the value (update both arrays simultaneously)
    randomCard = ['AC', '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', 'TC', 'JC', 'QC', 'KC',
                  'AD', '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', 'TD', 'JD', 'QD', 'KD',
                  'AH', '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', 'TH', 'JH', 'QH', 'KH',
                  'AS', '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', 'TS', 'JS', 'QS', 'KS']


    return randomCardImage[random]
  },

  getText: function(random) {
    texts = ['Give 1', 'Give 2', 'Thumb Card', 'Rule Card', 'Never Have I Ever', 'Waterfall',
              'Sevens', 'Question Master', 'Rhyme Time', 'Categories', 'Sociables', 'Ladies Drink', 'Men Drink']

    return texts[random%13]
  },

  render: function() {
    random = Math.floor(Math.random() * this.state.cardsLeft) //generate random number (0-51)
    card = this.getCard(random)
    text = this.getText(random)
    return (
      <View>
        <TouchableHighlight onPress = {()=>this.handleClick()} >
          <Image source={card}/>
        </TouchableHighlight>
        <Text style={Styles.text}>{text}</Text>
      </View>
    )
  }
})

module.exports = Card