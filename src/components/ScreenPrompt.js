import React, { Component } from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import BetterButton from './BetterButton';
import styles from '../Styles/Styles';

// Component to create game text screens.
// Valid props include:
//    title -- Text screen title
//    subTitle -- Text screen subtitle
//    buttonText -- Text to be displayed in button
//    next -- Next screen
//    onButtonPress -- Function to run when button is pressed
export default class ScreenPrompt extends Component {
  render() {
    return (
      <ImageBackground 
      style={{width: 'auto', height: '100%'}}
      source={{ uri: '/Users/nino/Documents/Homework/SP18/CS3200_Mobile-App-Dev/Mystery/src/Images/startScreenBG.png'}}>
        <Text style={styles.Title}>
          {"Pokemon Dance"}
        </Text>
        <Text style={styles.SubTitle}>
          {"Press start to begin"}
        </Text>
        <BetterButton
          message={"Start!"}
          value={this.props.next}
          onPressed={this.props.onButtonPress}
        />
      </ImageBackground>
    );
  }
}