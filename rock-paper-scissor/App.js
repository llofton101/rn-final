// Author: Lauren Lofton
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import GameScreen from './screens/GameScreen';

import StartGameScreen from './screens/StartGameScreen';



export default function App() {
  const [randomNumber, setRandomNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const startGameHandler = (selectedNumber) => {
    setRandomNumber(selectedNumber);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (randomNumber && guessRounds <= 0) {
    content =  <GameScreen randomNumber={randomNumber} />
  } 

  return (
    <View style={styles.screen}>

      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
  
});