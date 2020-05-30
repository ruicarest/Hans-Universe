import React, { Component } from "react";
import GameContext from "./GameContext";

import { getActorByID } from "../Services/ActorsList";

class GameContextProvider extends Component {
  state = {
    playersState: [
      {
        playerNumber: 1,
        HP: 100,
        currentDiceID: 1,
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
        }}
      >
        {this.props.children}
      </GameContext.Provider>
    );
  }
}

export default GameContextProvider;
