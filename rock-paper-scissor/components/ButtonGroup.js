// Author: Lauren Lofton
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { CHOICES } from '../constants/choices';
    
function ButtonGroup(props) {
    
    const choices = CHOICES;
    return choices.map((item,index) => {
        return(
        <View style={styles.container} key={index}>
        <TouchableOpacity
        onPress={() => props.onPress(item.name)}>
          
            <View style={styles.imageWrapper}>
                <Image style={styles.image} source={item.source}/>
            </View>
            <View style={styles.textWrapper}>
                <Text style={styles.buttonText}>
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                </Text>
            </View>
        </TouchableOpacity>
        </View>
        )
    })
};

const styles = StyleSheet.create({
    container:{
     padding: 20,
    },
    buttonText:{
        alignSelf:'center',
        fontSize:25,
        color: 'maroon',
        marginTop: 35,
        textShadowOffset: {width: 0, height: 0},
        textShadowColor: 'black',
        textShadowRadius: 2,
    },
    textWrapper: {
        position: 'absolute',
        zIndex: 2,
        paddingLeft: 20,
    },
    image: {
        width: 100,
        height: 50,
        zIndex: 1,
        resizeMode: 'contain',
    }
});

export default ButtonGroup;