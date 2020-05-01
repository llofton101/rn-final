import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from 'react-native';

import ChoiceCard from '../components/ChoiceCard';
import PlayerTitle from '../components/PlayerTitle';
import Header from '../components/Header';
import Card from '../components/Card';
import RoundCount from '../components/RoundCount';
import GameStatus from '../components/GameStatus';


const CHOICES = [
    {
      name: 'rock',
         uri: "data:image/png;base64,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",
    },
    {
      name: 'paper',
      uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAMAAAC8EZcfAAAANlBMVEUAAAChoaGUlJSnqKifn6CampqVlZXBwsKurq67u7u4uLiHh4fBwcGHh4f8/PLW1taurq7p6uvhYhsCAAAADHRSTlMAAAAAAAAAAAAAAAD/kRimAAABXUlEQVR4XuzVuQnAMBQFQWe+wEf/zTp7P1FgEAgFsxVMtstcSZK0/QwQEBAQELDNWtPTaE+DqID9AQICAg6Z2ZEK86Y7FXVNRZ0cCAgICAg4ZGaFuRoVuqgFPNPkQEBAQEDArpl97NW7CoAwFARR0cYHJub/f9Zut7kQhCC5MFNvcbqNzqx8rqpbrcrUPECAAAECBGjMoTpnNqRHRdTJgQABAgQIsMMypqkyuKoiah4gQIAAAQL8l+Waiq4uDxAgQIAAAToPR1ONqcqsTV1qSiBAgAABAnzZnVccAGIYBqK7Uov6U+9/2bK4ICoKCJiBJn4XUGn8rRiqWMNJbx4rORAgQIAAAYZTtXVLmGIJ47GSAwECBAgQYDjVw6hqvTGJgAABAgQI8LRXhzYAgEAAxMBgCPuvi+MNwZDwgt4EdReAJ9Sorc4z+w0ICAgICBj1TQkYwPsAAQEB85MkaQK0idUfMSGjaAAAAABJRU5ErkJggg==",
    },
    {
      name: 'scissors',
      uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAMAAAC8EZcfAAAAG1BMVEUAAABvNStwcHCoqKiLQzamTz9CQkLV1dVcLR/dFVdiAAAAAXRSTlMAQObYZgAAANRJREFUeF7t1zkKA0EMRUHP4uX+J3am70A0YwwOuuulAlGZ0G2mJEmSJGmrjurZlCkgICAgIOAna6+uskJdDQgICAgIGNZZhXCVFf4aQEBAQEDAsO7VL6wVgICAgICAPetV7dX3rEzXBQICAgICBjNmBbNX2TIBEBAQEBDwZ1bqzl/2dayZgYCAgICAZzUGbk1j1sxAQEBAQMCjaUw4mzrWzEBAQEBAwGDGz9AY07HWAAICAgIChtBNH9VVzFpAQEBAQMAek8YAQEBAQEDAvyVJkiRJb6Fof1ll+OquAAAAAElFTkSuQmCC",
    },
  ];
  
  const randomComputerChoice = () => 
        CHOICES[Math.floor(Math.random() * CHOICES.length)];
  
  const getRoundOutcome = (userChoice, computerChoice) => {
    let result;
    if (userChoice.name === 'rock') {
      result = computerChoice.name === 'scissors' ? 'You Won!' : 'You Lost!';
    };
    if (userChoice.name === 'paper') {
      result = computerChoice.name === 'rock' ? 'You Won!' : 'You Lost!';
    };
    if (userChoice.name === 'scissors') {
      result = computerChoice.name === 'paper' ? 'You Won!' : 'You Lost!';
    };
  
    if (userChoice.name === computerChoice.name) result = 'Tied game!';
    return [result];
  };
  
  const Button = (props) => (
    <TouchableOpacity
      style={styles.buttonStyle}
      onPress={() => props.onPress(props.name)}
    >
      <Text style={styles.buttonText}>
        {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
      </Text>
    </TouchableOpacity>
  );

 
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
         <ImageBackground source={require('../assets/bg.png')} style={styles.image}>
            <Header title='Rock - Paper - Scissors'/>
            <View style={styles.Roundgroup}>
         
            <RoundCount onRestart={configureNewGame}
              winRound={win}
              loseRound={lose}
              tieRound={tie}
              totalRound={guessRounds}
            />
    
            </View>
            <Card style={styles.GamePlayWrapper}>
        
                <PlayerTitle playerName="Opponent" />
                <ChoiceCard choice={computerChoice} />
                <View style={styles.GameStatusWrapper}>
                <GameStatus 
                    gamePrompt={gamePrompt}/>
                </View>
                    <ChoiceCard choice={userChoice} />
                    <PlayerTitle playerName="You" />
            </Card>
            <View style={styles.ButtonGroupWrapper}>
                {CHOICES.map(choice => {
                    return (
                    <Button
                        key={choice.name}
                        name={choice.name}
                        onPress={onPress}
                    />
                    )
                })}
            </View>
        </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: "repeat",
    justifyContent: "center"
  },
  imageFrame: {
    width: 200,
    height: 150,
    resizeMode: 'contain',
    alignItems: 'center',
  
},
  GameStatusWrapper: {
    flex: .5,
    justifyContent: "center",
    alignItems: 'center',
   
  },
  Roundgroup: {
    flex: 0.4,
    padding: 20,
  },
  GamePlayWrapper: {
    flex: 1,
    flexDirection: 'column',
 
  },
  ButtonGroupWrapper: {
    flexDirection: 'row',
    flex: 0.3,
    justifyContent: "center",
    alignItems: 'center',
  },
  buttonStyle:{
      
    width:150,
    marginVertical:15,
    padding:10,
    borderRadius:15,

},
buttonText:{

    alignSelf:'center',
    fontSize:20,
    fontWeight:'300',
    color: 'white',
}



});