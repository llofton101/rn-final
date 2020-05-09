// Author: Lauren Lofton
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const ChoiceCard = ({ choice: { uri }}) => {
    return (
      <View style={styles.choiceContainer}>
        <Image
          source={{ uri }}
          resizeMode="contain"
          style={styles.choiceImage} 
        />
      </View>
    );
  };

const styles = StyleSheet.create({
    choiceContainer: { 
        flex: 1,
        flexDirection: 'column',
        justifyContent: "space-around",
        alignItems: "center",
      },
      choiceImage: { 
        width: 80,
        height: 80,
        padding: 10,
      }
    });
    export default ChoiceCard;