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
        stats: { power: 8, defence: 3 },
      },
      {
        playerNumber: 2,
        HP: 120,
        MaxHP: 180,
        currentDiceID: 4,
        currentActor: 5,
        stats: { power: 8, defence: 3 },
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
          setPower: (playerNumber, power) => {
            const playersState = Object.assign({}, this.state.playersState);
            playersState[playerNumber].stats.power = power;
            this.setState({
              playersState,
            });
          },
          setDefence: (playerNumber, defence) => {
            const playersState = Object.assign({}, this.state.playersState);
            playersState[playerNumber].stats.defence = defence;
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
