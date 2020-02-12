import React, { Component } from 'react';
import {  View, Text, Image, StyleSheet } from 'react-native'

// SVG API
import Image from 'react-native-remote-svg';

export default class App extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <Image 
          style={{ width: 100, height: 100, marginBottom: 15 }}
          source={require('./assets/flower.png')}
        />

        <Image 
          style={{ width: 100, height: 100 }}
          source={{uri: 'https://www.positronx.io/wp-content/uploads/2020/02/react-native-150x150-1.jpg'}}
        />

        <Image 
          style={{ width: 100, height: 100 }}
          source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}}
        />

        <Image
          source={{ uri: 'https://www.positronx.io/wp-content/themes/positronx/img/logo-positronx-white.svg' }}
          style={{ width: 216, height: 34 }}
        />;
      </View>
    );
  }
};

const styles = StyleSheet.create({

    Container: {
      flex: 1,
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: (Platform.OS === 'ios') ? 25 : 0
    }

});