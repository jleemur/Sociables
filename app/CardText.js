import React from 'react';
import { Text, View } from 'react-native';
import Styles from './Styles'
const Realm = require('realm');

// class Settings {}
// Settings.schema = {
//     name: 'Settings',
//     properties: {
//       rule_visible: 'bool'
//     }
// };
// const realm = new Realm({schema: [Settings]});
//
// // Write
// realm.write(() => {
//     savedSetting = realm.create('Settings', {
//       rule_visible: true
//     });
// });

var CardText = React.createClass({
  getCardText: function(random) {
    texts = ['Give 1', 'Give 2', 'Thumb Card', 'Rule Card', 'Never Have I Ever', 'Waterfall',
              'Sevens', 'Question Master', 'Rhyme Time', 'Categories', 'Sociables', 'Ladies Drink', 'Men Drink']

    return texts[random%13]
  },

  render: function() {
    text = this.getCardText(this.props.random)
    return (
      <View>
        <Text style={Styles.cardText}>{text}</Text>
      </View>
    )
  }
})

module.exports = CardText
