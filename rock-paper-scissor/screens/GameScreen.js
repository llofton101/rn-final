// Author: Lauren Lofton
import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Button
} from 'react-native';

import ChoiceCard from '../components/ChoiceCard';
import PlayerTitle from '../components/PlayerTitle';
import RoundCount from '../components/RoundCount';
import GameStatus from '../components/GameStatus';
import ButtonGroup from '../components/ButtonGroup';
import { CHOICES } from '../constants/choices';
import Card from '../components/Card'



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
 
export default function GameScreen() {
  const [gamePrompt, setGamePrompt] = useState('Choose!');
  const [userChoice, setUserChoice] = useState({});
  const [computerChoice, setComputerChoice] = useState({});
  const [guessRounds, setGuessRounds] = useState(0);
  const [win, setWin] = useState(0);
  const [lose, setLose] = useState(0);
  const [tie, setTie] = useState(0);

  const onPress = (playerChoice) => {
    
    const newUserChoice = CHOICES.find(choice => choice.name === playerChoice);
    const newComputerChoice =randomComputerChoice();
    setGuessRounds(guessRounds+1)
    const result = getRoundOutcome(newUserChoice, newComputerChoice);

    setGamePrompt(result);
    setUserChoice(newUserChoice);
    setComputerChoice(newComputerChoice);

    if (result == 'You Won!') {
        setWin(win+1)
      }
      else if (result == 'You Lost!') {
        setLose(lose+1); 
      }
      else {
        setTie(tie+1);     
      }
  };

  const configureNewGame = () => {
    setTie(0);
    setLose(0);
    setWin(0);
    setGuessRounds(0);
    setGamePrompt('Choose!');
    setComputerChoice('');
    setUserChoice('');
};

  return (
    <View style={styles.container}>
       <ImageBackground style={styles.backgroundImage} source={require('../assets/rx.png')} >
           
            <View style={styles.RoundWrapper}>
         
              <RoundCount onRestart={configureNewGame}
                winRound={win}
                loseRound={lose}
                tieRound={tie}
                totalRound={guessRounds}
              />
           
            </View>
           
            <View style={styles.GamePlayWrapper}>
              <Card style={styles.card}>
                <PlayerTitle playerName="Opponent" />
                <ChoiceCard choice={computerChoice} />
                <View style={styles.GameStatusWrapper}>
                <GameStatus 
                    gamePrompt={gamePrompt}/>
                </View>
                    <ChoiceCard choice={userChoice} />
                    <PlayerTitle playerName="You" />
                   
              
            
            <View style={styles.ButtonGroupWrapper}>
                  <ButtonGroup onPress={onPress} />
            </View>
            </Card>
            </View>
            <View style={styles.bottomButtons}>
            <View style={styles.buttonWrapper}>
              <Button style={styles.button} title="CLEAR BOARD" onPress={configureNewGame}></Button>
            </View>
            <View style={styles.buttonWrapper}>
            <Button style={styles.button} title="HISTORY" onPress={()=>{}}></Button>
            </View>
            </View>
            </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center'
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
    justifyContent: 'center'
   
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  GameStatusWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
  },
  RoundWrapper: {
  flex: .5,
    padding: 20,
  },
  GamePlayWrapper: {
  
  flex: 1.1,
    flexDirection: 'column',
  },
  ButtonGroupWrapper: {
    flexDirection: 'row',
    flex: 1.5,
    marginTop: -20,
  },
  bottomButtons: {
    flexDirection: 'row',
  },

  buttonWrapper: {
  flex: 1,
  margin: 20,
  },
  card: {
    flex: 1,
    backgroundColor: 'rgba(234, 251, 110, 0.54)',
    marginBottom: 15,
    marginTop: -24,
  },

});