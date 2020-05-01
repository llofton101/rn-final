import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

function GameStatus(props) {
    if (props.gamePrompt == 'You Won!') {
        return <Text style={styles.textWin}>{props.gamePrompt}</Text>;
    }
    else if (props.gamePrompt == 'You Lost!') {
        return <Text style={styles.textLose}>{props.gamePrompt}</Text>;
    }
    else {
        return <Text style={styles.textTie}>{props.gamePrompt}</Text>;
    }
}

const styles = StyleSheet.create({
    textWin: {
        fontSize: 40,
        fontWeight: '300',
        color: '#2bff47',
        textShadowOffset: {width: 1, height: 1},
        textShadowColor: 'black',
        textShadowRadius: 1,
        
    },
    textLose: {
        fontSize: 40,
        fontWeight: '300',
        color: '#b80000',
        textShadowOffset: {width: 1, height: 1},
        textShadowColor: 'black',
        textShadowRadius: 1,
    },
    textTie: {
        fontSize: 40,
        fontWeight: '300',
        color: '#0000db',
        textShadowOffset: {width: 1, height: 1},
        textShadowColor: 'black',
        textShadowRadius: 1,
    },
});


export default GameStatus;