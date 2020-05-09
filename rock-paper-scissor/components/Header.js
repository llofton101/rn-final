// Author: Lauren Lofton
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Colors from '../constants/colors';


const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: Colors.lose,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 20,
    },
    headerTitle: {
        color: 'white',
        fontSize: 30,
    }
});

export default Header;