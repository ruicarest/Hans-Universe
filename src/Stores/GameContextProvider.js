import React, { Component } from "react";
import GameContext from "./GameContext";

class GameContextProvider extends Component {
  state = {
    playersState: [
      {
        playerNumber: 1,
        HP: 100,
        MaxHP: 200,
        currentDiceID: 1,
        currentActor: 10,
        stats: [
          { label: "ATK", value: 10 },
          { label: "DEF", value: 5 },
        ],
      },
      {
        playerNumber: 2,
        HP: 120,
        MaxHP: 180,
        currentDiceID: 4,
        currentActor: 5,
        stats: [
          { label: "ATK", value: 8 },
          { label: "DEF", value: 3 },
        ],
      },
    ],
  };

  render() {
    return (
      <GameContext.Provider
        value={{
          playersState: this.state.playersState,
          setActor: (playerNumber, actorID) => {
            const playersState = Object.assign({}, this.state.playersState);
            playersState[playerNumber].currentActor = actorID;
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
