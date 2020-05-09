// Author: Lauren Lofton
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/colors'

function RoundCount(props) {
    return (
        <View style={styles.roundCount}>
            <View style={styles.count}>
                <View style={styles.menu} />
                <View style={styles.menu}>
                    <Text style={{  paddingTop: 23,  fontSize: 20, fontWeight: '200', color: 'black' }}>Round: {props.totalRound} </Text>
                    <Text style={{ fontSize: 18, fontWeight: '200', color: 'green' }}>Player Wins: {props.winRound} </Text>
                    <Text style={{ fontSize: 18, fontWeight: '200', color: Colors.lose }}>Opponent Wins: {props.loseRound}</Text>
                    <Text style={{ fontSize: 18, fontWeight: '200', color: Colors.primary }}>Tied Games: {props.tieRound} </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    roundCount: {
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
        paddingLeft: 25,
        paddingTop: 45,
    },
});

export default RoundCount;