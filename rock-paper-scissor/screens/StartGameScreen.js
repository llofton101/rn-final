// Author: Lauren Lofton
import React, {useState} from 'react';
import { View, Text, Button, StyleSheet, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';

import Card from '../components/Card';


const StartGameScreen = props => {

    const [selectedNumber, setSelectedNumber] = useState((Math.floor(Math.random() * 100) + 1))

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
        <View style={styles.screen}>
            <Card style={styles.container}>
            <Text style={styles.title}>Start a New Game!</Text>
                <View style={styles.buttonContainer}>
                    <View><Button style={styles.button} title="START" onPress={() => props.onStartGame(selectedNumber)} /></View>
                </View>
            </Card>
          
        </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    
    },
    title: {
        marginVertical: 10,
    },
    container: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%',
        marginBottom: 30,
        borderRadius: 25,
    },
    button: {
        width: 100,
        paddingVertical: 20,
        borderRadius: 25,
    },
})

export default StartGameScreen;