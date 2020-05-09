// Author: Lauren Lofton
import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import MainButton from '../components/MainButton';
import RoundPercent from '../components/RoundPercent';

const GameHistoryScreen = (props) => {

    return (
        <View style={styles.screen}>
         
            <View style={styles.percentages}>
                <RoundPercent   
                 winRound={props.winPercent}
                 loseRound={props.losePercent}
                 tiedRound={props.tiedPercent}
                 totalRound={props.guessRounds}
                /> 
            </View>
            <View style={styles.listContainer}>
                <FlatList 
                        keyExtractor={(item, index) => String(index)}
                        data={props.logRound} 
                        renderItem={props.renderListItem.bind(this, props.logRound.length)}
                        contentContainerStyle={styles.list}
                    />
            </View>
            <View  style={styles.buttonContainer}>
                <MainButton style={styles.button} onPress={() => props.goBack()}>Go Back</MainButton>
            </View>
           
        </View>
    )
 };
    
    const styles = StyleSheet.create({
        screen: {
            flex: 1,
            padding: 10,
            alignItems: 'center',
            flexDirection: 'column',
        },
        percentages: {
            flex: 1,
            textAlign: 'center',
            alignItems: 'center',
            alignSelf:'center',
            alignContent: 'center',
            justifyContent: 'center'
        },
        buttonContainer: {
            flex: 1,
            marginVertical: 50,
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            textAlign: 'center',
        },
        button: {
            flex: 1,
        },
        listContainer: {
            marginTop: 100,
            height: '50%',
            width: '70%',
        },
        list: {
            flexDirection: 'column',
            alignItems: 'center',
        },
    });
    
export default GameHistoryScreen;