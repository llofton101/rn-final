// Author: Lauren Lofton
import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';

import ChoiceCard from '../components/ChoiceCard';
import PlayerTitle from '../components/PlayerTitle';
import RoundCount from '../components/RoundCount';
import GameStatus from '../components/GameStatus';
import ButtonGroup from '../components/ButtonGroup';
import Card from '../components/Card'
import MainButton from '../components/MainButton';
import SecondaryButton from '../components/SecondaryButton';

const GameScreen = props => {

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.backgroundImage} source={require('../assets/rx.png')} >
        <View style={styles.RoundWrapper}>
            <RoundCount onRestart={props.configureNewGame}
            winRound={props.win}
            loseRound={props.lose}
            tieRound={props.tie}
            totalRound={props.guessRounds}
            />
        </View>
      
        <View style={styles.GamePlayWrapper}>
          <Card style={styles.card}>
              <PlayerTitle playerName="Opponent" />
              <ChoiceCard choice={props.computerChoice} />

              <View style={styles.GameStatusWrapper}>
                <GameStatus gamePrompt={props.gamePrompt}/>
              </View>

              <ChoiceCard choice={props.userChoice} />
              <PlayerTitle playerName="You" />
          
            <View style={styles.ButtonGroupWrapper}>
                <ButtonGroup onPress={props.onPress} />
            </View>
          </Card>
        </View>
        <View style={styles.bottomButtons}>
          <View style={styles.buttonWrapper}>
            <SecondaryButton onPress={props.configureNewGame}>CLEAR BOARD</SecondaryButton>
          </View>
          <View style={styles.buttonWrapper}>
            <MainButton  onPress={props.historyHandler}>HISTORY</MainButton>
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
    marginBottom: 3,
    marginTop: -20,
  },
});

export default GameScreen