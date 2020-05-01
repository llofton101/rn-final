import React from 'react';
import {View,Text, Image,TouchableOpacity,StyleSheet} from 'react-native';
 
function PlayerCard (props){
    return(
        <View style={styles.column}>
            <Text >{props.playerName}</Text>
            <Image
               source={{ uri:  props.choice.uri}}
                resizeMode="contain"
                style={styles.choiceImage}
            />
            <Text>{props.choice.name}</Text>
        </View>
    )      
}


const styles = StyleSheet.create({
   column:{
       flex : 1,
       flexDirection: 'column',
       justifyContent: 'center',
       alignItems: 'center'
   },
   Text:{
        color : 'black',
        fontSize: 18,
        fontWeight : '600'
   },
   choiceImage :{
        width : 150,
        height: 150
   }
  });

export default PlayerCard;