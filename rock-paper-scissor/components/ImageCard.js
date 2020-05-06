// Author: Lauren Lofton
import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';

const ImageCard = props => {

  return <View style={{ ...styles.card, ...props.style}}>
      <ImageBackground source={require('../assets/bg1.png')} style={{width: 330, height: 330, resizeMode: 'contain'}}>
      <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
      </ImageBackground>
  </View>
};

const styles = StyleSheet.create ({
    card: {
        
        marginHorizontal: 10,
        padding: 15,
        alignItems: 'center',
    },
    imageLog: {
        marginTop: 70,
        alignItems: 'center',
    }
});

export default ImageCard;