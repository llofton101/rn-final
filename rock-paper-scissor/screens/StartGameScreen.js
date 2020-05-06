// Author: Lauren Lofton
import React, {useState} from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

import ImageCard from '../components/ImageCard';
import Card from '../components/Card'
import Header from '../components/Header'


const StartGameScreen = props => {

    const [selectedNumber, setSelectedNumber] = useState((Math.floor(Math.random() * 100) + 1))

    return (
        <View style={styles.screen}>
         <Header title='Crowd - Paper - Virus'/>
         <ImageBackground source={require('../assets/startBG.png')} style={styles.backgroundImage}>
            <Card style={styles.card}>
                <View style={styles.intro}>
                <Text style={styles.introText}>A PANDEMIC themed game of</Text>
                <Text style={styles.introText}>Rock - Paper - Scissors</Text>
                </View>
            </Card>
            
            <ImageCard>
            <TouchableOpacity>
                <View style={styles.container}>
                  
                    <View style={styles.buttonContainer}>
                        <Button style={styles.button} color={'maroon'} title="Press to Start" onPress={() => props.onStartGame(selectedNumber)}  />
                    </View>
                </View>
                </TouchableOpacity>
            </ImageCard>
           
                <View style={styles.instructions}>
                <Card style={styles.card}>
                    <Text style={styles.introText}>Instructions:</Text> 
                    <Text style={styles.introText}>Crowd trumps Paper,</Text>
                    <Text style={styles.introText}>Paper trumps Virus,</Text>
                    <Text style={styles.introText}>Virus trumps Crowd</Text>
                    </Card>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
    },
    introText: {
        
        fontSize: 20,
        textAlign: 'center'
    },
    container: {
        alignItems: 'center',
        marginVertical: '40%',
    },
    title: {
        fontSize: 30,
        color: 'black',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%',
        marginBottom: 0,
        borderRadius: 25,
    },
    button: {
        width: 100,
        paddingVertical: 20,
        borderRadius: 25,
    },
    card: {
        backgroundColor: 'rgba(251, 120, 120, 0.9)',
        marginTop: 20,
        width: '70%',
        padding: 10,
       alignSelf: 'center'
    },
    instructions: {
        marginTop: -30,
    },
    backgroundImage: {
        width: 500,
        backgroundColor: 'rgba(47, 215, 248, 0.6))',
        resizeMode: 'contain',
        height: '100%',
    }
})

export default StartGameScreen;