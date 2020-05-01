import React from 'react';
import { StyleSheet, Text, View,Button, ImageBackground } from 'react-native';

function RoundCount(props) {
    return (
        <View style={styles.RoundCount}>
  
            <View style={styles.count}>
            <View style={styles.menu}>
            <ImageBackground style={styles.imageFrame} source={require('../assets/sign.png')}>
            <Text style={{ paddingTop: 20,  fontSize: 20, fontWeight: '200', color: 'black' }}>Round Number: {props.totalRound} </Text>
                <Text style={{ fontSize: 20, fontWeight: '200', color: '#2bff47' }}>  Player Wins: {props.winRound} </Text>
                <Text style={{ fontSize: 20, fontWeight: '200', color: '#b00000' }}>  Opponent Wins: {props.loseRound}</Text>
                <Text style={{ fontSize: 20, fontWeight: '200', color: '#0000db' }}>  Tied Games: {props.tieRound} </Text>
            </ImageBackground>
            </View>
            <View style={styles.menu}>
            <ImageBackground style={styles.imageFrame} source={require('../assets/frame.png')}>
            <Text style={{ paddingTop: 40,  fontSize: 20, fontWeight: '200', color: 'black' }}>History </Text>
            <Button style={styles.button} title="NEW GAME" onPress={props.onRestart}>NEW GAME</Button>
            </ImageBackground>
            </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    RoundCount: {
        flex: 1,
        flexDirection: 'column',
       
        textAlign: 'center',
        alignContent:'center',
        alignItems: 'center',
     
       
    },
    count: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    menu: {
        flex: 2,
  
       
 
    },

    imageFrame: {
        flex: 1,
        width: '100%',
        height: 150,
        resizeMode: 'contain',
        alignItems: 'center',
        
   
      
    },

});


export default RoundCount;