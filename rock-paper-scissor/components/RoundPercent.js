// Author: Lauren Lofton
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/colors'

function RoundPercent(props) {
    return (
        <View style={styles.roundPercent}>
            <View style={styles.count}>
                <View style={styles.menu}>
                    <Text style={{ fontSize: 20, fontWeight: '200', color: 'black' }}>Out of {props.totalRound} Rounds</Text>
                    <Text style={{ fontSize: 18, fontWeight: '200', color: 'green' }}>Won: {props.winRound}% </Text>
                    <Text style={{ fontSize: 18, fontWeight: '200', color: Colors.lose }}>Lost: {props.loseRound}%</Text>
                    <Text style={{ fontSize: 18, fontWeight: '200', color: Colors.primary }}>Tied: {props.tiedRound}% </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    roundPercent: {
        flex: 1,
        flexDirection: 'column',
        textAlign: 'center',
        alignContent:'center',
        alignItems: 'center',
    },
    count: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    menu: {
        alignItems: 'center',
        marginTop: 25,
    },
});

export default RoundPercent;