// Author: Lauren Lofton
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/colors';

const SecondaryButton = props => {
    return <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
        <View style={styles.button}>
            <Text style={styles.buttonText}>{props.children}</Text>
        </View>
    </TouchableOpacity>
};

const styles = StyleSheet.create ({
    button: {
        backgroundColor: Colors.lose,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 15,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
});

export default SecondaryButton;