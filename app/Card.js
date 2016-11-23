import React from 'react'
import { Text, View, Image, TouchableHighlight } from 'react-native'

var Button = require('react-native-button')
var Card = React.createClass({
  handleClick: function() {
    this.forceUpdate()
  },

  getCard: function(random) {
    //array of card images
    randomCardImage = [require('../card_images/AC.png'), require('../card_images/2C.png'), require('../card_images/3C.png'), require('../card_images/4C.png'),
                       require('../card_images/5C.png'), require('../card_images/6C.png'), require('../card_images/7C.png'), require('../card_images/8C.png'),
                       require('../card_images/9C.png'), require('../card_images/TC.png'), require('../card_images/JC.png'), require('../card_images/QC.png'),
                       require('../card_images/KC.png'),
                       require('../card_images/AD.png'), require('../card_images/2D.png'), require('../card_images/3D.png'), require('../card_images/4D.png'),
                       require('../card_images/5D.png'), require('../card_images/6D.png'), require('../card_images/7D.png'), require('../card_images/8D.png'),
                       require('../card_images/9D.png'), require('../card_images/TD.png'), require('../card_images/JD.png'), require('../card_images/QD.png'),
                       require('../card_images/KD.png'),
                       require('../card_images/AH.png'), require('../card_images/2H.png'), require('../card_images/3H.png'), require('../card_images/4H.png'),
                       require('../card_images/5H.png'), require('../card_images/6H.png'), require('../card_images/7H.png'), require('../card_images/8H.png'),
                       require('../card_images/9H.png'), require('../card_images/TH.png'), require('../card_images/JH.png'), require('../card_images/QH.png'),
                       require('../card_images/KH.png'),
                       require('../card_images/AS.png'), require('../card_images/2S.png'), require('../card_images/3S.png'), require('../card_images/4S.png'),
                       require('../card_images/5S.png'), require('../card_images/6S.png'), require('../card_images/7S.png'), require('../card_images/8S.png'),
                       require('../card_images/9S.png'), require('../card_images/TS.png'), require('../card_images/JS.png'), require('../card_images/QS.png'),
                       require('../card_images/KS.png')]

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
    random = Math.floor(Math.random() * 52) //generate random number (0-51)
    card = this.getCard(random)
    text = this.getText(random)
    return (
      <View>
        <TouchableHighlight onPress = {()=>this.handleClick()} >
          <Image source={card}/>
        </TouchableHighlight>
        <Text>{text}</Text>
      </View>
    )
  }
})

module.exports = Card