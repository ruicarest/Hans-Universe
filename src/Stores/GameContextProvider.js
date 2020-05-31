import React, { Component } from "react";
import GameContext from "./GameContext";

import { getActorByID } from "../Services/ActorsList";

const GameStates = {
  states: [
    {
      game_state_id: "INIT_GAME",
      on: "PLAYER1_ATTACK",
    },
    {
      game_state_id: "PLAYER1_ATTACK",
      on: "PLAYER2_ATTACK",
    },
    {
      game_state_id: "PLAYER2_ATTACK",
      on: "PLAYER1_ATTACK",
    },
    {
      game_state_id: "PLAYER1_DIE",
      on: "GAME_FINISH",
    },
    {
      game_state_id: "PLAYER2_DIE",
      on: "GAME_FINISH",
    },
    {
      game_state_id: "GAME_FINISH",
      on: "GAME_RESET",
    },
    {
      game_state_id: "GAME_RESET",
      on: "GAME_INIT",
    },
  ],
};

class GameContextProvider extends Component {
  state = {
    gameState: {},
    currentState: "PLAYER1_ATTACK",
    playersState: [
      {
        playerNumber: 1,
        HP: 100,
        currentDiceID: 1,
        currentDamage: null,
        currentDiceCount: 0,
        currentActor: {
          id: 2,
          src: "./images/Actors/solid2_front.jpg",
          thumbnail: "./images/Actors/thumbnails/solid2_front_tn.jpg",
          name: "Agirtado",
          description: "2 speed",
          power: 4,
          shield: 3,
          MaxHP: 100,
        },
        actorsList: [3, 4],
        diceList: [1, 2, 3, 4, 5, 6],
      },
      {
        playerNumber: 2,
        HP: 120,
        currentDiceID: 4,
        currentDamage: null,
        currentDiceCount: 0,
        currentActor: {
          id: 1,
          name: "Pakato",
          description: "1 speed",
          src: "./images/Actors/solid1_front.jpg",
          thumbnail: "./images/Actors/thumbnails/solid1_front_tn.jpg",
          MaxHP: 180,
          power: 8,
          shield: 4,
        },
        actorsList: [1, 2],
        diceList: [1, 2, 3, 4, 5, 6],
      },
    ],
  };

  render() {
    return (
      <GameContext.Provider
        value={{
          playersState: this.state.playersState,
          currentState: this.state.currentState,
          setNewActor: (playerNumber, actorID) => {
            const playersState = Object.assign({}, this.state.playersState);
            playersState[playerNumber].currentActor = getActorByID(actorID);
            this.setState({
              playersState,
            });
          },
          updatePlayer: (playerNumber, fieldsToChange) => {
            const playersState = Object.assign({}, this.state.playersState);
            playersState[playerNumber] = {
              ...playersState[playerNumber],
              ...fieldsToChange,
            };
            this.setState({
              playersState,
            });
          },
          changeState: () => {
            const nextState = GameStates.states.find(
              (state) => state.game_state_id == this.state.currentState
            ).on;
            console.log("Rui NextState :", nextState);
            this.setState({
              currentState: nextState,
            });
          },
          applyDamage: (damage) => {
            //TODO
          },
        }}
      >
        {this.props.children}
      </GameContext.Provider>
    );
  }
}

export default GameContextProvider;
