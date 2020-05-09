// Author: Lauren Lofton
import React, { useState } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';

import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';
import GameHistoryScreen from './screens/GameHistoryScreen';
import { CHOICES } from './constants/choices';

export default function App() {
  const [guessRounds, setGuessRounds] = useState(0);
  const [viewHistory, setViewHistory] = useState(false);
  const [gameStart, setGameStart] = useState(false);
  const [win, setWin] = useState(0);
  const [lose, setLose] = useState(0);
  const [tie, setTie] = useState(0);
  const [gamePrompt, setGamePrompt] = useState('Choose!');
  const [userChoice, setUserChoice] = useState({});
  const [computerChoice, setComputerChoice] = useState({});
  const [logRound, setLogRound] = useState([]);
  const [winPercent, setWinPercent] = useState(0);
  const [losePercent, setLosePercent] = useState(0);
  const [tiedPercent, setTiedPercent] = useState(0);

  const startGameHandler = () => {
    setGameStart(true);
    setViewHistory(false);
    setTie(tie);
    setLose(lose);
    setWin(win);
    setWinPercent(0);
    setLosePercent(0);
    setTiedPercent(0);
    setGuessRounds(guessRounds);
    setGamePrompt('Choose!');
    setComputerChoice('');
    setUserChoice('');
    setLogRound([]);
  };

  const onPress = (playerChoice) => {
    const newUserChoice = CHOICES.find(choice => choice.name === playerChoice);
    const newComputerChoice = randomComputerChoice();
    const result = getRoundOutcome(newUserChoice, newComputerChoice);
    
    setGamePrompt(result);
    setUserChoice(newUserChoice);
    setComputerChoice(newComputerChoice);
    if ((guessRounds) >= 100) {
      Alert.alert('That\'s too many rounds!', 'Maybe you should reset.', [
          { text: 'Okay!', style: 'cancel' }
      ]);
      return;
      }
    if (result == 'You Won!') {
        setWin(win+1);
        setGuessRounds(guessRounds+1)
        setWinPercent((((win+1)/(guessRounds+1))*100).toFixed(1));
        setLosePercent(((lose/(guessRounds+1))*100).toFixed(1));
        setTiedPercent(((tie/(guessRounds+1))*100).toFixed(1));
        
      }
      else if (result == 'You Lost!') {
        setLose(lose+1); 
        setGuessRounds(guessRounds+1)
        setWinPercent(((win/(guessRounds+1))*100).toFixed(1));
        setLosePercent((((lose+1)/(guessRounds+1))*100).toFixed(1));
        setTiedPercent(((tie/(guessRounds+1))*100).toFixed(1));
       
      }
      else {
        setTie(tie+1);  
        setGuessRounds(guessRounds+1)  
        setWinPercent(((win/(guessRounds+1))*100).toFixed(1));
        setLosePercent(((lose/(guessRounds+1))*100).toFixed(1));
        setTiedPercent((((tie+1)/(guessRounds+1))*100).toFixed(1));
      
      }
   
      setLogRound(curLogRound => [result.toString(), ...curLogRound])
 
  };
  const configureNewGame = () => {
    setTie(0);
    setLose(0);
    setWin(0);
    setTiedPercent(0);
    setLosePercent(0);
    setWinPercent(0);
    setGuessRounds(0);
    setGamePrompt('Choose!');
    setComputerChoice('');
    setUserChoice('');
    setLogRound('');
  };

  const randomComputerChoice = () => 
    CHOICES[Math.floor(Math.random() * CHOICES.length)];
  
  const getRoundOutcome = (userChoice, computerChoice) => {
    let result;
    if (userChoice.name === 'virus') {
      result = computerChoice.name === 'crowd' ? 'You Won!' : 'You Lost!';
    };
    if (userChoice.name === 'paper') {
      result = computerChoice.name === 'virus' ? 'You Won!' : 'You Lost!';
    };
    if (userChoice.name === 'crowd') {
      result = computerChoice.name === 'paper' ? 'You Won!' : 'You Lost!';
    };
    if (userChoice.name === computerChoice.name) result = 'Tied game!';
    return [result];
  };

  const historyHandler = () => {
    setViewHistory(true);

  };
 
  const renderListItem = (guessRounds, itemData) => (
    <View style={styles.listItem}>
      <Text>Round #{guessRounds - itemData.index}</Text>
      <Text>{itemData.item}</Text>
    </View>
  )

  const goBack = () => {
    setViewHistory(false);
  }

  let content = <StartGameScreen startGameHandler={startGameHandler}  />;

  if ((viewHistory===(false)) && (gameStart===(true))) {
    content =  <GameScreen 
      historyHandler={historyHandler} 
      onPress={onPress} 
      configureNewGame={configureNewGame}
      userChoice={userChoice}
      computerChoice={computerChoice}
      tie={tie}
      win={win}
      lose={lose}
      guessRounds={guessRounds}
      gamePrompt={gamePrompt}
    />
  };
  if (viewHistory===(true)) {
    content = <GameHistoryScreen  
      goBack={goBack} 
      renderListItem={renderListItem} 
      winPercent={winPercent}
      losePercent={losePercent}
      tiedPercent={tiedPercent}
      guessRounds={guessRounds}
      logRound={logRound} 
      />;
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
  },
  background: {
    flex: 1,
    resizeMode: "repeat",
    justifyContent: "center",
    backgroundColor: 'white'
  },
  listItem: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 300,
}
  
});