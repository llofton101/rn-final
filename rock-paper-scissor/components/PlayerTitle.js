// Author: Lauren Lofton
import React from 'react';
import { StyleSheet, Text } from 'react-native';

const PlayerTitle = (props) => {
    return (    
            <Text style={styles.playerName}>{props.playerName}</Text>
    );
}

const styles = StyleSheet.create({
  
    playerName:{
        fontSize:30,
        fontWeight:'300',
        textAlign: 'center',
        color: 'black',
        textShadowOffset: .5,
        textShadowOffset: {width: 1, height: 1},
        textShadowColor: 'black',
        textShadowRadius: 1,
    
    }
});

export default PlayerTitle;